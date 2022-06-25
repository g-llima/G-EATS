const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const connectDB = require("./database");
const routes = require("./routes")

connectDB();

const app = express();
app.use(routes);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.listen("6969", () => {
    console.log("Servidor iniciado.");
})

