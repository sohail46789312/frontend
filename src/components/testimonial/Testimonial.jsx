import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  return (
    <div className="testimonial-div">
        <img className="testimonial-div-arrow" src="/images/arrow.png" alt="" />
        <img className="testimonial-div-uranus" src="/images/uranus.png" alt="" />
        <img className="testimonial-div-elipse" src="/images/elipse.png" alt="" />
        <img className="testimonial-div-elipse2" src="/images/elipse.png" alt="" />
      <h1  className="h1-for-28px">What Student's Say</h1>
      <p className="testimonial-div-m-d">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.</p>
      <div className="testimonial-div-bottom">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
