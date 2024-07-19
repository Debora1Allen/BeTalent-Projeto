const { Sale, Customer, Product } = require('../models');


exports.store = async (req, res) => {
  const { customerId, productId, quantity } = req.body;

  try {
    const customer = await Customer.findByPk(customerId);
    const product = await Product.findByPk(productId);

    if (!customer || !product) {
      return res.status(404).json({ error: 'Customer or Product not found' });
    }

    const unitPrice = product.price;
    const totalPrice = unitPrice * quantity;

    const sale = await Sale.create({
      customerId,
      productId,
      quantity,
      unitPrice,
      totalPrice,
      dateTime: new Date()
    });

    res.status(201).json(sale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
