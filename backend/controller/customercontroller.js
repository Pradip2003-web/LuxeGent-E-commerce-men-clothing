var customer = require("../model/customermodel");

exports.createcustomer = async (req, res) => {
  try {
    req.body.avatar = req.file ? req.file.filename : null;
   
    var data = await customer.create(req.body);
    res.status(201).json({
      success: true,
      message: "customer create successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

exports.getcustomer = async (req, res) => {
  try {
    var data = await customer.find();
    res.status(200).json({
      success: true,
      message: "all customer fetch successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

exports.deletecustomer = async (req, res) => {
  try {
    await customer.findByIdAndDelete(req.params.id0);
    res.status(200).json({
      success: true,
      message: "delete customer successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
