import mongoose from 'mongoose'
const Schema = mongoose.Schema;
let ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        unique: true,
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    spec:[
        {
            key:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spec',
            },
            value:{
                type: mongoose.Schema.Types.ObjectId,

            }
        }
    ],
    thumbnail:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
    },
    images:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
    }],
    content: {
        type: String,
        default: null,
    },
    price: {
        type: String,
        default: null,
    },
    metaTitle:{
        type: String,
        default: null,
    },
    metaDescription:{
        type: String,
        default: null,
    },
    metaKeywords:{
        type: String,
        default: null,
    },

}, {timestamps: true,strict: true}, {
    toJSON: {
        virtuals: true,
    }
});

export function ProductModel() {
    return mongoose.models.Product || mongoose.model('Product', ProductSchema);
}

// module.exports =
