const express = require('express');
const router = express.Router();

const frequencyCtrl = require("../controllers/frequency")

// This router is mounted to a "starts with" path of '/'

// POST /frequency (create functionality)
// router.post('/frequency', frequencyCtrl.create);
// POST /snacks/:id/frequency
router.post('/snacks/:id/frequency', frequencyCtrl.create);

module.exports = router;