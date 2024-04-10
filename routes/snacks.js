const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router();

const snacksCtrl = require("../controllers/snacks")

//  all path start with /snack
// index
router.get("/", ensureLoggedIn, snacksCtrl.index)

// get snacks/new to return view (form) to add a new snack. snackCtrl will use new method
router.get("/new", snacksCtrl.new)

//  post /snacks to handle the new snack form being submitted
 router.post("/", snacksCtrl.create)
module.exports = router 