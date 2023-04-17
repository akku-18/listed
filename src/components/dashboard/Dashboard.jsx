import React from "react";
import { FiSettings } from "react-icons/fi";
import { BiUserCircle, BiLike } from "react-icons/bi";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbTags } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import dp from "./Alan DP.png";
import "./dashboard.css";
import { useAuth0 } from "@auth0/auth0-react";
import PieChart from "../graph/PieChart";
import LineChart from "../graph/LineChart";
// import LineChart2 from "../graph/LineChart2";



export default function Dashboard() {
  const {  logout } = useAuth0();

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
            <button className="search-box"  
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Search...
              <AiOutlineSearch />
            </button>
            <BsBell className="bell" />
            <img src={dp} alt="" className="dp" />
          </div>
        </div>
        <div className="cards">
          <div className="card" id="revenue">
            <div className="card-left">
              <div className="card-heading">Total Revenue</div>
              <span className="card-amount">&#36; 2,129,430</span>
            </div>
            <BsCashCoin className="card-svg" />
          </div>
          <div className="card" id="transaction">
            <div className="card-left">
              <div className="card-heading">Total Transaction</div>
              <span className="card-amount">1,520</span>
            </div>
            <TbTags className="card-svg" />
          </div>
          <div className="card" id="likes">
            <div className="card-left">
              <div className="card-heading">Total Likes</div>
              <span className="card-amount">9,721</span>
            </div>
            <BiLike className="card-svg" />
          </div>
          <div className="card" id="users">
            <div className="card-left">
              <div className="card-heading">Total Users</div>
              <span className="card-amount">892</span>
            </div>
            <FiUsers className="card-svg" />
          </div>
        </div>
        <LineChart />
        {/* <LineChart2 /> */}
        <PieChart />
      </div>
    </div>
  );
}
