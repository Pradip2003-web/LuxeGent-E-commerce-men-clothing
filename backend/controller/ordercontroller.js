var order = require("../model/ordermodel");

exports.createorder = async (req, res) => {
  try {
    var data = await order.create(req.body);
    res.status(201).json({
      success: true,
      message: "order create successfully",
      data,
    });
  } catch (error) {
     res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

exports.getorder = async (req, res) => {
  try {
    var data = await order.find();
    res.status(200).json({
      success: true,
      message: "get all order successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

exports.orderupdate = async (req, res) => {
  try {
    var data = await order.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "update order succesffully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

exports.orderdelete = async (req, res) => {
  try {
    await order.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "order delete successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
