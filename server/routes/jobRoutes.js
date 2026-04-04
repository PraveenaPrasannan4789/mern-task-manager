// routes/jobs.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { addJob, getJob } = require("../controllers/jobController");

router.post("/add", auth, addJob);
router.get("/", auth, getJob);

module.exports = router;
