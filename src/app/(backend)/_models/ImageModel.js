import mongoose from 'mongoose'
const Schema = mongoose.Schema;
let ImageSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    // alt: [{
    //     value: {
    //         type: String,
    //     },
    // }],

}, {timestamps: true}, {
    toJSON: {
        virtuals: true,
    }
});
export function ImageModel() {
    return mongoose.models.Image || mongoose.model('Image', ImageSchema);
}

// module.exports =
