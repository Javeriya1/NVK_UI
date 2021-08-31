import { Card } from "react-bootstrap";
import React, { Component, useState } from "react";
//import {Link} from 'react-router-dom'
import "./Dashboard.css";
class CardTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.cardIcon
    };
  }

  render() {
    return (
      <Card
        className={this.props.lastCard ? "lastCard" : "normalCard"}
        style={{ width: "101%" }}
        onMouseEnter={() => {
          this.setState(() => {
            return {
              image: this.props.hoverIcon
            };
          });
        }}
        onMouseLeave={() => {
            this.setState(() => {
              return {
                image: this.props.cardIcon
              };
            });
          }}
        
      >
        <Card.Body>
          <p className="cardTitle">
            {this.props.cardName}
            {this.props.lock && (
              <img
                src={this.props.lock}
                style={{
                  position: "absolute",
                  height: "20px",
                  top: "8%",
                  right: "6%"
                }}
              ></img>
            )}
          </p>

          {!this.props.lastCard ? (
            <div className="image">
              <img
                src={this.state.image}
                className="icon"
                //onMouseOver={(e) => (e.currentTarget.src = this.props.hoverIcon)}
                //onMouseLeave={(e) => (e.currentTarget.src = this.props.cardIcon)}
              ></img>
            </div>
          ) : (
            ""
          )}

          {this.props.thirdCard && (
            <div class="row">
              <div className="col left">
                <p className="Text">Task Available</p>
                <h4 className="Count">72</h4>
              </div>
              <div className="col right">
                <p className="Text" style={{position:'absolute',right:'4%'}}>Requests Available</p>
                <h4 className="Count" style={{position:'absolute',bottom:'6.5%',right:'4%'}}>50</h4>
              </div>
            </div>
          )}

          {this.props.identify && (
            <div class="row">
              <div className="col left">
                <p className="Text">Open</p>
                <h4 className="Count">72</h4>
              </div>
              <div className="col right">
                <p className="Text">Drafts</p>
                <h4 className="Count">50</h4>
              </div>
            </div>
          )}
          {this.props.lastCard && (
            <div className="lastCard">
              <div className="row">
                <p className="lastCardHeader">Need Help?</p>
              </div>
              <br />
              <br />
              <div className="row">
                <b className="lastCardText">Genesys Support</b>
                <b className="lastCardEmail">Contact@nvknurseries.com</b>
              </div>
              <br />
              <div className="row">
                <b className="lastCardText">Human Resources</b>
                <b className="lastCardEmail">Contact@nvknurseries.com</b>
              </div>
              <br />

              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "black"
                }}
                className="col"
              >
                Staff Directory &nbsp;
                <a
                  style={{ textAlign: "right", textDecoration: "none" }}
                  className="col"
                  href=""
                >
                  Click Here
                </a>
              </div>

              <div style={{ textAlign: "right" }}>
                <a href="">
                  <img src={this.props.edit} className="editIcon"></img>
                </a>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    );
  }
}
export default CardTemplate;