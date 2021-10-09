import React from "react";
import message from "../Images/message.png";
import phone from "../Images/phone.png";
import location from "../Images/location.png";
import facebook from "../Images/facebook icon.png";
import insta from "../Images/insta icon.png";
import twitter from "../Images/twitter.png";

function MainFooter() {
  return (
    <footer
      className="d-flex  flex-row "
      style={{ backgroundColor: "#D5B964" ,width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap" }}
    >
      <div style={{ padding: "30px" }} className="col-lg-6 col-12">
        <h1>Contact Us</h1>
        <div
          style={{ marginTop: "20px" }}
          className="d-flex  flex-row align-items-center"
        >
          <img
            style={{ width: "30px", height: "30px" }}
            src={message}
            alt="message"
          />
          <h4 style={{ fontSize: "10pt", marginLeft: "5px" }}>
            info@securityoptimal.com
          </h4>
        </div>
        <div
          className="d-flex  flex-row align-items-center"
          style={{ marginTop: "20px" }}
        >
          <img
            style={{ width: "30px", height: "30px" }}
            src={phone}
            alt="phone"
          />
          <h2 style={{ fontSize: "10pt", marginLeft: "5px" }}>
            +1 (365) 994-0486
          </h2>
        </div>
        <div
          className="d-flex  flex-row align-items-center"
          style={{ marginTop: "20px" }}
        >
          <img
            style={{ width: "30px", height: "30px" }}
            src={location}
            alt="location"
          />
          <h4 style={{ fontSize: "10pt", marginLeft: "5px" }}>
            Suite #400, Plaza 3, 2000 Argentia Rd, Mississauga, <br /> ON L5N
            1V9
          </h4>
        </div>
      </div>
      <div className="d-flex  flex-row col-lg-6 col-12">
        <h1 style={{marginTop:"20px",marginLeft:"100px"}}> Social Media </h1>
        <div className="d-flex  flex-row align-items-center ">
          <img
            style={{ width: "70px", height: "60px" }}
            src={insta}
            alt="insta icon"
          />
        </div>
        <div className="d-flex  flex-row align-items-center ">
          <img
            style={{ width: "60px", height: "60px", marginLeft: "10px" }}
            src={facebook}
            alt="facebook"
          />
        </div>

        <div className="d-flex  flex-row align-items-center">
          <img
            style={{ width: "60px", height: "60px", marginLeft: "10px" }}
            src={twitter}
            alt="message"
          />
        </div>
      </div>
    </footer>
  );
}
export default MainFooter;
