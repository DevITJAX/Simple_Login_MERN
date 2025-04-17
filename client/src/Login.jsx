import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "success") {
          navigate('/home');
        } else {
          alert(result.data);
        }
      })
      .catch(err => console.log(err));
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3001/login", { email, password })
  //     .then((result) => {
  //       console.log(result);
  //       if (result.data === "Success") {
  //         // Store user data in local storage or context
  //         navigate('/home');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Login failed:", error);
  //     });
  

  return (
    <section className="p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="card border-light-subtle shadow-sm">
          <div className="row g-0">
            <div className="col-12 col-md-6 text-bg-primary">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="col-10 col-xl-8 py-3">
                  <img
                    className="img-fluid rounded mb-4"
                    loading="lazy"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGHidSOe5mo-Wx0fRMT2EXkWDKDwu8nReKA&s"
                    width="400"
                    height="80"
                    alt="Login Visual"
                  />
                  <h2 className="h1 mb-4">Welcome back!</h2>
                  <p className="lead m-0">
                    Log in to access your dashboard and manage your data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12 mb-4">
                    <h2 className="h3">Login</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Enter your credentials to log in
                    </h3>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn bsb-btn-xl btn-primary" type="submit">
                          Log In
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row mt-4">
                  <div className="col-12 text-center">
                    <p className="text-secondary">
                      Don’t have an account?{" "}
                      <Link to="/register" className="link-primary text-decoration-none">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
