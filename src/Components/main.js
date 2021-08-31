import React from "react";
import CardTemplate from "./Dashboard";
import customerIcon from "../Dashboard_icons/Customer Quotes & Orders-big-grey.svg";
import hoverCustomerIcon from "../Dashboard_icons/Customer Quotes & Orders-small-white.svg"
import purchaseIcon from "../Dashboard_icons/Purchase Orders-big-grey.svg";
import hoverPurchaseIcon from "../Dashboard_icons/Purchase Orders-small-white.svg"
import inventoryIcon from "../assets/img/inventory-lg.svg";
import hoverInventoryIcon from "../Dashboard_icons/Inventory-small-white.svg"; 
import inventoryLock from "../assets/img/lock.svg";
import toolsIcon from "../Dashboard_icons/Tools & Settings-small-grey.svg";
import hoverToolsIcon from "../Dashboard_icons/Tools & Settings-small-white.svg"
import reports from "../Dashboard_icons/Reports-big-grey.svg";
import hoverReports from "../Dashboard_icons/Reports-small-white.svg";
import editIcon from "../assets/img/edit-ic.svg";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import { Container,Row, Col } from "react-bootstrap";
import HeaderNav from "./HeaderNav";
import Left from "./Left"
// import Sidebar from "./Sidebar"
import "./Dashboard.css";
class Main extends React.Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <div className="row" style={{marginTop:'52px',overflowX:'hidden',marginRight:'0'} }>
          <div className="col-1" style={{width:'5%'}}>
            <Router>
           <Left/>
           </Router>
          </div>
          <div className="col-2" style={{marginLeft:'14px'}}>
            {/* <Container> */}
            <Row style = {{width:'90vw', paddingTop:'28px', paddingLeft:'0',paddingBottom:'0'}}>
              <Col xs ={12} sm ={12} md ={6} lg ={4} >
                  <CardTemplate
                    cardName="Customer & Quote Orders"
                    cardIcon = {customerIcon}
                    hoverIcon ={hoverCustomerIcon}
                    identify="true"
                  />
               </Col>
               <Col xs ={12}  sm ={12} md ={6} lg ={4} >
                  <CardTemplate
                    cardName="Purchase Orders"
                    cardIcon={ purchaseIcon }
                    hoverIcon={hoverPurchaseIcon}
                    identify="true"
                   
                  />
                </Col>
                <Col xs ={12}  sm ={12} md ={6} lg ={4} >
                  <CardTemplate
                    cardName="Inventory Management"
                    cardIcon={inventoryIcon}
                    hoverIcon={hoverInventoryIcon }
                    thirdCard = "true"
                    lock = {inventoryLock}
                  />
                </Col>
             
             
              <Col xs ={12}  sm ={12} md ={6} lg ={4} >
                  <CardTemplate
                    cardName="Tools & Settings"
                    cardIcon={toolsIcon}
                    hoverIcon={hoverToolsIcon}
                  />
                </Col>
                <Col xs ={12}  sm ={12} md ={6} lg ={4} >
                  <CardTemplate
                    cardName="Reports"
                    cardIcon={ reports }
                    hoverIcon={hoverReports}
                  />
                </Col>
                <Col  >
                  <CardTemplate lastCard="true" removeClass = "true" edit = {editIcon}/>
                </Col>
              </Row>
            {/* </Container> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
