import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li className="topListItem">HOME</li>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="topListItem">ABOUT</li>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="topListItem">CONTACT</li>
          </Link>
          <Link
            to="/write"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="topListItem">WRITE</li>
          </Link>
          <Link
            to="/logout"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="topListItem">{user && "LOGOUT"}</li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img src="assets/avatar.jpg" alt="" className="topImg" />
        ) : (
          <ul className="topList">
            <Link
              className="link"
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="topListItem">LOGIN</li>
            </Link>
            <Link
              className="link"
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="topListItem">REGISTER</li>
            </Link>
          </ul>
        )}
        {user && <i className="topSearchIcon fas fa-search"></i>}
      </div>
    </div>
  );
}

export default Topbar;
