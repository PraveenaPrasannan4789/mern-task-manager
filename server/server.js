const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();
// const dns = require("dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

const { errorHandler } = require("./utils/errorHandler");
const authRoute = require("./routes/authRoutes");
const jobRoute = require("./routes/jobRoutes");

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());

const allowedOrigin = process.env.CLIENT_URL;

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  }),
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log("error", err);
  });
//Error handling middleware
app.use(errorHandler);

//auth route
app.use("/api/auth", authRoute);
//job route
app.use("/api/jobs", jobRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
