var express = require("express");
const { register, login, logout } = require("../controller/admincontroller");
const {
  userregister,
  userlogin,
  alluser,
  getuser,
  updateuser,
  deleteuser,
} = require("../controller/usercontroller");
const {
  createproduct,
  allproduct,
  getproduct,
  updateproduct,
  deleteproduct,
  shopproduct,
} = require("../controller/productcontroller");
const { createcategory, getall } = require("../controller/categorycontroller");
const {
  createitem,
  getinventory,
  updateitem,
  deleteitem,
  getidinventory,
} = require("../controller/inventorycontroller");
const {
  createorder,
  getorder,
  orderupdate,
  orderdelete,
} = require("../controller/ordercontroller");
const {
  createcustomer,
  getcustomer,
} = require("../controller/customercontroller");
const { creatcontact } = require("../controller/contactcontroller");
const upload = require("../middleware/multer");
var router = express.Router();

//admin
router.post("/admin", register);
router.post("/admin/login", login);
router.post("/admin/logout", logout);

//user
router.post("/user/register", userregister);
router.post("/user/login", userlogin);
router.get("/user/all", alluser);
router.get("/user/all/:id", getuser);
router.put("/user/update/:id", updateuser);
router.delete("/user/delete/:id", deleteuser);

//product
router.post("/product/add", upload.array("image", 5), createproduct);
router.get("/product/all", allproduct);
router.get("/product/:id", getproduct);
router.put("/product/update/:id", updateproduct);
router.delete("/product/delete/:id", deleteproduct);
router.get("/shop/product/:id", shopproduct);

//inventory
router.post("/inventory/create", upload.single("image"), createitem);
router.get("/inventory/all", getinventory);
router.get("/inventory/:id", getidinventory);
router.put("/inventory/update/:id",upload.single("image"), updateitem);
router.delete("/inventory/delete/:id", deleteitem);

// category
router.post("/create", upload.single("image"), createcategory);
router.get("/category/all", getall);

//customer
router.post("/customer/create", upload.single("avatar"), createcustomer);
router.get("/customer/all", getcustomer);

//order
router.post("/checkout", createorder);
router.get("/order/all", getorder);
router.put("/order/update/:id", orderupdate);
router.delete("/order/delete/:id", orderdelete);

//contact
router.post("/contact/create", creatcontact);

module.exports = router;
