import React from "react";
import insta from "../assets/Instagram.svg";
import fbook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";

const Footer = () => {
  return (
    <div>
      <hr className="color" />
      <div className=" py-3 d-flex justify-content-between align-items-center">
        <p className="footer_text">
          Abiriba Let’s Save A Life Foundation © 2021 All Rights Reserved
        </p>
        <div>
          <img className="p-2" src={fbook} alt="" />
          <img className="p-2" src={insta} alt="" />
          <img className="p-2" src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
