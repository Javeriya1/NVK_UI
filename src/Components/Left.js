
import React, { Component, useState } from "react";
import "./Left.css";
import Dashboard from "../Dashboard_icons/Dashboard-small-grey.svg"
import HoverDashboard from "../Dashboard_icons/Dashboard-small-shite.svg";
import Customer from "../Dashboard_icons/Customer Quotes & Orders-small-grey.svg";
import HoverCustomer from "../Dashboard_icons/Customer Quotes & Orders-small-white.svg";
import Purchase from "../Dashboard_icons/Purchase Orders-small-grey.svg"
import HoverPurchase from  "../Dashboard_icons/Purchase Orders-small-white.svg"
import Inventory from "../Dashboard_icons/Inventory-small-grey.svg";
import HoverInventory from "../Dashboard_icons/Inventory-small-white.svg";
import Management from "../Dashboard_icons/Customer Management_grey.svg";
import HoverManagement from "../Dashboard_icons/Customer Management_white.svg"
import Supplier from "../Dashboard_icons/Supplier Management-small-grey.svg";
import HoverSupplier from "../Dashboard_icons/Supplier Management-small-white.svg"
import Tools from "../Dashboard_icons/Tools & Settings-small-grey.svg";
import HoverTools from "../Dashboard_icons/Tools & Settings-small-white.svg";
import Reports from "../Dashboard_icons/Reports-small-grey.svg";
import HoverReports from "../Dashboard_icons/Reports-small-white.svg"
import Staff from "../Dashboard_icons/Staff Directory-small-grey.svg";
import HoverStaff from "../Dashboard_icons/Staff Directory-small-white.svg";
import Message from "../Dashboard_icons/Messages-small-grey.svg";
import HoverMessage from "../Dashboard_icons/Messages-small-white.svg";
import Maps from "../Dashboard_icons/Map Locator-small-grey.svg";
import HoverMaps from "../Dashboard_icons/Map Locator-small-white.svg";
import { FaGreaterThan } from 'react-icons/fa';

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: Dashboard,
      image1:Customer,
      image2:Purchase,
      image3:Inventory,
      image4:Management,
      image5:Supplier,
      image6:Tools,
      image7:Reports,
      image8:Staff,
      image9:Message,
      image10:Maps,
    };
  }
  handleMouseEnter=(e)=>{
 console.log(e.target.id);
    if(e.currentTarget.id=="image")
    this.setState({image:HoverDashboard})
    if(e.currentTarget.id=="image1")
    this.setState({image1:HoverCustomer})
    if(e.currentTarget.id=="image2")
    this.setState({image2:HoverPurchase})
    if(e.currentTarget.id=="image3")
    this.setState({image3:HoverInventory})
    if(e.currentTarget.id=="image4")
    this.setState({image4:HoverManagement})
    if(e.currentTarget.id=="image5")
    this.setState({image5:HoverSupplier})
    if(e.currentTarget.id=="image6")
    this.setState({image6:HoverTools})
    if(e.currentTarget.id=="image7")
    this.setState({image7:HoverReports})
    if(e.currentTarget.id=="image8")
    this.setState({image8:HoverStaff})
    if(e.currentTarget.id=="image9")
    this.setState({image9:HoverMessage})
    if(e.currentTarget.id=="image10")
    this.setState({image10:HoverMaps})

}
handleMouseLeave=(e)=>{
 
  if(e.currentTarget.id=="image")
    this.setState({image:Dashboard})
    if(e.currentTarget.id=="image1")
    this.setState({image1:Customer})
    if(e.currentTarget.id=="image2")
    this.setState({image2:Purchase})
    if(e.currentTarget.id=="image3")
    this.setState({image3:Inventory})
    if(e.currentTarget.id=="image4")
    this.setState({image4:Management})
    if(e.currentTarget.id=="image5")
    this.setState({image5:Supplier})
    if(e.currentTarget.id=="image6")
    this.setState({image6:Tools})
    if(e.currentTarget.id=="image7")
    this.setState({image7:Reports})
    if(e.currentTarget.id=="image8")
    this.setState({image8:Staff})
    if(e.currentTarget.id=="image9")
    this.setState({image9:Message})
    if(e.currentTarget.id=="image10")
    this.setState({image10:Maps})
    
}
 render() {
  return (
    <div id="mySidebar" class="sidebar">
        <ul className="sidebarList"  >
          <li id="image"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            >
            <a href="#">
              <img className= "icon" src={this.state.image} 
                   alt="" />
              <span className= "title">Dashboard</span>
            </a>
          </li>
          <li  id="image1" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <a href="#">
           <FaGreaterThan className="Fa"/>
            <img className= "icon" src={this.state.image1} alt=""/>
                <span className = "title customer">Customer Quotes &amp;Orders </span>
            </a>
            <ul className = "sub-menu" >
                <li ><a href = "#">Order List</a></li>
                <li><a href = "#">New Order</a></li>
                <li><a href = "#">New Quote</a></li>
                <li><a href = "#">Quick Pick</a></li>
                <li><a href = "#">Reserve</a></li>
                <li><a href = "#">Invoice & Adjustments</a></li>
            </ul>
          </li>
          <li id="image2" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
               
            <a href="#">
            <FaGreaterThan className="Fa"/>
            <img className= "icon" src={this.state.image2} alt=""/>
                <span className = "title">Purchase Orders</span>
            </a>
            <ul className = "sub-menu">
                <li><a href = "#">P.O.List</a></li>
                <li><a href = "#">New P.O</a></li>
                
            </ul>
          </li>
          <li id="image3" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <a href="#">
            <FaGreaterThan className="Fa"/>
            <img className= "icon" src={this.state.image3 } alt=""/>
                <span className = "title">Inventory</span>
            </a>
            <ul className = "sub-menu">
                <li><a href = "#">Inventory Manager</a></li>
                <li><a href = "#">Plant Manager</a></li>
                <li><a href = "#">Product Manager</a></li>
                <li><a href = "#">Plant Settings</a></li>
                <li><a href = "#">Product Settings</a></li>
                <li><a href = "#">Inventory Settings</a></li>
                <li><a href = "#">Task Queue</a></li>
            </ul>
          </li>
         
          <li id="image4" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <a href="#">
            <img className= "icon" src={this.state.image4 } alt=""/>
                <span className = "title">Customer Management</span>
            </a>
          </li>
          <li id="image5" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <a href="#">
            <img className= "icon" src={this.state.image5} alt=""/>
                <span className = "title">Supplier Management</span>
            </a>
          </li>
          <li id="image6"onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <a href="#">
            <FaGreaterThan className="Fa"/>
            <img className= "icon" src={this.state.image6} alt=""/>
                <span className = "title">Tools & Settings</span>
            </a>
            <ul className = "sub-menu">
                <li><a href = "#">Organization Settings</a></li>
                <li><a href = "#">Customer Settings</a></li>
                <li><a href = "#">Supplier Settings</a></li>
                <li><a href = "#">Tags & Lables</a></li>
                <li><a href = "#">Image Management</a></li>
                <li><a href = "#">User Management</a></li>
                
            </ul>
          </li>
          <li id="image7" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <a href="#">
            <img className= "icon" src={this.state.image7} alt=""/>
                <span className = "title">Reports</span>
            </a>
          </li>
          <li id="image8" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <a href="#">
            <img className= "icon" src={this.state.image8} alt=""/>
                <span className = "title">Staff Directory</span>
            </a>
          </li>
          <li id="image9" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <a href="#">
            <FaGreaterThan className="Fa"/>
            <img className= "icon" src={this.state.image9} alt=""/>
                <span className = "title">Message Center</span>
            </a>
            <ul className = "sub-menu">
                <li><a href = "#">Inbox</a></li>
                <li><a href = "#">Sent Items</a></li>
                <li><a href = "#">Compose Message</a></li>
                
            </ul>
            
          </li>
          <li id="image10" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <a href="#">
            <img className= "icon" src={this.state.image10} alt=""/>
                <span className = "title">Map Locator</span>
            </a>
          </li>
        </ul>
      </div>
    
  );
}
}

export default Left;