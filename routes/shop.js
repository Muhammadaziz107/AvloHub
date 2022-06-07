const express = require("express");
const { newShop, allShops, deleteAllShops } = require("../controllers/shopController");
const router = express.Router();

router.post("/api/shop/create", newShop);
router.get("/api/shop/all", allShops);
// router.get("/api/shop/:id", getOneShop);
router.delete("/api/shop/all", deleteAllShops);

module.exports = router;
