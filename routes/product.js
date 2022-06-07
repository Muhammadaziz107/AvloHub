const express = require("express");
const { newProduct, getProducts } = require("../controllers/productController");
const router = express.Router();

router.post("/api/product/create", newProduct);
router.get("/api/product/all", getProducts);

module.exports = router;
