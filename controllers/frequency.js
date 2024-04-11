const Snack = require('../models/snack');
const Frequency = require('../models/frequency');

module.exports = {
  create, 
  edit,
  update: updateOne,
  delete : deleteOne,
};


async function create(req, res) {
    try {
      let frequency = new Frequency(req.body);
      frequency.snack = req.params.id;
      await frequency.save();
      res.redirect(`/snacks/${req.params.id}`);
    } catch (err) {
      console.log(err);
      res.redirect(`/snacks/show`, { title: 'Snack', errorMsg: err.message });
    }
  }

  async function edit(req,res) {
    try {
      const frequency = await Frequency.findOne({ _id: req.params.id });
      res.render("frequency/edit", { title: 'Edit Frequency', frequency });
    } catch (err) {
      console.log(err);
      res.redirect(`/snacks/show`);
    }
  }

  async function updateOne(req, res) {
    try {
        const frequency = await Frequency.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!frequency) {
            throw new Error('Failed to update frequency');
        }
        res.redirect(`/snacks/${frequency.snack}`); // Assuming frequency.snack holds the ID of the snack
    } catch (err) {
        console.log(err);
        // Redirect or render an error
        res.redirect('/snacks'); // Redirect to the list if there's an issue
    }
}

async function deleteOne(req, res) {
  try {
    // Find the frequency document to get the associated snack ID before deletion
    const frequency = await Frequency.findById(req.params.id);
    if (!frequency) {
      throw new Error('Frequency not found');
    }

    // Delete the frequency document
    await Frequency.deleteOne({ _id: req.params.id });

    // Redirect back to the associated snack's show page
    res.redirect(`/snacks/${frequency.snack}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/snacks/show`, { title: 'Snack', errorMsg: err.message });
  }
}
