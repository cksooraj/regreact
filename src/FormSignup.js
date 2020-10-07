import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>REGISTER by filling out the information below.</h1>
        <div className="form-inputs">
          <label className="form-label">First Name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your firstname"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">last name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your lastname"
            value={values.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Phone Number</label>
          <input
            className="form-input"
            type="number"
            name="phone"
            placeholder="Enter your Phone number"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Date of birth</label>
          <input
            className="form-input"
            type="date"
            name="date"
            placeholder="Enter your DOB"
            value={values.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Register
        </button>
        <span className="form-input-login">
          Already Registered? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
