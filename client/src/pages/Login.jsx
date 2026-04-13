import UserLogin from "../components/auth/UserLogin";

const Login = ({ onLogin }) => {
  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <UserLogin onLogin={onLogin} />
      </div>
    </div>
  );
};

export default Login;
