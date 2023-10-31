const USER = require('../model/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.Protect = async function (req, res, next) {
    try {
        console.log(req.headers.token);
        let token = req.headers.token
        if(!token){
            throw new Error("Token not found")
        }

        var decoded = jwt.verify(token, 'shhhhh');

        console.log(decoded);
        const checkUser = await USER.findById(decoded.id)

        if(!checkUser){
            throw new Error("user not found")
        }

        next()
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            Message: error.message
        })
    }
}

exports.signup = async function (req, res, next) {
    try {
        if (!req.body.fname || !req.body.email || !req.body.password) {
            throw new Error("Please enter valid fields")
        }
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const data = await USER.create(req.body)
        res.status(201).json({
            status: "Succesfuk",
            Message: "User Created",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            Message: error.message
        })
    }
}

exports.login = async function (req, res, next) {
    try {
        const checkUser = await USER.findOne({ email: req.body.email })
        if (!checkUser) {
            throw new Error("Please enter valid field")
        }
        const checkPass = await bcrypt.compare(req.body.password, checkUser.password)

        if (!checkPass) {
            throw new Error("Please enter valid Password ")
        }

        var token = jwt.sign({ id: checkUser._id }, 'shhhhh');

        res.status(200).json({
            status: "Succeful",
            Message: "Login succesful",
            token
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            Message: error.message
        })
    }
}

exports.alldata = async function (req, res, next) {
    try {
        const data = await USER.find()
        res.status(200).json({
            status: "Succesfuk",
            Message: "All user found",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            Message: error.message
        })
    }
}

