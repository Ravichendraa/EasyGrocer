const express = require("express");

const {
  addProductReview,
  getProductReviews,
  getUserReviews,
  updateReview,
} = require("../../controllers/shop/product-review-controller");

const router = express.Router();

router.post("/add", addProductReview);
router.get("/:productId", getProductReviews);
router.get("/user/:userId", getUserReviews);
router.put("/:reviewId", updateReview);

module.exports = router;
