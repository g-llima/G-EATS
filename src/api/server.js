const express = require("express");
const app = express();

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// rotas

app.get("/", (req, res) => {
    res.json({message: "Oi express"})
})


app.listen("6969", () => {
    console.log("Servidor iniciado.");
})