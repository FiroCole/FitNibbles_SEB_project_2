const Snack = require('../models/snack');
const Frequency = require('../models/frequency');

module.exports = {
  index,
  show,
  new: newSnack,
  create,
  update,
  delete: deleteOne,
};

async function index(req, res) {
  const snacks = await Snack.find({});
  res.render('snacks/index', { title: 'All Snacks', snacks });
}

async function newSnack(req, res) {
  res.render('snacks/new', { title: 'Add Snack', errorMsg: '' });
}

async function create(req, res) {
  const snack = new Snack(req.body)
  snack.userSnack = req.user._id;
  try {
    const snackCount = await Snack.countDocuments();

    if (snackCount >= 3) {
      return res.render('snacks/new', { title: 'Add Snack', errorMsg: 'Only 3 snacks are allowed.' });
    }

    await snack.save();
    res.redirect("/snacks");
  } catch (err) {
    console.log(err);
    res.render('snacks/new', { title: 'Add Snack', errorMsg: err.message });
  }
}

async function show(req, res) {
  try {
    const snack = await Snack.findById(req.params.id);
    if (!snack) {
      throw new Error('Snack not found');
    }
    const frequency = await Frequency.find({ snack: snack._id });
    res.render("snacks/show", { title: "Snack Details", snack, frequency });
  } catch (err) {
    console.error(err);
    res.render('snacks/index', { title: 'Snacks', errorMsg: 'Failed to find snack.' });
  }
}

async function update(req, res) {
  await Snack.update(req.params.id, req.body);
  res.redirect(`/snacks`)
}

async function deleteOne(req, res) {
  try {
    const snack = await Snack.findOneAndDelete({ _id: req.params.id, userSnack: req.user._id });
    console.log(snack);
    res.redirect('/snacks');
  } catch (err) {
    console.log(err);
    res.redirect('/snacks');
  }
}