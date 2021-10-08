import React from "react";
import "./Quote.css";
function Quote() {
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#D5B964" }}>
      <h1> Get a Quote</h1>
      <h3>Fill the form below to get a free quote</h3>
      <form>
        <div className="d-flex flex-row flex-wrap col-12 p-0">
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="quote-form-label">First Name*</label>
            <input value="First Name" className="p-2 quote-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="quote-form-label">Last Name*</label>
            <input value="Last Name" className="p-2 quote-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2 ">
            <label className="quote-form-label">Email*</label>

            <input value="Email" className="p-2 quote-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="quote-form-label">Phone No.*</label>
            <input value="Phone Number" className="p-2 quote-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="quote-form-label">Location*</label>
            <input value="Location" className="p-2 quote-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label for="Services">Select Service*</label>
            <select name="services" id="services">
            <option value="Select">
                -Select-
              </option>
              <option value="Personal Security Guards">
                Personal Security Guards
              </option>
              <option value="Event Security">Event Security</option>
              <option value="Residential Security">Residential Security</option>
              <option value="Front Desk Security">Front Desk Security</option>
              <option value="Construction Security">
                Construction Security
              </option>
              <option value="CCTV Surveillance">CCTV Surveillance</option>
              <option value="Private Investigation">
                Private Investigation
              </option>
              <option value="Property Guarding">Property Guarding</option>
              <option value="Fire Watch">Fire Watch</option>
              <option value="Loss Preventions">Loss Preventions</option>
            </select>
          </div>
          <div className="d-flex flex-column col-12 p-2">
            <label className="quote-form-label">
              Intructions About Required Services
            </label>
            <textarea
              value="About Service "
              rows="3"
              className="p-2 quote-form-input"
            />
            <input
              type="submit"
              value="Send"
              className="mt-5 col-lg-4 col-12 quote-btn"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Quote;
