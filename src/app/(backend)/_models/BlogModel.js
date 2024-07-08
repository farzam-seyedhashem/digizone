import mongoose from 'mongoose'
const Schema = mongoose.Schema;
let BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        unique: true,
        type: String,
        required: true,
    },
    thumbnail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
        required: true,
    },
    content: {
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

}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function BlogModel() {
    return mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
}

// module.exports =
