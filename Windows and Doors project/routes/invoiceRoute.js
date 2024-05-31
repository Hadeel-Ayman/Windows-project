const express = require('express');

const { createInvoice } = require('../services/InvoiceService');
const router = express.Router()

router.route('/download-pdf').post(createInvoice)

module.exports = router;