const express = require("express")
const router = express.Router();

const { signin_Ctlr} = require("../controllers/signup_and_login");

router.post("/signup", signin_Ctlr );

// router.post("/login", login_ctrl );

module.exports = router;   