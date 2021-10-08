import React from "react";
import message from "../Images/EMAIL.png";
import phone from "../Images/phone.png";
import location from "../Images/LOCATION1.png";
import facebook from "../Images/FACEBOOK.png";
import insta from "../Images/INSTAGRAM.png";
import twitter from "../Images/TWITTER2.png";
import './Contact.css'
function ContactBody() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: " #1B1B1B" }}>
      <div style={{ color: "#D5B964", padding: "60px" }}>
        <h1>Contact Us</h1>
        <div
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
        <div
          className="col-lg-4 col-12 d-flex  flex-row align-items-center"
          style={{ marginTop: "80px" }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={twitter}
            alt="twitter"
          />
          <h4>securityoptimal</h4>
        </div>
      </div>
      <div
        className="col-lg-7 col-12 d-flex flex-column flex-wrap align-items-center"
        style={{ color: "#D5B964", padding: "60px" }}
      >
        <h1>Send Message</h1>
        <form>
          <div className="d-flex flex-row flex-wrap col-12 p-0">
            <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
              <label className="contact-form-label">Name*</label>
              <input className="p-2 contact-form-input" />
            </div>
            <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2 ">
              <label className="contact-form-label">Email*</label>

              <input
                className="p-2 contact-form-input"
              />
            </div>
            <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
              <label className="contact-form-label">Subject*</label>
              <input  className="p-2 contact-form-input" />
            </div>
            <div className="d-flex flex-column col-12 p-2">
              <label className="contact-form-label">Message</label>
              <textarea rows="3" className="p-2 contact-form-input" />
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
