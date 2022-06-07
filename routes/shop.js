const express = require("express");
const {
  newShop,
  allShops,
  getOneShop,
  deleteAllShops,
  updateShop,
} = require("../controllers/shopController");
const router = express.Router();

router.post("/api/shop/create", newShop);
router.get("/api/shop/all", allShops);
router.get("/api/shop/:id", getOneShop);
router.delete("/api/shop/all", deleteAllShops);
router.put("/api/shop/:id", updateShop);

module.exports = router;
