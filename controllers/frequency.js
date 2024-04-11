const Snack = require('../models/snack');
const Frequency = require('../models/frequency');

module.exports = {
  create, 
//   delete : deleteOne,
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