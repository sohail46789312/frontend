import React from "react";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-1">
        <img className="about-1-mimg" src="/images/about-img.png" alt="" />
        <img className="about-1-globe" src="/images/globe.png" alt="" />
        <img className="about-1-pc" src="/images/pc.png" alt="" />
        <img className="about-1-bulb" src="/images/bulb.png" alt="" />
        <img className="about-1-atom" src="/images/atom.png" alt="" />
        <img className="about-1-pencil" src="/images/pencil.png" alt="" />
        <img className="about-1-circle" src="/images/circle.png" alt="" />
      </div>
      <div className="about-2">
        <h1>
          Premium <span style={{ color: "#FF7426" }}>Learning</span> <br />{" "}
          Experience
        </h1>
        <div className="about-2-div">
          <div className="about-2-div-a">
            <img src="/images/heart.png" alt="" />
          </div>
          <div className="about-2-div-b">
            <h4>Easily Accessible</h4>
            <p>Learning will feel very comfortable with courslab</p>
          </div>
        </div>
        <div className="about-2-div">
          <div className="about-2-div-a">
            <img src="/images/jigsaw.png" alt="" />
          </div>
          <div className="about-2-div-b">
            <h4>Full learning experience</h4>
            <p>Learning will feel very comfortable with courslab</p>
          </div>
        </div>
      </div>
    </div>
  );
}
