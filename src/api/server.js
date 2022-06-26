const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const connectDB = require("./database");
const routes = require("./routes")

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(6969, () => {
    console.log("Servidor iniciado.");
})


