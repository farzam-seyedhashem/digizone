import {db} from '../_helper/db'
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
const pump = promisify(pipeline);

const Image = db.Image
import uploadFile from '@/app/_helper/UploadImage'
import multer from "multer";

// import {ImageModel} from "@/app/_models/ImageModel";
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
    //     "model": Image.info(),
    //     "currentPage": page,
    //     "data": [],
    //     "perPage": resPerPage,
    //     "lastPage": false,
    //     "lastPageIndex": 1,
    //     "count": 1
    // }
    // Image.find({}).exec(function (err,docs ) {
    //    return docs
    // })
    return await Image.find({})

    // try {
    // Image.find(filterObject).skip((resPerPage * page) - resPerPage)
    //     .limit(resPerPage).sort({'createdAt': -1}).populate('tags').populate('thumbnail').exec(function (err, docs) {
    //     Image.count(filterObject).exec(function (err, count) {
    //         response.lastPageIndex = Math.ceil(count / resPerPage)
    //         response.itemCount = count
    //         if (count <= (resPerPage * page)) {
    //             response.lastPage = true
    //         }
    //         response.data = docs;
    //         res.send(response);
    //     })
    // });
    //     return Image.find()
    // } catch (e) {
    //     console.log(e)
    // }
// Image.find(regexQuery, function (err, docs) {
//
//     response.data = docs;
//     res.send(response);
// })


}

// Store a newly created resource in storage.
async function store(file) {
    'use server'
    // const file =

    try {
        const filePath = `./public/data/images/${file.name}`;
        await pump(file.stream(), fs.createWriteStream(filePath));
        // console.log(file)
        // let uploadFile = multer({
        //     storage: storage,
        //     // limits: { fileSize: maxSize },
        // }).single("file");
        // let storage = multer.diskStorage({
        //     destination: (req, file, cb) => {
        //         if (file.type === 'video/mp4') {
        //             cb(null, "../../../public/data/videos/");
        //         } else
        //             cb(null, "../../../public/data/images/");
        //     },
        //     filename: (req, file, cb) => {
        //         cb(null, file.name);
        //     }
        // })
        // const upload = multer({storage: storage})
        // upload.single("File");
        // console.log(file)
        // await uploadFile(file);
        if (file === undefined) {
            console.log("errrr")
            // images
            // throw new Error()
            // return;
            // res.status(400).send({message: "Please upload a file!"});
        } else {
            // console.log(req)
            // console.log(req.body)
            var image = new Image({
                title: file.name,
                url: file.type === 'video/mp4' ? '/videos/' + file.name : '/images/' + file.name,
                // alt: {value: body.alt, lang: req.body.lang}
                alt: ""
                // like: body.like,
            });
            await image.save();
            return image;
        }
    } catch (err) {
        console.log(err)
        if (err.code === "LIMIT_FILE_SIZE") {
            throw new Error('File size cannot be larger than 2MB!')
            // res.status(500).send({
            //     message: "File size cannot be larger than 2MB!",
            // });
        }

        // throw new Error('Could not upload the file:')
        // res.status(500).send({
        //     message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        // });
    }
}

// Display the specified resource.
async function show(req, res) {
    const docs = await Image.find({slug: req.query.slug}).populate('tags').populate('thumbnail').exec(function (err, docs) {
        res.send(docs[0])
    });
    // console.log(docs)
    //  return docs[0]
}

// Display the specified resource.
async function getById(req, res) {
    Image.findById(req.query.slug).populate('tags').populate('categories').populate('thumbnail').exec(function (err, docs) {
        res.send(docs[0])
    });
}


// Update the specified resource in storage.
async function update(req, res) {
    let body = req.body;
    // let doc = Image.findOneAndUpdate({_id: req.query.id}, body);
    Image.findOneAndUpdate({_id: req.query.slug}, body, {new: true}, function (err, response) {
        res.send(response)
    });

};

// Remove the specified resource from storage.
async function destroy(req, res) {
    Image.remove({_id: req.query.slug}, function (err, updateObj) {
        res.send(updateObj)
    });
};

export {
    index,
    show,
    store,
    getById,
    update,
    destroy

}
