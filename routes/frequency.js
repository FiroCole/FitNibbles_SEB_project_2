const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router();

const frequencyCtrl = require("../controllers/frequency")

// This router is mounted to a "starts with" path of '/'

router.post('/snacks/:id/frequency',ensureLoggedIn, frequencyCtrl.create);
router.get("/frequency/:id/edit",ensureLoggedIn, frequencyCtrl.edit);
router.put("/frequency/:id", ensureLoggedIn, frequencyCtrl.update)
router.delete("/frequency/:id", ensureLoggedIn, frequencyCtrl.delete)

module.exports = router;


