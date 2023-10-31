var express = require('express');
var router = express.Router();
const usercontroller = require("../controller/user");

router.post('/Signup', usercontroller.signup);

router.post('/login', usercontroller.login);

router.get('/alldata', usercontroller.Protect, usercontroller.alldata);

module.exports = router;