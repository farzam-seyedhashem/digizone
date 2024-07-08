import mongoose from 'mongoose'

const Schema = mongoose.Schema;
let SpecSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    }],
    values: [
        {

            title: String
        }
    ],
    isShowFilter: {
        type: Boolean,
        default: false
    }


}, {timestamps: true}, {
    toJSON: {
        virtuals: true,
    }
});

export function SpecModel() {
    return mongoose.models.Spec || mongoose.model('Spec', SpecSchema);
}

// module.exports =
