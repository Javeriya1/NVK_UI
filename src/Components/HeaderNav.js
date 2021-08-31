import React from "react";
import "./HeaderNav.css";
import Mail from "../assets/img/mail.svg";

export default function HeaderNav() {
  return (
    <div className="header">
      <div className="nav-header">
        <a href="#" className="navbar-brand">
          <img src="../assets/img/logo.svg" alt="" style={{height:'18%',width:'17%',marginTop:"3px"}} />
        </a>
        <ul className="menu">
        <li>
          <a href="#">
            <img src="../assets/img/notifications.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Mail} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/profile-img.svg" alt="" />
            <span className = "user">User name</span>
          </a>
        </li>
        <li >
          <a href="#">
            <img class="lastMenu" src="../assets/img/menu.svg" alt="" /> 
          </a>
        </li>
      </ul>
      </div>
      
    </div>
  );
}
