import Product from '../models/product.model.js';

export const create = (data) => Product.create(data);
export const findAll = () => Product.find();
export const findById = (id) => Product.findById(id);
export const update = (id, data) =>
  Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const remove = (id) => Product.findByIdAndDelete(id);
