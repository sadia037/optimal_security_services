import React from "react";
import logo from "../Images/official-final logo-transparent.png";
import "./Home.css";
function MainNavigation() {
  return (
    <div className="nav-primary">
      <div style={{ padding: "20px" }}>
        <img
          style={{ width: "150px", height: "130px" }}
          src={logo}
          alt="logo"
        />
      </div>
      <div className="nav-secondary">
        <h4 className="nav-heading" style={{ marginLeft: "60px" }}>
          Services
        </h4>
        <h4 className="nav-heading" style={{ marginLeft: "100px" }}>
          Apply Now
        </h4>
        <h4 className="nav-heading" style={{ marginLeft: "100px" }}>
          Contact Us
        </h4>
        <h4 className="nav-heading" style={{ marginLeft: "100px" }}>
          Get a Quote
        </h4>
      </div>
    </div>
  );
}
export default MainNavigation;
