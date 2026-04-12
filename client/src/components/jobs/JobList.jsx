import React, { useState } from "react";
import AddJob from "./AddJob";
import { useEffect, useCallback } from "react";

function JobList() {
  const [jobList, setJobList] = useState([]);
  const [errors, setErrors] = useState({});
  const API_URI = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API_URI}/jobs`, {
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
    fetchData();
  }, []); // empty dependency → runs only once

  const deleteJob = async (idx) => {
    try {
      const data = await fetch(`${API_URI}/jobs/${idx}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const resData = await data.json();
      if (resData.success) {
        setJobList(
          jobList.filter((job) => {
            //_ is a placeholder for the element when you don’t need it.
            return job._id != idx;
          }),
        );
      } else {
        setErrors({ general: "Unable to delete" });
      }
    } catch (err) {
      setErrors({ general: err || "Network Error" });
    }
  };

  return (
    <div>
      <h2>Job List</h2>
      {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}
      <ul>
        {jobList.length > 0 ? (
          jobList.map((job, idx) => (
            <li key={idx}>
              {job.jobName} at {job.companyName} -{job.status}{" "}
              <button
                onClick={() => {
                  deleteJob(job._id); //You cannot do {deleteTask(index)} inside JSX directly, because it would call the function immediately when rendering, instead of on click.
                }}
              >
                delete
              </button>
            </li>
          ))
        ) : (
          <p>No jobs were added</p>
        )}
      </ul>
      <div>
        <AddJob />
      </div>
    </div>
  );
}
export default JobList;
