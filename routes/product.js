const express = require("express");
const {
  newProduct,
  getProducts,
  getOneProduct,
  getOneShopsProduct,
} = require("../controllers/productController");
const router = express.Router();

router.post("/api/product/create", newProduct);
router.get("/api/product/all", getProducts);
router.get("/api/product/:id", getOneProduct);
router.get("/api/product/filter/:id", getOneShopsProduct);

module.exports = router;
