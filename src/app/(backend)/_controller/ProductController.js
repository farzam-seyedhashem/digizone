import {db} from '@backend/_helper/db'

const Product = db.Product

async function index(options) {
    // per_page: options?.per_page? options?.per_page: 4, page: options?.page ? options?.page : 1
   console.log(options)
    let filter = {}
    if (options?.searchParams && Object.keys(options?.searchParams).length > 0) {
        filter.spec = {
            $all: []
        }
        const searchParams = options?.searchParams
        searchParams && Object.keys(searchParams).map(key => {
            filter.spec["$all"].push({"$elemMatch": {key: key, value: {$in: searchParams[key]}}})
        })
    }
    return JSON.stringify(await Product.find(filter).populate({
        path: 'spec.key',
        strictPopulate: false
    }).populate('thumbnail').populate('images').populate({
        path: 'category',
        strictPopulate: false
    }));
}

async function getById(id) {
    return JSON.stringify(await Product.findOne({_id: id}).populate({
        path: 'spec.key',
        strictPopulate: false
    }).populate('thumbnail').populate('images').populate({path: 'category', strictPopulate: false}));
}

async function getBySlug(slug) {
    return JSON.stringify(await Product.findOne({slug: slug}).populate({
        path: 'spec.key',
        strictPopulate: false
    }).populate('thumbnail').populate('images').populate({path: 'category', strictPopulate: false}));
}

// Store a newly created resource in storage.
async function store(body) {
    console.log(body);
    let newNews = new Product(body);
    await newNews.save();
    return newNews
}

// Display the specified resource.
// async function show(req, res) {
//     const docs = await ProductModel.find({slug: req.query.slug}).populate('tags').populate('thumbnail').exec(function (err, docs) {
//         res.send(docs[0])
//     });
//     // console.log(docs)
//     //  return docs[0]
// }

// Display the specified resource.
// async function getById(req, res) {
//     ProductModel.findById(req.query.slug).populate('tags').populate('categories').populate('thumbnail').exec(function (err, docs) {
//         res.send(docs[0])
//     });
// }

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
    await ProductModel.findOneAndUpdate({_id: req.query.slug}, {$push: {comments: comment}}, function (err, response) {
        res.send("ok")
    });
    // ProductModel.findOneAndUpdate({_id: req.query.id}, body, {new: true}, function (err, response) {
    //     res.send(response)
    // });
}

// Update the specified resource in storage.
async function update(body) {
    // let body = req.body;
    // Product.find
    return await Product.findOneAndUpdate({_id: body.id}, body, {new: true});
    // ProductModel.findOneAndUpdate({_id: req.query.slug}, body, {new: true}, function (err, response) {
    //     res.send(response)
    // });

}

// Remove the specified resource from storage.
async function destroy(id) {
    return await Product.findOneAndDelete({_id: id});
}

export {
    getBySlug,
    getById,
    index,
    store,
    comments,
    update,
    destroy

}
