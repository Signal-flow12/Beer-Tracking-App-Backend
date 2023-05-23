const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const { Users } = require("../models/Index")
const { createUserToken } = require("../middleware/auth")

//Sign up 
router.post("/register", async (req, res, next) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(req.body.password, salt);
        req.body.password= passwordHash;
        const newUser = await Users.create(req.body);

        res.status(201).json({
            currentUser: newUser,
            isLoggedIn: true,
        })
    }catch (err) {
        console.log(err)
    }
});

//Sign in
router.post("/login", async (req, res, next) => {
    try {
        const loggingUser = req.body.username;
        const foundUser = await Users.findOne({username: loggingUser});
        const token = await createUserToken(req, foundUser);
        res.status(200).json({
            user: foundUser,
            isLoggedIn: true,
            token,
        });
    }catch(err) {
            res.status(401).json({ error: err.message })
    }
});


module.exports = router;