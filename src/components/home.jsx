import React from "react";
import image1 from "../assets/image1.png";
import avi1 from "../assets/avi1.png";

const Home = () => {
  return (
    <div>
      <div className="" id="home">
        <h1 className="home_head">
          Welcome to Abiriba Let’s Save A Life Foundation (A.L.S.A.L.F)
        </h1>
        <img className="home_img" src={image1} width="100%" alt="" />
      </div>
      <div id="about">
        <h2 className="sub_head_text">About Us</h2>
        <p className="sub_body_text">
          We are a group of Abiriba indigenes driven by compassion to provide
          the community with good healthcare. We believe a healthy community is
          a productive community and we are willing to go the extra mile to
          ensure the average abiriba indigene living in Abiriba has access to
          quality health care.
        </p>
      </div>
      <div>
        <h2 className="sub_head_text" width="206px">
          Our Aim
        </h2>
        <p className="sub_body_text">
          We are targeted at helping members of the community by providing early
          detection of ailments, providing treatments to prevent these ailments
          from getting out of control and also providing aftercare support to
          these people.
        </p>
      </div>
      <div>
        <div>
          <h2 className="sub_head_text">Meet the fonders</h2>
        </div>
        <div className="d-flex justify-content-between founders_">
          <div className="image-div">
            <img className="mx-auto d-block" src={avi1} alt="" />
            <p className="text-center text">Mr Anya Onuegbu</p>
          </div>
          <div className="image-div">
            <img className="mx-auto d-block" src={avi1} alt="" />
            <p className="text-center text">Mr Anya Joseph</p>
          </div>
          <div className="image-div">
            <img className="mx-auto d-block" src={avi1} alt="" />
            <p className="text-center text">Mrs Anya Promise</p>
          </div>
          <div className="image-div">
            <img className="mx-auto d-block" src={avi1} alt="" />
            <p className="text-center text">Mr Anya George</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
