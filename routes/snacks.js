const express = require('express');
const router = express.Router();

const snacksCtrl = require("../controllers/snacks")

//  all path start with /snack

// get snacks/new to return view (form) to add a new snack. snackCtrl will use new method
// router.get("/new", snacksCtrl.new)


router.get("/", snacksCtrl.index)

module.exports = router 