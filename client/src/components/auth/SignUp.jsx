import { useState } from "react";

const Signup = ({ onSignup }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
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

    onSignup(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={form.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={form.email} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="text" value={form.password} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit"></button>
    </form>
  );
};

export default Signup;


