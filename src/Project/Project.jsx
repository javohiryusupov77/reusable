import React from "react";
import bcgImage from "../assets/bcgimage.png";
import "./project.css"
import bedImage from "../assets/bed.png"

const Project = () => {
  return (
    <div className="main-one">
      <img src={bcgImage} alt="image of background" />
      <div className="Navbar">
        <button className="click">Bathroom</button>
        <button className="click">Bedroom</button>
        <button className="click">Kitchen</button>
        <button className="click">living Area</button>
      </div>
      <div className="images">
        <div className="work">
          <img style={{ width: "80%" }} src={bedImage} alt="bed of image" />
          <h3>Minimal bedroom</h3>
          <p>Decor / Architecture</p>
        </div>
        <div className="work">
          <img style={{ width: "80%" }} src={bedImage} alt="bed of image" />
          <h3>Minimal bedroom</h3>
          <p>Decor / Architecture</p>
        </div>
        <div className="work">
          <img style={{ width: "80%" }} src={bedImage} alt="bed of image" />
          <h3>Minimal bedroom</h3>
          <p>Decor / Architecture</p>
        </div>
        <div className="work">
          <img style={{ width: "80%" }} src={bedImage} alt="bed of image" />
          <h3>Minimal bedroom</h3>
          <p>Decor / Architecture</p>
        </div>
      </div>
    </div>
  );
};

export default Project;