const express = require("express");
const router = express.Router();
const { sendDataHoja1 } = require("../controllers/predictionController");

// router.get("/", userController.getAllUsers);

router.post("/sendDataHoja1", sendDataHoja1);

module.exports = router;
