import UserLogin from "../components/auth/UserLogin";
import "../styles/login.css";

const Login = ({ onLogin }) => {
  return (
    <div className="login">
      <div className="left">
        <h1>Welcome Back 👋</h1>
        <p>Sign in to continue to your dashboard</p>
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
