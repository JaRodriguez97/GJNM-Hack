// route to read excel with xlsx
const routes = require("express").Router();
const DataProcessor = require("../controllers/readDataController");

routes.get("/", DataProcessor);

module.exports = routes;