var admin = require("../model/adminmodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
     req.body.password = await bcrypt.hash(req.body.password, 10);
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
          bcrypt.compare(
        req.body.password,
        data[0].password,
        function (err, result) {
          if (result == true) {
            var token = jwt.sign({ _id: data[0]._id }, "admin", {
              expiresIn: "1800s",
            });
            res.status(200).json({
              message: "login successfully",
              data,
              token,
            });
          } else {
            res.status(401).json({
              status: false,
              message: "Invalid Email And Password",
            });
          }
        },
      );
    } else {
      res.status(400).json({
        status: false,
        message: "Invalid Email And Password",
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
