import React, { useState } from "react";
import AddJobForm from "./AddJobForm"; // your current AddJob component

function JobManager() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);

  const addJobFn = (jobName) => {
    setJobs([...jobs, jobName]);
  };

  return (
    <div>
      <h1>Job Manager</h1>

      {/* Add Job button */}
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add Job</button>
      )}

      {/* Show form only if showForm is true */}
      {showForm && <AddJobForm addJobFn={addJobFn} />}

      {/* Job List */}
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobManager;