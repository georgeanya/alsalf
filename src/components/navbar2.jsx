import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar1 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="huron__navbar">
      <div className="huron__navbar-links">
        <div className="huron__navbar-links_logo">
          <p>ALSALF</p>
        </div>
        <div className="huron__navbar-links_container">
          <p>
            <a href="#home">Who we are</a>
          </p>
          <p>
            <a href="#about">What we do</a>
          </p>
          <p>
            <a href="#services">Founders</a>
          </p>
        </div>
      </div>
      <div className="huron__navbar-menu">
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
          <div className="huron__navbar-menu_container scale-up-center">
            <div className="huron__navbar-menu_container-links">
              <p>
                <a href="#home">Who we are</a>
              </p>
              <p>
                <a href="#about">What we do</a>
              </p>
              <p>
                <a href="#services">Founders</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar1;