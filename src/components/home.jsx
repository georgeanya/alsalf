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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
          distinctio labore necessitatibus accusamus magnam quidem, delectus,
          fugit ut natus iusto nemo sapiente animi a hic minima et sed? Quis,
          reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto quaerat facilis impedit velit assumenda accusamus natus
          obcaecati molestiae, consequuntur autem hic vero modi eligendi? Nihil
          repellendus aspernatur assumenda odit sapiente! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolorum rerum, ipsum illum aut at
          odio soluta eius obcaecati vero in? Impedit illum sint aliquam
          praesentium quae sequi repudiandae at necessitatibus!
        </p>
      </div>
      <div>
        <h2 className="sub_head_text" width="206px">
          Our Aim
        </h2>
        <p className="sub_body_text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
          distinctio labore necessitatibus accusamus magnam quidem, delectus,
          fugit ut natus iusto nemo sapiente animi a hic minima et sed? Quis,
          reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto quaerat facilis impedit velit assumenda accusamus natus
          obcaecati molestiae, consequuntur autem hic vero modi eligendi? Nihil
          repellendus aspernatur assumenda odit sapiente! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolorum rerum, ipsum illum aut at
          odio soluta eius obcaecati vero in? Impedit illum sint aliquam
          praesentium quae sequi repudiandae at necessitatibus!
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
