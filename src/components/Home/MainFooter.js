import React from 'react';
import message from "../Images/message.png";
import phone from "../Images/phone.png";
import location from "../Images/location.png";
import facebook from "../Images/facebook icon.png";
import insta from "../Images/insta icon.png";
import twitter from "../Images/TWITTER2.png";

function MainFooter(){
    return<div>
        <div>
            <h1>Contact Us</h1>
            <div
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "50px", height: "50px",  }} 
            src={message}
            alt="message"
          />
          <h4 className="d-flex  flex-row align-items-center">info@securityoptimal.com</h4>
        </div>
        <div
          className="col-lg-4 col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={phone}
            alt="phone"
          />
          <h2>+1 (365) 994-0486</h2>
        </div>
        <div
          className="col-lg-4 col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={location}
            alt="location"
          />
          <h4>
            Suite #400, Plaza 3, 2000 Argentia Rd, Mississauga, ON L5N 1V9
          </h4>
        </div>
        <div
          className="col-lg-4 col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={facebook}
            alt="facebook"
          />
          <h4>Optimal OSS</h4>
        </div>
        <div
          className="col-lg-4 col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "60px", height: "50px" }}
            src={insta}
            alt="insta icon"
          />
          <h4>optimalsecurityservices</h4>{" "}
        </div><div
          className="col-lg-4 col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={message}
            alt="message"
          />
          <h4>info@securityoptimal.com</h4>
        </div>
        <div
          className="col-lg-4 col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={phone}
            alt="phone"
          />
          <h2>+1 (365) 994-0486</h2>
        </div>
        <div
          className="col-lg-4 col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={location}
            alt="location"
          />
          <h4>
            Suite #400, Plaza 3, 2000 Argentia Rd, Mississauga, ON L5N 1V9
          </h4>
        </div>
        <div
          className="col-lg-4 col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={facebook}
            alt="facebook"
          />
          <h4>Optimal OSS</h4>
        </div>
        <div
          className="col-lg-4 col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "60px", height: "50px" }}
            src={insta}
            alt="insta icon"
          />
          <h4>optimalsecurityservices</h4>{" "}
        </div>
        </div>
        <div>
        <h1>Social Media</h1>

        </div>
    </div>
}
export default MainFooter;