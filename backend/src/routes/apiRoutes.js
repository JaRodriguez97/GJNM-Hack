// route for send data user

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// router.get("/", userController.getAllUsers);

router.post("/sendDataHoja1", userController.sendDataHoja1);

module.exports = router;
