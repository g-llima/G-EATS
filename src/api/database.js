const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect("", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    );

    const db = mongoose.connection;
    db.on("error", (err) => console.log(err));
    db.once("open", () => console.log("Abriu o servidor"))
}

module.exports = connectToDatabase;