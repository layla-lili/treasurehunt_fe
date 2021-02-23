import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { signin } from "../store/actions/authActions";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [type, setType] = useState("password");

  const [user, setUser] = useState({
    username: "",
    password: "",
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
    dispatch(signin(user, history));
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <fieldset>
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
              value={user.password}
              onChange={handleChange}
              name="password"
              className="form-control"
            />

            <br></br>
            <button onClick={handleType}>
              {type === "password" ? "Show" : "Hide"}
            </button>
          </div>
          <button type="submit" className="btn btn-info float-right">
            {/* {foundProduct ? "Update" : "Create"} */}
            Sign In
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Signin;
