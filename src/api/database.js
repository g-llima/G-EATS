const mongoose = require("mongoose");
require('dotenv').config();

function connectToDatabase() {
    mongoose.connect(process.env.DB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    );

    const db = mongoose.connection;
    db.on("error", (err) => console.log(err));
    db.once("open", () => console.log("DB conectado."))
}

module.exports = connectToDatabase;