import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const notificationCount = 5; // Example notification count, replace it with dynamic data if needed

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2 px-3 fixed-top w-100">
        <div className="container-fluid d-flex align-items-center">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center text-base fw-semibold"
          >
            <i className="bi bi-linkedin fs-1 text-primary" />
          </Link>

          <form className="d-flex flex-grow-1 mx-3" role="search">
            <input
              className="form-control me-2 rounded-pill border-secondary"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22currentColor%22 class=%22bi bi-search%22 viewBox=%220 0 16 16%22%3E%3Cpath d=%22M11.742 10.742a7 7 0 1 0-1.414 1.414 6.978 6.978 0 0 0 1.414-1.414zM7 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5z%22/%3E%3C/svg%3E')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "10px center",
                backgroundSize: "20px",
                paddingLeft: "30px", // Adjust to leave space for the icon
              }}
            />
          </form>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto align-items-center gap-3">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-dark fw-semibold d-flex flex-column align-items-center nav-hover btn btn-ghost text-base"
                >
                  <i className="bi bi-house-door-fill fs-5"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/mynetwork"
                  className="nav-link text-dark fw-semibold d-flex flex-column align-items-center nav-hover btn btn-ghost text-base"
                >
                  <i className="bi bi-people-fill fs-5"></i>
                  My Network
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/jobs"
                  className="nav-link text-dark fw-semibold d-flex flex-column align-items-center nav-hover btn btn-ghost text-base"
                >
                  <i className="bi bi-briefcase-fill fs-5"></i>
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/messages"
                  className="nav-link text-dark fw-semibold d-flex flex-column align-items-center nav-hover btn btn-ghost text-base"
                >
                  <i className="bi bi-chat-left-text-fill fs-5"></i>
                  Messaging
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/notifications"
                  className="nav-link text-dark fw-semibold d-flex flex-column align-items-center nav-hover btn btn-ghost text-base position-relative"
                >
                  <i className="bi bi-bell-fill fs-5">
                    {notificationCount > 0 && (
                      <span
                        className="badge bg-danger position-absolute top-10"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {notificationCount}
                      </span>
                    )}
                  </i>
                  Notifications
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle text-dark fw-semibold d-flex flex-column align-items-center nav-hover btn btn-ghost text-base"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle fs-5"></i>
                  Me
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#" className="dropdown-item">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/signin" className="dropdown-item">
                      Sign in
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle text-dark fw-semibold d-flex flex-column align-items-center nav-hover btn btn-ghost text-base"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-grid-3x3-gap-fill fs-5"></i>
                  For Business
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#" className="dropdown-item">
                      Business Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Advertise
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      More
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link text-primary fw-bold nav-hover btn btn-ghost text-base"
                >
                  Try Premium for $0
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
