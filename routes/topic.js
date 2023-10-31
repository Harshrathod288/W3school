var express = require('express');
var router = express.Router();

const topiccontroller = require("../controller/topic")
const usercontroller = require("../controller/user");

router.get('/alldata', topiccontroller.alldata);

router.post('/adddata', usercontroller.Protect, topiccontroller.adddata);

router.patch('/update/:id', usercontroller.Protect, topiccontroller.update);

router.delete('/delete/:id', usercontroller.Protect, topiccontroller.delete);

module.exports = router;