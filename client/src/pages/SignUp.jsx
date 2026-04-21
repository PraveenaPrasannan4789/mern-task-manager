import UserSignUp from "../components/auth/UserSignUp";
import "../styles/signup.css";

const Login = ({ onSignup }) => {
  return (
    <div className="login">
      <div className="left">
        <h1>Create your account 🚀</h1>

        <p>
          Join our platform to manage tasks, track progress, and collaborate
          efficiently with your team.
        </p>

        <div className="highlight">
          💡 Tip: Use a strong password with at least 6 characters for better
          security.
        </div>
      </div>
      <div className="right">
        <div className="right-box">
          {" "}
          <UserSignUp onSignup={onSignup} />
        </div>
      </div>
    </div>
  );
};

export default Login;
