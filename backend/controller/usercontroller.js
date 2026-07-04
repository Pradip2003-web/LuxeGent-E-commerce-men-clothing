var user = require("../model/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//user register
exports.userregister = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    var data = await user.create(req.body);
    res.status(201).json({
      success: true,
      message: "User create successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//user login
exports.userlogin = async (req, res) => {
  try {
    var data = await user.find({ email: req.body.email });
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
      success: false,
      message: "Internal Server Error",
    });
  }
};

//get all user
exports.alluser = async (req, res) => {
  try {
    var data = await user.find();
    res.status(200).json({
      success: true,
      message: "fetch all user successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      succcess: false,
    });
  }
};

//get by id
exports.getuser = async (req, res) => {
  try {
    var data = await user.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "fetch user by id in successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//update user
exports.updateuser = async (req, res) => {
  try {
    var data = await user.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "update user successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//delete user
exports.deleteuser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "delete user successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
