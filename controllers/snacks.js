const Snack = require('../models/snack');

module.exports = {
  index,
//   show,
//   new: newMovie,
//   create, 
//   update,
//   delete : deleteOne,
};

async function index(req, res) {
    const snacks = await Snack.find({});
    res.render('snacks/index', { title: 'All Snacks', snacks });
  }
  
