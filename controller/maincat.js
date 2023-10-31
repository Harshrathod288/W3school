const MAINSCHE = require("../model/main")

exports.alldatae = async function (req, res, next) {
  try {
    const data = await MAINSCHE.find()
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
    if (!req.body.title || !req.body.colorcode || !req.body.tagline) {
      throw new Error("Please enter valid field")
    }
    const data = await MAINSCHE.create(req.body)

    res.status(201).json({
      status: "Succesful",
      Message: "User Created",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Unccesful",
      Message: error.Message
    })
  }
}

exports.update = async function (req, res, next) {
  try {
      const data = await MAINSCHE.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
        status:"Succesful",
        Message: "User updatd",
        data: data
      })
  } catch (error) {
      res.status(404).json({
        status: "Uncessful",
        Message: error.Message
      })
  }
}

exports.delete = async function (req, res, next) {
  try {
    const data = await MAINSCHE.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json({
      status:"Succesful",
      Message: "User deleted",
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      Message: error.Message
    })
  }  
}