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
        console.log("Fetching snack with ID:", req.params.id);
        const snack = await Snack.findById(req.params.id);
        if (!snack) {
            throw new Error('Snack not found');
        }
        const frequency = await Frequency.find({ snack: snack._id });
        res.render("snacks/show", { title: "Snack Details", snack, frequency });
    } catch (err) {
        console.error(err);
        // Redirect to a generic error page or the snack index with an error message
        res.render('snacks/index', { title: 'Snacks', errorMsg: 'Failed to find snack.' });
    }
}

  
function update(req, res) {
    Snack.update(req.params.id, req.body);
    res.redirect(`/snacks`)
  }