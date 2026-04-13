import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ onSignup }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    let validationErrors = {};
    e.preventDefault();
    if (!form.name) {
      validationErrors.name = "name is required";
    }
    if (!form.email) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      validationErrors.email = "invalid email";
    }

    if (!form.password) validationErrors.password = "Password is required";
    else if (form.password.length < 6)
      validationErrors.password = "Password must be 6+ chars";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form }),
      });
      const data = await res.json();
      if (data.success) {
        onSignup(form);
        navigate("/");
      } else {
        setErrors({ general: data.message || "SignUp failed" });
      }
    } catch (err) {
      setErrors({ general: data.message || "Network Error" });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlelogOut = () => {
    console.log("am here");
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button type="submit">SignUp</button>
        {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}
      </form>
      <div>
        <button type="button" onClick={() => handlelogOut()}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Signup;
