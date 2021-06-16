import React from "react";

import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="assets/single-post.jpg" alt="two-ladies" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          necessitatibus dicta incidunt explicabo quas perspiciatis, libero
          nobis adipisci quod numquam, voluptatum iure. Libero sed in dolore
          beatae asperiores, animi quisquam.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="siderbarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <div className="siderbarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
