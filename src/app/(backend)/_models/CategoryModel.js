import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        unique: true,
        type: String,
        required: true,
    },
    topCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false,

    },
    thumbnail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
        required: false,
    },
    content: {
        type: String,
        default: null,
    },
    sort: {
        type: Number,
        default: null,
    },
    metaTitle: {
        type: String,
        default: null,
    },
    metaDescription: {
        type: String,
        default: null,
    },
    metaKeywords: {
        type: String,
        default: null,
    },

}, {timestamps: true,strict: false,strictPopulate:false}, {
    toJSON: {
        virtuals: true,
    }
});

export function CategoryModel() {
    return mongoose.models.Category || mongoose.model('Category', CategorySchema);
}

// module.exports =
