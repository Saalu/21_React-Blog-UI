import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="titleSm">React & Node</span>
        <span className="titleLg">Blog</span>
      </div>
      <img src="assets/main-bg.jpg" alt="" className="headerImg" />
    </div>
  );
}

export default Header;
