import {db} from '../_helper/db'
import res from "../../../font-vs";
const Slider = db.Slider

async function index() {
    // const resPerPage = parseInt(req.query.per_page) || 12;
    // const page = parseInt(req.query.page) || 1;
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
    // const response = {
    //     "model": Slider.info(),
    //     "currentPage": page,
    //     "data": [],
    //     "perPage": resPerPage,
    //     "lastPage": false,
    //     "lastPageIndex": 1,
    //     "count": 1
    // }
    // Slider.find({}).exec(function (err,docs ) {
    //    return docs
    // })
    return await Slider.find({}).populate('image')

    // try {
    // Slider.find(filterObject).skip((resPerPage * page) - resPerPage)
    //     .limit(resPerPage).sort({'createdAt': -1}).populate('tags').populate('thumbnail').exec(function (err, docs) {
    //     Slider.count(filterObject).exec(function (err, count) {
    //         response.lastPageIndex = Math.ceil(count / resPerPage)
    //         response.itemCount = count
    //         if (count <= (resPerPage * page)) {
    //             response.lastPage = true
    //         }
    //         response.data = docs;
    //         res.send(response);
    //     })
    // });
    //     return Slider.find()
    // } catch (e) {
    //     console.log(e)
    // }
// Slider.find(regexQuery, function (err, docs) {
//
//     response.data = docs;
//     res.send(response);
// })


}

// Store a newly created resource in storage.
async function store(body) {

    console.log("ewklmfln",body.title)

    let newNews = new Slider(body);
    await newNews.save();
    return newNews
}

// Display the specified resource.
async function show(req, res) {
    const docs = await Slider.find({slug: req.query.slug}).populate('tags').populate('thumbnail').exec(function (err, docs) {
        res.send(docs[0])
    });
    // console.log(docs)
    //  return docs[0]
}

// Display the specified resource.
async function getById(slug) {
    return await Slider.findById(slug).populate('image')
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
    await Slider.findOneAndUpdate({_id: req.query.slug}, {$push: {comments: comment}}, function (err, response) {
        res.send("ok")
    });
    // Slider.findOneAndUpdate({_id: req.query.id}, body, {new: true}, function (err, response) {
    //     res.send(response)
    // });
}

// Update the specified resource in storage.
async function update(body) {
    // let body = req.body;
    // let doc = Slider.findOneAndUpdate({_id: req.query.id}, body);
    return await Slider.findOneAndUpdate({_id: body.id}, body, {new: true});

}

// Remove the specified resource from storage.
async function destroy(id) {
    return await Slider.findOneAndDelete({_id: id});
}

export {
    index,
    show,
    store,
    getById,
    comments,
    update,
    destroy

}
