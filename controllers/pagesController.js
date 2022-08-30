const LivingDinningPage = require("../models/pageModels/LivingDinningPage");

const livingDinning = async (req, res, next) => {
  try {
    const data = await LivingDinningPage.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
};


module.exports = {
  livingDinning
};
