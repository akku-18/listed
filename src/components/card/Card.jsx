import React from "react";
import "./card.css";
import { BiChevronDown } from "react-icons/bi";

export default function Card() {
  return (
    <div className="schedule-card">
      <div className="schedule-card-container">
        <div className="card-topbar">
          <span className="todays-schedule">Today's Schedule</span>
          <span className="seeAll">
            See All <BiChevronDown />
          </span>
        </div>
        <div className="box1">
          <span className="task">Meeting with suppliers of Kuta Bali</span>
          <span className="schedule-time">14.00-15.00</span>
          <span className="place">at Sunset Road, Kuta Bali</span>
        </div>
        <div className="box2">
          <span className="task">Check operation at Giga Factory 1 </span>
          <span className="schedule-time">18.00-20.00</span>
          <span className="place">at Central Jakarta</span>
        </div>
      </div>
    </div>
  );
}
