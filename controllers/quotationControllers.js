const Quotation = require("../models/quotation");

// saving selected designers
const selectDesigners = async (req, res, next) => {
  const homeOwnerId = req.query.homeOwnerId;
  const selectedDesigners = req.body.selectedDesigners;

  const data = new Quotation({
    homeOwnerId,
    selectedDesigners,
  });

  data.save((err, done) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(done);
    }
  });
};

module.exports = {
  selectDesigners,
};
