import "../../styles/mainContent.css";
import ManageJob from "./manageJob";
const MainContent = () => {
  return (
    <>
      <section>
        <ManageJob />
      </section>
      <section className="main-section">
        <h1 className="introduction">
          Manage your job applications and track <br /> every stage of your
          career journey in one place
        </h1>
        <p className="sub-intro">
          Take control of your job search with smart tracking and insights
        </p>
        <div className="card">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt="user"
            className="user-img"
          />
          <div>
            <p>
              I was struggling to manage multiple job applications, but this
              tool helped me stay organized and confident-
            </p>
            <h4>Sarah Johnson</h4>
            <span>Software Engineer</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
