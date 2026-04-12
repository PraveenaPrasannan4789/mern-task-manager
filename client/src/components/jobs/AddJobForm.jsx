import { useState } from "react";

const AddJobForm = ({ setShowForm }) => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    datePosted: "",
    status: "",
  });
  const [errors, setErrors] = useState({});
  const API_URI = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onAddJob = async (form) => {
    try {
      const data = await fetch(`${API_URI}/jobs/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          jobName: form.title,
          companyName: form.company,
          status: form.status,
        }),
      });
      const res = await data.json();
      if (res.status) {
        setShowForm(false);
        alert("job added successfully");
      } else {
        setErrors({ general: res.message || "unable to add jobs" });
      }
    } catch (err) {
      setErrors({ general: err || "Network Error" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!form.title) validationErrors.title = "Job title is required";
    if (!form.company) validationErrors.company = "Company name is required";
    // if (!form.datePosted) validationErrors.datePosted = "Date is required";
    //else if (!/^\d{4}-\d{2}-\d{2}$/.test(form.datePosted))
    // validationErrors.datePosted = "Date must be YYYY-MM-DD";

    if (!form.status) validationErrors.status = "Status is required";

    if (Object.keys(validationErrors).length > 0) {
      console.log("hhh", validationErrors);
      setErrors(validationErrors);
      return;
    }

    onAddJob(form);
    setForm({ title: "", company: "", status: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Job Title:</label>
        <input name="title" value={form.title} onChange={handleChange} />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
      </div>

      <div>
        <label>Company:</label>
        <input name="company" value={form.company} onChange={handleChange} />
        {errors.company && <p style={{ color: "red" }}>{errors.company}</p>}
      </div>

      {/* <div>
        <label>Date Posted:</label>
        <input type="date" name="datePosted" value={form.datePosted} onChange={handleChange} />
        {errors.datePosted && <p style={{ color: "red" }}>{errors.datePosted}</p>}
      </div> */}

      <div>
        <label>Status:</label>
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="">Select</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
        {errors.status && <p style={{ color: "red" }}>{errors.status}</p>}
      </div>

      <button type="submit">Add Job</button>
      {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}
    </form>
  );
};

export default AddJobForm;
