var category = require("../model/categorymodel");

exports.createcategory = async (req, res) => {
  try {
    req.body.image = req.file ? req.file.filename : null;
    var data = await category.create(req.body);
    res.status(201).json({
      success: true,
      message: "Create Category Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

exports.getall = async (req, res) => {
  try {
    var data = await category.find();
    res.status(200).json({
      success: true,
      message: "Fetch All Category Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
