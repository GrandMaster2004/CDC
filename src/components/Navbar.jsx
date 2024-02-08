import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_logo">
        <ul>
          <li>Logo</li>
          <li>Logo</li>
        </ul>
      </div>
      <div className="nav_element">
        <ul>
          <li>Home</li>
          <li>Alumni</li>
          <li>OurTeam</li>
          <li>Admin</li>
        </ul>
      </div>
      <div className="nav_login">
        <ul>
          <li>
            <button>SignUp</button>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
