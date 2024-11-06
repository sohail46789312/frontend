import React from "react";
import "../App.css";
import Card from "./card";

export default function Tracks() {
  return (
    <div className="track-div">
      <h1>Our Tracks</h1>
      <p className="track-div-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis?</p>
      <div className="track-courses">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
