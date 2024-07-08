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
    subCategories: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false,
    },
    content: {
        type: String,
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

}, {timestamps: true}, {
    toJSON: {
        virtuals: true,
    }
});

export function CategoryModel() {
    return mongoose.models.Blog || mongoose.model('Category', BlogSchema);
}

// module.exports =
