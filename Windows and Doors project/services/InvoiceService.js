const Invoice = require('../models/invoiceModel');

exports.createInvoice = async (req, res) => {
    try {
        const { items } = req.body;

        const invoice = new Invoice({ items });
        await invoice.save();

        res.status(201).json('The invoice has been stored successfully');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};