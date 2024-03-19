const express = require("express")
const router = express.Router()
const coronaController = require("../controllers/coronaController")

router.get("/",coronaController.getAllCoronas)
router.get("/:id", coronaController.getCoronaById)
router.post("/", coronaController.createNewCorona)
router.delete("/:id",coronaController.deleteCorona)
router.put("/",coronaController.updateCorona)

module.exports = router