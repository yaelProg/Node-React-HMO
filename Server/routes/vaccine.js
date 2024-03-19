const express = require("express")
const router = express.Router()
const vaccineController = require("../controllers/vaccineController")

router.get("/",vaccineController.getAllVaccines)
router.get("/:id",vaccineController.getVaccineById)
router.post("/",vaccineController.createNewVaccine)
router.delete("/:id",vaccineController.deleteVaccine)
router.put("/",vaccineController.updateVaccine)

module.exports = router