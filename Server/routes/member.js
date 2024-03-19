const express = require("express")
const router = express.Router()
const memberController = require("../controllers/memberController")

router.get("/",memberController.getAllMembers)
router.get("/:id",memberController.getMemberById)
router.post("/",memberController.createNewMember)
router.delete("/:id",memberController.deleteMember)
router.put("/",memberController.updateMember)

module.exports = router