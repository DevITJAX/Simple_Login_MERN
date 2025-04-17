import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    navigate('/login'); // Redirect to login page
  };

  return (
    <section className="p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="card border-light-subtle shadow-sm">
          <div className="row g-0">
            <div className="col-12 col-md-6 text-bg-primary">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="col-10 col-xl-8 py-3">
                  <h2 className="h1 mb-4">Welcome Back!</h2>
                  <p className="lead m-0">
                    You are now logged in. Enjoy managing your data.
                    <img
                    className="img-fluid rounded mb-4"
                    loading="lazy"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGHidSOe5mo-Wx0fRMT2EXkWDKDwu8nReKA&s"
                    width="400"
                    height="80"
                    alt="Login Visual"
                  />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12 mb-4">
                    <h2 className="h3">Dashboard</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Welcome, {user?.first || "Guest"}!
                    </h3>
                  </div>
                </div>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        className="btn bsb-btn-xl btn-danger"
                        type="button"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </div>
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

export default Home;