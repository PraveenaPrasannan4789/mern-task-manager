import UserLogin from "../components/auth/UserLogin";
import "../styles/login.css";

const Login = ({ onLogin }) => {
  return (
    <div className="login">
      <div className="left">
        <h1>Welcome Back 👋</h1>

        <p>
          Great to see you again. Sign in to access your dashboard, manage
          tasks, and continue where you left off.
        </p>

        <div className="highlight">
          🔒 Your data is secure and encrypted with industry-standard
          protection.
        </div>
      </div>
      <div className="right">
        <div className="right-box">
          {" "}
          <UserLogin onLogin={onLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
