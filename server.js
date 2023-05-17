const express = require("express");
const PORT = process.env.PORT
const cors = require("cors");

//Middleware

app.use(cors());

app.use(express.json());

app.get('/*', (req, res) => {
    res.json({comment: "This is a bad URL"});
})

app.listen(PORT, () => {
    console.log(`Listeing on PORT ${PORT} Drink up! 🍺 🍻`)
})
