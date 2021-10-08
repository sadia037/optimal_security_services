import React from "react";
import "./Apply.css";

function Apply() {
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#D5B964" }}>
      <h1> Apply Now</h1>
      <form>
        <div className="d-flex flex-row flex-wrap col-12 p-0">
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="apply-form-label">First Name*</label>
            <input value="First Name" className="p-2 apply-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="apply-form-label">Last Name*</label>
            <input value="Last Name" className="p-2 apply-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2 ">
            <label className="apply-form-label">Email*</label>

            <input value="Email" className="p-2 apply-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="apply-form-label">Phone No.*</label>
            <input value="Phone Number" className="p-2 apply-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="apply-form-label">Age*</label>
            <input value="Age" className="p-2 apply-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <p>Do you have any previous work experience in this feild?</p>
              <input type="radio" name="radio" id="op1" />
            <label for="op1" className="label1"><span>Yes</span></label>
            <input type="radio" name="radio" id="op2" />
            <label for="op2" className="label2"><span>No</span></label>
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <p>Do you have a car?</p>
              <input type="radio" name="radio" id="op1" />
            <label for="op1" className="label1"><span>Yes</span></label>
            <input type="radio" name="radio" id="op2" />
            <label for="op2" className="label2"><span>No</span></label>
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <p>Are you applying for</p>
              <input type="radio" name="radio" id="op1" />
            <label for="op1" className="label1"><span>Full Time</span></label>
            <input type="radio" name="radio" id="op2" />
            <label for="op2" className="label2"><span>Part Time</span></label>
          </div>
        </div>
        <input
              type="submit"
              value="Submit"
              className="mt-5 col-lg-4 col-12 apply-btn"
            />
      </form>
    </div>
  );
}
export default Apply;
