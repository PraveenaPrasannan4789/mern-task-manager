import JobList from "../components/jobs/JobList";

const DashBoard = ({ handlelogOut }) => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <JobList />
      <button onClick={handlelogOut}>Logout</button>
    </div>
  );
};

export default DashBoard;
