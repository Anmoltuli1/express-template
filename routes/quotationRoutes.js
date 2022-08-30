const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const quotationController = require("../controllers/quotationControllers");
const quotationCalculation = require("../controllers/quotationCalculationContoller");

router.post("/select_designers", quotationController.selectDesigners);
router.put("/property_details", quotationController.propertyDetails);
router.put("/livingroom", quotationController.livingDinning);
router.put("/bedroom", quotationController.bedRoom);
router.put("/kitchen", quotationController.kitchen);
router.put("/bathroom", quotationController.bathRoom);
router.put("/pujaroom", quotationController.pujaRoom);
router.put("/balcony", quotationController.balcony);
router.put("/homeoffice", quotationController.homeOffice);
router.put("/miscellaneouswork", quotationController.miscellaneousWork);
router.get("/quotation_calculation", quotationCalculation.quotationCalculation);
router.get("/get_data_by_id", quotationController.getDataById);

module.exports = router;
