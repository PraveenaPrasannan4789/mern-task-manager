import UserSignUp from "../components/auth/UserSignUp";
import "../styles/signup.css";

const Login = ({ onSignup }) => {
  return (
    <div className="login">
      <div className="left">
        <h1>Hello 👋</h1>
        <p>Sign up to continue to your dashboard</p>
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
