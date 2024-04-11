const express = require('express');
const router = express.Router();

const frequencyCtrl = require("../controllers/frequency")

// This router is mounted to a "starts with" path of '/'

// POST /frequency (create functionality)
// router.post('/frequency', frequencyCtrl.create);
// POST /snacks/:id/frequency
router.post('/snacks/:id/frequency', frequencyCtrl.create);


// get /frequeny/:id/edit
router.get("/frequency/:id/edit", frequencyCtrl.edit);

// put /frequency/:id to handle edit form information that update the entry
router.put("/frequency/:id", frequencyCtrl.update)




module.exports = router;


