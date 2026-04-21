import React, { useState } from "react";
import AddJobForm from "./AddJobForm"; // your current AddJob component

function JobManager({ fetchData }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* Add Job button */}
      {!showForm && <button onClick={() => setShowForm(true)}>Add Job</button>}

      {/* Show form only if showForm is true */}
      {showForm && (
        <AddJobForm setShowForm={setShowForm} fetchData={fetchData} />
      )}
    </div>
  );
}

export default JobManager;
