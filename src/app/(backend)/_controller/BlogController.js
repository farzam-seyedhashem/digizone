import {db} from '../_helper/db'
const Blog = db.Blog

async function index(options) {
    const {per_page,pageNumber} = options || {per_page:12,pageNumber:1}
    // const resPerPage = parseInt(per_page) || 12;
    // const page = parseInt(pageNumber) || 1;
    // const category = req.query.category || "all";
    // let filterObject = {}
    // const tagQuery = req.query.tag;
    // const sQuery = req.query.s;

    // if (tagQuery) {
    //     filterObject.tags = tagQuery;
    // }
    // const idQuery = req.query.id;
    // if (idQuery) {
    //     filterObject._id = idQuery;
    // }
    // if (sQuery) {
    //     filterObject.title = {
    //         "$regex": sQuery, "$options": "i"
    //     };
    // }
    const response = {
        "currentPage": pageNumber,
        "data": [],
        "perPage": per_page,
        "lastPage": false,
        "lastPageIndex": 1,
        "count": 1
    }
    // Blog.find({}).exec(function (err,docs ) {
    //    return docs
    // })
    const count = await Blog.countDocuments();
    response.lastPageIndex = Math.ceil(count / per_page)
    response.itemCount = count
    if (count <= (per_page * pageNumber)) {
        response.lastPage = true
    }
    response.data = await Blog.find({}).skip((per_page * pageNumber) - per_page).limit(per_page).sort({'createdAt': -1}).populate('thumbnail')

    return JSON.stringify(response)

    // try {
    // Blog.find(filterObject).skip((resPerPage * page) - resPerPage)
    //     .limit(resPerPage).sort({'createdAt': -1}).populate('tags').populate('thumbnail').exec(function (err, docs) {
    //     Blog.count(filterObject).exec(function (err, count) {
    //
    //
    //
    //         response.data = docs;
    //         res.send(response);
    //     })
    // });
    //     return Blog.find()
    // } catch (e) {
    //     console.log(e)
    // }
// Blog.find(regexQuery, function (err, docs) {
//
//     response.data = docs;
//     res.send(response);
// })


}

// Store a newly created resource in storage.
async function store(body) {
    console.log("body",body)
    let newNews = new Blog(body);
    await newNews.save();
    return newNews
}

// Display the specified resource.
async function show(req, res) {
    const docs = await Blog.find({slug: req.query.slug}).populate('tags').populate('thumbnail').exec(function (err, docs) {
        res.send(docs[0])
    });
    // console.log(docs)
    //  return docs[0]
}

// Display the specified resource.
async function getById(id) {
    return await Blog.findById(id).populate('thumbnail')
}
async function getBySlug(slug) {
    return JSON.stringify(await Blog.findOne({slug:slug}).populate('thumbnail'))

}

async function comments(req, res) {
    let body = req.body;
    const comment = {
        name: body.name,
        email: body.email,
        websiteURL: body?.websiteURL,
        content: body.content,
        createdAt: Date.now(),
        approved: "0",
    };
    await Blog.findOneAndUpdate({_id: req.query.slug}, {$push: {comments: comment}}, function (err, response) {
        res.send("ok")
    });
    // Blog.findOneAndUpdate({_id: req.query.id}, body, {new: true}, function (err, response) {
    //     res.send(response)
    // });
}

// Update the specified resource in storage.
async function update(req, res) {
    let body = req.body;
    // let doc = Blog.findOneAndUpdate({_id: req.query.id}, body);
    Blog.findOneAndUpdate({_id: req.query.slug}, body, {new: true}, function (err, response) {
        res.send(response)
    });

};

// Remove the specified resource from storage.
async function destroy(id) {
    return await Blog.findOneAndDelete({_id: id});
}

export {
    getBySlug,
    index,
    show,
    store,
    getById,
    comments,
    update,
    destroy

}
