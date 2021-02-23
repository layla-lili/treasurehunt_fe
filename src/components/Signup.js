import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { signup } from "../store/actions/authActions";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [type, setType] = useState("password");

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
  });

  const handleType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      {/* <h1>{foundProduct ? "Update" : "Create"} Product</h1> */}
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={user.name}
          onChange={handleChange}
          name="username"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type={type}
          value={user.price}
          onChange={handleChange}
          name="password"
          className="form-control"
        />
        <button onClick={handleType}>
          {type === "password" ? "Show" : "Hide"}
        </button>
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="text"
          value={user.email}
          onChange={handleChange}
          name="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">First name</label>
        <input
          type="text"
          value={user.firstname}
          onChange={handleChange}
          name="firstname"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last name</label>
        <input
          type="text"
          value={user.lastname}
          onChange={handleChange}
          name="lastname"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        {/* {foundProduct ? "Update" : "Create"} */}
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
