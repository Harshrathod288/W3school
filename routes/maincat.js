var express = require('express');
var router = express.Router();

const maincacontroller = require("../controller/maincat")
const usercontroller = require("../controller/user");

router.get('/alldatae', maincacontroller.alldatae);

router.post('/adddata',usercontroller.Protect, maincacontroller.adddata);

router.patch('/update/:id', usercontroller.Protect, maincacontroller.update);

router.delete('/delete/:id', usercontroller.Protect, maincacontroller.delete);

module.exports = router;