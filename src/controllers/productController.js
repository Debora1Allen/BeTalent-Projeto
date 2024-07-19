const { Product } = require('../models');

exports.index = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'description', 'price'],
      where: { isDeleted: false },
      order: [['name', 'ASC']]
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id, isDeleted: false }
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.store = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const product = await Product.create({ name, description, price });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const product = await Product.findOne({ where: { id, isDeleted: false } });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.name = name;
    product.description = description;
    product.price = price;
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ where: { id, isDeleted: false } });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.isDeleted = true;
    await product.save();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
