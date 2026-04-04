//import model
const Job = require("../models/job");

const addJob = async (req, res, next) => {
  try {
    const { jobName, companyName, status, description } = req.body;
    const userId = req.user.userId;
    const job = new Job({
      jobName: jobName,
      companyName: companyName,
      status: status,
      description: description,
      userId: userId,
    });
    await job.save();
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

module.exports = { addJob, getJob };
