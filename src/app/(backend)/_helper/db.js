import mongoose from 'mongoose';
import {BlogModel} from '../_models/BlogModel';
import {CategoryModel} from "../_models/CategoryModel";
import {ProductModel} from "../_models/ProductModel";
import {SpecModel} from "../_models/SpecModel";
import {ImageModel} from "../_models/ImageModel";
import {SliderModel} from "../_models/SliderModel";
mongoose.connect("mongodb://127.0.0.1/digi");
mongoose.Promise = global.Promise;

export const db = {
    Blog: BlogModel(),
    Product: ProductModel(),
    Specification: SpecModel(),
    Category: CategoryModel(),
    Image: ImageModel(),
    Slider: SliderModel()
};