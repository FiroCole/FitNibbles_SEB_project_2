const Snack = require('../models/snack');

module.exports = {
  index,
//   show,
  new: newSnack,
  create, 
//   update,
//   delete : deleteOne,
};

async function index(req, res) {
    const snacks = await Snack.find({});
    res.render('snacks/index', { title: 'All Snacks', snacks });
  }
  
  async function newSnack(req, res) {
    res.render('snacks/new', { title: 'Add Snack', errorMsg: '' });
  }
  
async function create(req,res) {
    try {
        const snack = await Snack.create(req.body)
        // res.redirect(`/snaks/${snack._id}`); build this later
        res.redirect("/snacks", );
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('snacks/new',{ title: 'New Snacks', errorMsg: err.message });
    }
}