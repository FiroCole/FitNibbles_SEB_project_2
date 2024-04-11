const Snack = require('../models/snack');
const Frequency = require('../models/frequency');


module.exports = {
  index,
  show,
  new: newSnack,
  create, 
  update,
//   delete : deleteOne,
};

async function index(req, res) {
    const snacks = await Snack.find({});
    res.render('snacks/index', { title: 'All Snacks', snacks });
  }
  
  async function newSnack(req, res) {
    res.render('snacks/new', { title: 'Add Snack', errorMsg: '' });
  }
  


async function create(req, res) {
    try {
        const uniqueSnackTypes = await Snack.distinct('Snack');
        if (uniqueSnackTypes.length >= 3) {
            // Redirect or render with an error message saying only 3 unique snacks are allowed
            return res.render('snacks/new', { title: 'Add Snack', errorMsg: 'Only 3 unique snacks can be selected.' });
        }

        // Proceed with creation if less than 3 unique snacks exist
        await Snack.create(req.body);
        res.redirect("/snacks");
    } catch (err) {
        console.log(err);
        res.render('snacks/new', { title: 'Add Snack', errorMsg: err.message });
    }
}



async function show(req, res) {
    try {
        const snack = await Snack.findById(req.params.id);
        const frequency = await Frequency.find({ snack: snack._id });
        res.render("snacks/show", { title: "Snack Details", snack , frequency});
    } catch (err) {
        console.error(err);
        // Only here should you reference err.message, as this is the catch block
        res.render('snacks/new', { title: 'Snack', errorMsg: err.message });
    }
}


  
function update(req, res) {
    Snack.update(req.params.id, req.body);
    res.redirect(`/snacks`)
  }