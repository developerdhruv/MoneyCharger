const express = require("express");
const control = require("../controllers/UserController"); // Fix the casing of the file name

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/login", control.loginController);

//POST || REGISTER USER
router.post("/register", control.registerController);

module.exports = router;