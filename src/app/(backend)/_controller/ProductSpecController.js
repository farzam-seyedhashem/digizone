import {db} from '@backend/_helper/db'

const Specification = db.Specification

async function index(options) {
    return JSON.stringify(await Specification.find({}).populate({path:'categories',strictPopulate: false}));
}
async function getByCatId(catId) {
     const spec = await Specification.find({}).populate({path:'categories',strictPopulate: false});
     console.log(spec);
     return await spec.filter(item=>item.categories && item.categories.find(cat=>cat.id === catId));
}

// Store a newly created resource in storage.
async function store(body) {
    console.log(body);
    let newNews = new Specification(body);
    await newNews.save();
    return newNews
}

// Display the specified resource.
// async function show(req, res) {
//     const docs = await SpecificationModel.find({slug: req.query.slug}).populate('tags').populate('thumbnail').exec(function (err, docs) {
//         res.send(docs[0])
//     });
//     // console.log(docs)
//     //  return docs[0]
// }

// Display the specified resource.
// async function getById(req, res) {
//     SpecificationModel.findById(req.query.slug).populate('tags').populate('categories').populate('thumbnail').exec(function (err, docs) {
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
    await SpecificationModel.findOneAndUpdate({_id: req.query.slug}, {$push: {comments: comment}}, function (err, response) {
        res.send("ok")
    });
    // SpecificationModel.findOneAndUpdate({_id: req.query.id}, body, {new: true}, function (err, response) {
    //     res.send(response)
    // });
}

// Update the specified resource in storage.
async function update(req, res) {
    let body = req.body;
    // let doc = SpecificationModel.findOneAndUpdate({_id: req.query.id}, body);
    SpecificationModel.findOneAndUpdate({_id: req.query.slug}, body, {new: true}, function (err, response) {
        res.send(response)
    });

};

// Remove the specified resource from storage.
async function destroy(id) {
    return await Specification.findOneAndDelete({_id: id});
}

export {
    getByCatId,
    index,
    store,
    comments,
    update,
    destroy

}
