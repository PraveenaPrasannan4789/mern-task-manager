import JobList from "../components/jobs/JobList";
import "../styles/dashboard.css";

const DashBoard = ({ handlelogOut }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>🚀 Job Tracker Dashboard</h1>
          <p>
            Track your applications, interviews, and career progress in one
            place.
          </p>
        </div>

        <button className="logout-btn" onClick={handlelogOut}>
          Logout
        </button>
      </div>

      {/* optional quick stats */}
      <div className="stats">
        <div className="stat-card">
          <h3>Applications</h3>
          <p>📌 Track all jobs</p>
        </div>

        <div className="stat-card">
          <h3>Interviews</h3>
          <p>🎯 Opportunities</p>
        </div>

        <div className="stat-card">
          <h3>Progress</h3>
          <p>📊 Career growth</p>
        </div>
      </div>

      <JobList />
    </div>
  );
};

export default DashBoard;
