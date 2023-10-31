const SUBCATE = require("../model/saubcate")

exports.alldata = async function (req, res, next) {
    try {
        const data = await SUBCATE.find()
        res.status(200).json({
            status: "Succesful",
            Message: "All used found",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Umcessful",
            Message: error.Message
        })
    }
}

exports.adddata = async function (req, res, next) {
    try {
        if (!req.body.Name || !req.body.maincategory) {
            throw new Error("Invalid field")
        }
        const data = await SUBCATE.create(req.body)
        res.status(200).json({
            status: "Succesful",
            Message: "User created",
            data: data
        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            Message: error.Message
        })
    }
}

exports.update = async function (req, res, next){
    try {
        const data = await SUBCATE.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status: "Succesful",
            Message: "USer updated",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            Message: error.Message
        })
    }
}

exports.delete = async function (req, res, next){
    try {
        const data = await SUBCATE.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Succesful",
            Message: "USer deleted",
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            Message: error.Message
        })
    }
}