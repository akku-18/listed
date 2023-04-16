import React from "react";
import { FiSettings } from "react-icons/fi";
import { BiUserCircle, BiLike } from "react-icons/bi";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbTags } from "react-icons/tb";
import { BsSearch, BsBell } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { AiFillCamera } from "react-icons/ai";
import dp from "./Alan DP.png";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <h1 className="dashboard-left-heading">Board.</h1>

        <div className="menu">
          <div className="dash">
            <AiOutlinePieChart className="pie" color="white" />
            <span>Dashboard</span>
          </div>

          <div className="transaction">
            <TbTags className="tags" color="white" />
            <span>Transactions</span>
          </div>

          <div className="schedule">
            <AiOutlineSchedule className="schedule" color="white" />
            <span>Schedule</span>
          </div>

          <div className="user">
            <BiUserCircle className="user" color="white" />
            <span>Users</span>
          </div>

          <div className="setting">
            <FiSettings className="setting" color="white" />
            <span>Settings</span>
          </div>

          <span className="help">Help</span>
          <span className="contact">Contact us</span>
        </div>
      </div>

      <div className="dashboard-right">
        <div className="topbar">
          <h1>Dashboard</h1>
          <div className="topbar-right">
            <button className="search-box">
              Search...
              <AiOutlineSearch />
            </button>
            <BsBell className="bell" />
            <img src={dp} alt="" className="dp" />
          </div>
        </div>
        <div className="total-revenue">
          <div className="revenue-left">
          <div className="revenue">Total Revenue</div>
          <span>&#36; 2,129,430</span>
          </div>
          <AiFillCamera className="camera" /> 
        </div>
      </div>
    </div>
  );
}
