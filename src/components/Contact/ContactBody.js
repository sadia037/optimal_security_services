import React from "react";
import message from "../Images/EMAIL.png";
import phone from "../Images/PHONE1.png";
import location from "../Images/LOCATION1.png";
import facebook from "../Images/FACEBOOK.png";
import insta from "../Images/INSTAGRAM.png";
import twitter from "../Images/TWITTER2.png";
import "./Contact.css";
function ContactBody() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: " #1B1B1B",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div
        className="col-lg-6 col-12"
        style={{ color: "#D5B964", padding: "60px" }}
      >
        <h1>Contact Us</h1>
        <div
          className=" col-12 d-flex  flex-row align-items-center"
          onClick={(e) => window.open()}
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ cursor: "pointer", width: "50px", height: "50px" }}
            src={message}
            alt="message"
          />
          <h4
            style={{ fontSize: "15pt", marginLeft: "10px" }}
          >
            info@securityoptimal.com
          </h4>
        </div>
        <div
          className=" col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
          onClick={(e) => window.open()}
        >
          <img
            style={{  width: "50px", height: "50px" }}
            src={phone}
            alt="phone"
          />
          <h2
            style={{ cursor: "pointer", fontSize: "22pt", marginLeft: "10px" }}
          >
            +1 (365) 994-0486
          </h2>
        </div>
        <div
          className="col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
          onClick={(e) => window.open()}
        >
          <img
            style={{ cursor: "pointer", width: "50px", height: "50px" }}
            src={location}
            alt="location"
          />
          <h4
            style={{  fontSize: "13pt", marginLeft: "10px" }}
          >
            Suite #400, Plaza 3, 2000 Argentia Rd, Mississauga, <br/> ON L5N 1V9
          </h4>
        </div>
        <div
          className=" col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
          onClick={(e) => window.open("https://www.facebook.com/optimalOSS")}
        >
          <img
            style={{ cursor: "pointer", width: "50px", height: "50px" }}
            src={facebook}
            alt="facebook"
          />
          <h4
            style={{ cursor: "pointer", fontSize: "15pt", marginLeft: "10px" }}
          >
            Optimal OSS
          </h4>
        </div>
        <div
          className=" col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
          onClick={(e) =>
            window.open("https://www.instagram.com/optimalsecurityservices/")
          }
        >
          <img
            style={{ cursor: "pointer", width: "50px", height: "50px" }}
            src={insta}
            alt="insta icon"
          />
          <h4
            style={{ cursor: "pointer", fontSize: "15pt", marginLeft: "10px" }}
          >
            optimalsecurityservices
          </h4>
        </div>
        <div
          className=" col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
          onClick={(e) => window.open("https://twitter.com/securityoptimal")}
        >
          <img
            style={{ cursor: "pointer", width: "50px", height: "50px" }}
            src={twitter}
            alt="twitter"
          />
          <h4
            style={{ cursor: "pointer", fontSize: "15pt", marginLeft: "10px" }}
          >
            securityoptimal
          </h4>
        </div>
      </div>
      <div
        className="col-lg-5 col-12 d-flex flex-column flex-wrap align-items-center"
        style={{ color: "#D5B964", padding: "60px" }}
      >
        <h1>Send Message</h1>
        <form style={{ marginTop: "50px" }}>
          <div className="d-flex flex-column flex-wrap col-12 p-0">
            <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
              <label className="contact-form-label">Name*</label>
              <input type="text" className="p-2 contact-form-input" />
            </div>
            <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2 ">
              <label className="contact-form-label">Email*</label>

              <input type="text" className="p-2 contact-form-input" />
            </div>
            <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
              <label className="contact-form-label">Subject*</label>
              <input type="text" className="p-2 contact-form-input" />
            </div>
            <div className="d-flex flex-column col-12 mt-2 p-2">
              <label className="contact-form-label">Message</label>
              <textarea  rows="3" className="p-2 contact-form-message" />
              <input
                type="submit"
                value="Submit"
                className="mt-5 col-lg-4 col-12 contact-btn"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactBody;
