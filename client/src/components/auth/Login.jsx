import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

const UserLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!email) {
      errors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid Email";
    }
    if (!password) {
      errors.password = "Password required";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    onLogin({email,password});
    navigate("/dashboard");
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
          {validationErrors.email && (
            <p style={{ color: "red" }}>{validationErrors.email}</p>
          )}
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        {validationErrors.password && (
          <p style={{ color: "red" }}>{validationErrors.password}</p>
        )}
      </div>
      <button type="submit">Login</button>
    </form>
    <div>
        <p>Dont have a user account ,click <Link style={{color:"blue"}}to="/signUp">here</Link> for signup</p>
    </div>
    </div>
  );
};

export default UserLogin;

