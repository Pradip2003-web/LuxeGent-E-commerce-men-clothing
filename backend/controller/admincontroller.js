var admin = require("../model/adminmodel");

exports.register = async (req, res) => {
  try {
    var data = await admin.create(req.body);
    res.status(201).json({
      success: true,
      message: "Admin Register Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

exports.login = async (req, res) => {
  try {
    var data = await admin.find({ email: req.body.email });
    if (data.length != 0) {
      res.status(200).json({
        success: true,
        message: "Admin Login Successfully",
        data,
      });
    } else {
      res.status(401).json({
        success: true,
        message: "Invalid Email and Password",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Admin Logout Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
