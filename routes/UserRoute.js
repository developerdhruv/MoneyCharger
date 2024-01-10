const express = require("express");
const {
    loginController,
    registerController
} = require("../controllers/UserController"); // Fix the casing of the file name

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/login", loginController);

//POST || REGISTER USER
router.post("/register", registerController);

module.exports = router;