var express = require('express');
var router = express.Router();
const USER = require('../model/user')
const bcrypt = require('bcrypt');


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/adduser', async function(req, res, next) {
  console.log(req.body);
  req.body.password = await bcrypt.hash(req.body.password, 10)
  await USER.create(req.body)
  res.redirect('/')

});

router.post('/login', async function(req, res, next) {
  console.log(req.body);
  // const checkUser = await USER.findOne({email: req.body.email, password: req.body.password})

  const checkUser = await USER.findOne({email: req.body.email})
  if(!checkUser){
    return res.send("Invalid email")
  }
  console.log(checkUser);

  const checkPass = await bcrypt.compare(req.body.password, checkUser.password)

  if(!checkPass){
    res.send("Invalid Password")
  } else {
    res.send("Login successful")
  }
});




module.exports = router;
