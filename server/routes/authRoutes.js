// routes/auth.js
const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const logger = require('../middleware/logger');

router.use(logger);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;