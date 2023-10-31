var express = require('express');
var router = express.Router();
const subcontroller = require("../controller/subcategory");
const usercontroller = require("../controller/user");

router.get('/alldata', subcontroller.alldata);

router.post('/adddata', usercontroller.Protect, subcontroller.adddata);

router.patch('/update/:id', usercontroller.Protect, subcontroller.update);

router.delete('/delete/:id', usercontroller.Protect, subcontroller.delete);

module.exports = router;