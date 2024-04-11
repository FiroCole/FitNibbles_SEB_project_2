const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router();

const snacksCtrl = require("../controllers/snacks")

//  all path start with /snack
// get snacks/new to return view (form) to add a new snack. snackCtrl will use new method
router.get("/new",ensureLoggedIn, snacksCtrl.new)


// get snacks/:id to return view (form) to add a new snack. snackCtrl will use new method
router.get("/:id", ensureLoggedIn, snacksCtrl.show)

// index
router.get("/", ensureLoggedIn, snacksCtrl.index)


//  post /snacks to handle the new snack form being submitted
 router.post("/",ensureLoggedIn, snacksCtrl.create)


module.exports = router 
