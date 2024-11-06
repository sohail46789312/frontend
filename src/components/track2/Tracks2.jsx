import React from "react";
import "../../App.css"
import Card from "./Card2.jsx";

export default function Tracks2() {
  return (
    <div className="track-div2">
      <h1 className="h1-for-28px">Our Tracks</h1>
      <p className="track-div-p2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis?
      </p>
      <div className="track-courses2">
          <Card />
          <Card />
          <Card />
      </div>
    </div>
  );
}
