const express = require("express");
const { createForm } = require("../controllers/formController");
const { createFormMySql } = require("../controllers/formControllerMySql");

const route = express.Router();

route.post("/createFormForMongoDb", createForm);
route.post("/createFormForMySql", createFormMySql);

module.exports = route;
