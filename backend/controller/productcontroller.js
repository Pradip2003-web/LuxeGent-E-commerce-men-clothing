var product = require("../model/productmodel");

exports.createproduct = async (req, res) => {
  try {
    req.body.image = req.files.map((file) => file.filename);
    var data = await product.create(req.body);
    res.status(201).json({
      success: true,
      message: "Create Product Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

exports.allproduct = async (req, res) => {
  try {
    var data = await product.find();
    res.status(200).json({
      success: true,
      message: "Fetch All Product Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

exports.getproduct = async (req, res) => {
  try {
    var data = await product.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Fetch Product By Id Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

exports.updateproduct = async (req, res) => {
  try {
    var data = await product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Update Product Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data,
    });
  }
};

exports.deleteproduct = async (req, res) => {
  try {
    await product.findByIdAndUpdate(req.params.id);
    res.status(200).json({
      success: true,
      message: "Delete Product Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

exports.shopproduct = async (req, res) => {
  try {
    var shop = await product.find({ status: Active });
    const data = products.map((item) => ({
      id: item._id,
      name: item.productName,
      brand: item.brand,
      category: item.category,
      color: item.color,
      sizes: item.sizes,
      price: item.sellingPrice,
      originalPrice: item.mrp,
      rating: item.rating,
      reviews: item.reviews,
      badge: item.badge,
      image: "http://localhost:5000/api/shop/product/${item.image[0]}",
    }));
    res.status(200).json({
      success: true,
      message: "Fetch All Product Successfully",
      shop,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
