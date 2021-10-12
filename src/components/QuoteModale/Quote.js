import React from "react";
import "./Quote.css";
import cross from '../Images/Cross.svg';
function Quote({setQuote}) {
  return (
    <div
      style={{
        maxHeight: "90vh",
        width: "80vw",
        zIndex: "9999",
        backgroundColor: "#D5B964",
        position: "fixed",
        padding: "30px 30px",
        left: "50%",
        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
        top: "50%",
        transform: "translate(-50%,-50%)",
        borderRadius: "12px",
        overflowY: "auto",
      }}
    >
      <div className="d-flex flex-row justify-content-end"> 
      <img style={{cursor:"pointer"}} src={cross} alt="" onClick ={ e => setQuote(false)} />
      </div>
      <h1 style={{ textAlign: "center" }}> Quote</h1>
      <h3 style={{ textAlign: "center" }}>
        Fill the form below to get a free quote
      </h3>
      <form >
        <div className="d-flex flex-row flex-wrap col-12 p-0">
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="quote-form-label">First Name*</label>
            <input placeholder="First Name" className="p-2 quote-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="quote-form-label">Last Name*</label>
            <input placeholder="Last Name" className="p-2 quote-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2 ">
            <label className="quote-form-label">Email*</label>

            <input placeholder="Email" className="p-2 quote-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="quote-form-label">Phone No.*</label>
            <input
              placeholder="Phone Number"
              className="p-2 quote-form-input"
            />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="quote-form-label">Location*</label>
            <input placeholder="Location" className="p-2 quote-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label for="Services">Select Service*</label>
            <select style={{ height:"40px",marginTop: "10px", width: "100%", backgroundColor: "white", border: "none", borderRadius: "4px"}} name="services" id="services">
              <option value="Select">-Select-</option>
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
            <label for="messagebox" className="quote-form-label">
              Instructions About Required Services
            </label>
            <textarea type="textarea"
              placeholder="About Service "
              rows="4"
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
