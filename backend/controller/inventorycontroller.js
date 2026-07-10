var inventory = require("../model/inventorymodel");

exports.createitem = async (req, res) => {
  try {
   
    req.body.image = req.file ? req.file.filename : null;
    var data = await inventory.create(req.body);
    res.status(201).json({
      success: true,
      message: "item create successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};
exports.getinventory = async (req, res) => {
  try {
    var data = await inventory.find();
    res.status(201).json({
      success: true,
      message: "fetch inventory successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.getidinventory = async (req, res) => {
  try {
    var data = await inventory.findById(req.params.id);
    res.status(201).json({
      success: true,
      message: "fetch  inventory successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.updateitem = async (req, res) => {
  try {
     let updateData = { ...req.body };
    if (req.file) {
      updateData.image = req.file.filename;
    }
    var data = await inventory.findByIdAndUpdate(req.params.id,updateData);
    res.status(200).json({
      success: true,
      message: "item update successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};

exports.deleteitem = async (req, res) => {
  try {
    await inventory.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "delete item successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};
