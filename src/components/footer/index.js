import React from "react";
import "./style.nav.css";
import message from "../Images/message.png";
import phone from "../Images/phone.png";
import location from "../Images/location.png";
import facebook from "../Images/facebook icon.png";
import insta from "../Images/insta icon.png";
import twitter from "../Images/twitter.png";


const Nav = () => {
  return (
    <>
    <div className="footer col-12 d-flex flex-row justify-content-center">
      <div className="col-lg-10 col-12 d-flex flex-row flex-wrap">
        <div className="col-lg-6 col-12">
          <h2>Contact Us</h2>
          <div className="col-12 d-flex flex-row align-items-center mt-4">
            <img
              src={message}
              alt="Social"
              style={{
                width: "40px",
                height: "40px",
                margin: "-4px 16px 0px 0px",
              }}
            />
            <h4 style={{ fontSize: "15pt", marginLeft: "5px" }}>
              info@securityoptimal.com
            </h4>
          </div>
          <div className="col-12 d-flex flex-row align-items-center mt-4">
            <img
              src={phone}
              alt="Social"
              style={{
                width: "40px",
                height: "40px",
                margin: "-4px 16px 0px 0px",
              }}
            />
            <h4 style={{ fontSize: "15pt", marginLeft: "5px" }}>
              +1 (365) 994-0486
            </h4>
          </div>
          <div className="col-12 d-flex flex-row align-items-center mt-4">
            <img
              src={location}
              alt="Social"
              style={{
                width: "40px",
                height: "40px",
                margin: "-4px 16px 0px 0px",
              }}
            />
            <h4 style={{ fontSize: "13pt", marginLeft: "5px" }}>
              Suite #400, Plaza 3, 2000 Argentia Rd, Mississauga, <br /> ON L5N
              1V9
            </h4>{" "}
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column align-items-center">
          <h2>Social Media</h2>
          <div className="col-12 d-flex flex-row justify-content-center align-items-center">
          {[
          {
            image: insta,
            link:   "https://www.instagram.com/optimalsecurityservices/",
          },
         
          {
            image: facebook,
            link: "https://www.facebook.com/optimalOSS",
          },
          {
            image: twitter,
            link: "https://twitter.com/securityoptimal",
          },
        ].map((i) => {
              return (
                <img
                  src={i.image}
                  alt="Social"
                  onClick={(e) => window.open(i.link)}
                  style={{ cursor:"pointer", width: "80px", height: "80px", margin: "12px 16px" }}
                />
              );
            })}
          </div>
        </div>
      </div>
      
    </div>
    <div className="home-footer-copywright">
    <p>
      <span style={{ color: "1B1B1B" }}>&#169;</span>{" "}
      <span style={{ color: "1B1B1B" }}>Copyright </span>Optimal Security Services,{" "}
      <span style={{ color: "1B1B1B" }}>All Right Reserved.</span>
    </p>
  </div>
  </>
  );
};

export default Nav;
