import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <h1>MANGO <sub>selection</sub></h1>
            <div className="header-nav">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/product"}>Product</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
            </div>
            <div className="btns">
              <button className="btn-up">Sign Up</button>
              <button className="btn-in">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
