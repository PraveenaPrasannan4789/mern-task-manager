const { validationResult } = require("express-validator");

const Job = require("../models/job"); //import model

const addJob = async (req, res, next) => {
  try {
    // check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const userId = req.user.userId;
    const job = await Job.create({
      ...req.body,
      userId: userId,
    });
    res.status(200).json({ status: true, data: job });
  } catch (err) {
    next(err);
  }
};

const getJob = async (req, res, next) => {
  try {
    const jobs = await Job.find({ userId: req.user.userId });
    if (jobs.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        message: "No jobs found",
      });
    } else {
      res
        .status(200)
        .json({ success: true, data: jobs, message: "data found" });
    }
  } catch (err) {
    next(err);
  }
};

const updateJob = async (req, res, next) => {
  try {
    console.log("here", req.params.id, req.user.userId);
    const updateData = await Job.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      { ...req.body },
      { new: true },
    );
    res.status(200).json({ success: true, data: updateData });
  } catch (err) {
    next(err);
  }
};

const deleteJob = async (req, res, next) => {
  try {
    const deleteOp = await Job.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (deleteOp) {
      res.status(200).json({
        status: true,
        message: "successfully deleted",
        data: deleteOp,
      });
    }
    res.status(400).json({ status: false, message: "unable to delete" });
  } catch (err) {
    next(err);
  }
};

const filterJobs = async (req, res, next) => {
  try {
    const { jobName, status } = req.query;
    const filterCriteria = { userId: req.user.userId };
    if (status) filterCriteria.status = status;
    if (jobName) filterCriteria.jobName = jobName;
    console.log(filterCriteria);
    const records = await Job.find(filterCriteria);
    res.status(200).json({ success: true, data: records });
  } catch (err) {
    next(err);
  }
};

const deleteJobByAdmin = async (req, res, next) => {
  try {
    const deleteOp = await Job.findOneAndDelete({ _id: req.params.id });
    res
      .status(200)
      .json({ success: true, message: "deleted successfully", data: deleteOp });
  } catch (err) {
    next();
  }
};

module.exports = {
  addJob,
  getJob,
  updateJob,
  deleteJob,
  filterJobs,
  deleteJobByAdmin,
};
