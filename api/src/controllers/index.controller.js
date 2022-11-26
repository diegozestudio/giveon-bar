import Category from "../models/Category";

export const findAllCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

export const createCategory = async (req, res) => {
  const { title, description} = req.body;
  const category = { title, description };
  const newCategory= new Category(category);
  const categorySaved = await newCategory.save();
  res.json(categorySaved);
};
