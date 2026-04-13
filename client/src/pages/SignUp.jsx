import UserSignUp from "../components/auth/UserSignUp";

const Login = ({ onSignup }) => {
  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <UserSignUp onSignup={onSignup} />
      </div>
    </div>
  );
};

export default Login;
