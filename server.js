require("dotenv").config()
const express = require("express");
const { PORT, MONGO_DB_URI } = process.env;
const cors = require("cors");
const app = express();


//constroller imports
const authController = require("./controllers/auth")
const breweriesController = require("./controllers/breweries")

//Middleware

app.use(cors());

app.use(express.json());

//routes

app.get("/", (req, res) => {
    res.send("hello beer wold")
})

app.use("/auth", authController);
app.use('/breweries', breweriesController);

app.get('/*', (req, res) => {
    res.json({comment: "This is a bad URL"});
})

app.listen(PORT, () => {
    console.log(`Listeing on PORT ${PORT} Drink up! 🍺 🍻`)
})
