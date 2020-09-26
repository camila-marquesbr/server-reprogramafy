const express = require("express")
const router = express.Router()
const controller = require("../controllers/reprogramafyController")

router.get("/", controller.getMusicas)
router.get("/:id", controller.geMusicasById)

module.exports = router