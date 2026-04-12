// routes/jobs.js
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const auth = require("../middleware/auth");
const role = require("../middleware/role");
const logger = require("../middleware/logger");
const {
  addJob,
  getJob,
  updateJob,
  deleteJob,
  filterJobs,
  deleteJobByAdmin,
} = require("../controllers/jobController");

router.use(logger);

router.post(
  "/add",
  auth,
  [
    body("jobName").notEmpty().withMessage("Job Name is required"),
    body("companyName").notEmpty().withMessage("Company Name is required"),
    body("status").notEmpty().withMessage("Current status of job is required"),
  ],
  addJob,
);
router.get("/", auth, getJob);
router.delete("/admin/:id", auth, role(["admin"]), deleteJobByAdmin);
router.put("/:id", auth, updateJob);
router.delete("/:id", auth, deleteJob);
router.get("/filter", auth, filterJobs);

module.exports = router;
