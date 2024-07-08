import mongoose from 'mongoose'
const Schema = mongoose.Schema;
let SliderSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
        required: true,
    },
}, {timestamps: true}, {
    toJSON: {
        virtuals: true,
    }
});
export function SliderModel() {
    return mongoose.models.Slider || mongoose.model('Slider', SliderSchema);
}

// module.exports =
