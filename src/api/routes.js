const express = require("express");
const routes = express.Router();

const ProductController = require("./ProductController");

routes.get("/", ProductController.index);

module.exports = routes;