import React, { useState } from "react";
import AddJob from "./AddJob";
import { useEffect, useCallback } from "react";
import "../../styles/job.css";

function JobList() {
  const [jobList, setJobList] = useState([]);
  const [errors, setErrors] = useState({});
  const API_URI = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchData();
  }, []); // empty dependency → runs only once

  async function fetchData() {
    try {
      const res = await fetch(`${API_URI}/api/jobs`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (data.success) {
        const Jobs = data.data;
        setJobList(Jobs);
      } else {
        setErrors({ general: data.message || "unable to get jobs" });
      }
    } catch (err) {
      setErrors({ general: err || "Network Error" });
    }
  }

  const deleteJob = async (id) => {
    try {
      const res = await fetch(`${API_URI}/api/jobs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();
      console.log("data", data);

      if (data.status) {
        // Option 1 (fast UI update)
        setJobList((prev) => prev.filter((job) => job._id !== id));

        // Option 2 (safe - sync with backend)
        fetchData();
      } else {
        setErrors({ general: "Unable to delete" });
      }
    } catch (err) {
      setErrors({ general: "Network Error" });
    }
  };

  return (
    <div className="job-container">
      <h2 className="title">📌 Your Job Applications</h2>

      {errors.general && <p className="error">{errors.general}</p>}

      <div className="job-grid">
        {jobList.length > 0 ? (
          jobList.map((job) => (
            <div className="job-card" key={job._id}>
              <div className="job-header">
                <h3>{job.jobName}</h3>
                <span className={`status ${job.status}`}>{job.status}</span>
              </div>

              <p className="company">🏢 {job.companyName}</p>

              <div className="job-actions">
                <button
                  className="delete-btn"
                  onClick={() => deleteJob(job._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty">No jobs were added</p>
        )}
      </div>

      <div className="add-section">
        <AddJob fetchData={fetchData} />
      </div>
    </div>
  );
}
export default JobList;
