import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.png" style={{ background: "black" }} alt="" />
        <ul className="nav__links">
          <li>Home</li>
          <li>SignUp</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
