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
    res.status(200).json({ data: jobs });
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
    res
      .status(200)
      .json({ status: true, message: "successfully deleted", data: deleteOp });
  } catch (err) {
    next(err);
  }
};

module.exports = { addJob, getJob, updateJob, deleteJob };
