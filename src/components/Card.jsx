import React from "react";

export default function Card() {
  return (
    <div className="track-course">
      <img src="/images/1.png" alt="" />
      <div className="track-img-after">
        <p>Ui/Ux Design</p>
        <div className="track-stars">
          <img src="/images/star.png" alt="" />
          <img src="/images/star.png" alt="" />
          <img src="/images/star.png" alt="" />
          <img src="/images/star.png" alt="" />
          <img src="/images/star.png" alt="" />
        </div>
      </div>
      <h4>Ui/Ux Design for Beginners</h4>
      <h4 className="h4-price">$98</h4>
      <div className="track-couse-last">
        <div className="track-couse-last-div">
          <img src="/images/clock.png" alt="" />
          <p>22hr 30min</p>
        </div>
        <div className="track-couse-last-div">
          <img src="/images/video.png" alt="" />
          <p>34 Courses</p>
        </div>
        <div className="track-couse-last-div">
          <img src="/images/download.png" alt="" />
          <p>250 Downloads</p>
        </div>
      </div>
      <div className="join-button">Join Course</div>
    </div>
  );
}
