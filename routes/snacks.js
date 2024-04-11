const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router();

const snacksCtrl = require("../controllers/snacks")

//  all path start with /snack
router.get("/new", ensureLoggedIn, snacksCtrl.new)
router.get("/:id", ensureLoggedIn, snacksCtrl.show)
router.delete("/:id", ensureLoggedIn, snacksCtrl.delete)
router.get("/", ensureLoggedIn, snacksCtrl.index)
router.post("/", ensureLoggedIn, snacksCtrl.create)

module.exports = router 
