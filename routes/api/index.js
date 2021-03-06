const router = require("express").Router();
const spendingRoutes = require("./spending");
const userRoutes = require("./user");

// Spending routes
router.use("/spending", spendingRoutes);

// User routes
router.use("/user", userRoutes);

module.exports = router;