var contact = require("../model/contactmodel");

exports.creatcontact = async (req, res) => {
  try {
    var data = await contact.create(req.body);
    res.status(200).json({
      success: true,
      message: "message send successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};
