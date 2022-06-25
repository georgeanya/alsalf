import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-links_container">
          <p>
            <a href="#about">Who we are</a>
          </p>
          <p>
            <a href="#aim">What we do</a>
          </p>
          <p>
            <a href="#founders">Founders</a>
          </p>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a href="#about">Who we are</a>
              </p>
              <p>
                <a href="#aim">What we do</a>
              </p>
              <p>
                <a href="#founders">Founders</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
