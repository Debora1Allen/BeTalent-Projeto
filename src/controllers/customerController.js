const { Customer, Sale } = require('../models');

exports.index = async (req, res) => {
  try {
    const customers = await Customer.findAll({
      attributes: ['id', 'name', 'cpf'],
      order: [['id', 'ASC']]
    });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.show = async (req, res) => {
  const { id } = req.params;
  const { month, year } = req.query;
  try {
    let whereClause = { customerId: id };
    if (month && year) {
      whereClause = {
        ...whereClause,
        date: {
          [Op.gte]: new Date(year, month - 1, 1),
          [Op.lte]: new Date(year, month, 0)
        }
      };
    }
    const customer = await Customer.findByPk(id, {
      include: [
        {
          model: Sale,
          where: whereClause,
          required: false,
          order: [['date', 'DESC']]
        }
      ]
    });
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.store = async (req, res) => {
  const { name, cpf } = req.body;
  try {
    const customer = await Customer.create({ name, cpf });
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, cpf } = req.body;
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    customer.name = name;
    customer.cpf = cpf;
    await customer.save();
    res.json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    await customer.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
