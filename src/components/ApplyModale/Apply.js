import React, { useState } from "react";
import "./Apply.css";
import cross from "../Images/Cross.svg";

function Apply({ setApply }) {
  function handleChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {};
  }

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
        <img
          style={{ cursor: "pointer" }}
          src={cross}
          alt=""
          onClick={(e) => setApply(false)}
        />
      </div>
      <h1 style={{ textAlign: "center" }}> Apply Now</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="d-flex flex-row flex-wrap col-12 p-0">
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-1">
            <label className="apply-form-label">First Name*</label>
            <input placeholder="First Name" className="p-2 apply-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="apply-form-label">Last Name*</label>
            <input placeholder="Last Name" className="p-2 apply-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2 ">
            <label className="apply-form-label">Email*</label>

            <input placeholder="Email" className="p-2 apply-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="apply-form-label">Phone No.*</label>
            <input
              placeholder="Phone Number"
              className="p-2 apply-form-input"
            />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label className="apply-form-label">Age*</label>
            <input placeholder="Age" className="p-2 apply-form-input" />
          </div>
          <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
            <label for="file-upload" className="custom-file-label">
              Resume*
            </label>
            <input
              class="custom-file-upload"
              id="file-upload"
              type="file"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-12 d-flex flex-row align-items-center mt-4">
            <p style={{ color: "black", fontSize: "15pt" }}>
              Do you have any previous work experience in this field?
            </p>
            <div>
            <input type="radio" name="work" id="yes" />
            <label for="yes">Yes</label>

            <input type="radio" name="work" id="no" />
            <label for="no">No</label>
            </div>
          </div>
          <div className="col-12 d-flex flex-row align-items-center mt-4 ">
            <p style={{ color: "black", fontSize: "15pt" }}>
              Do you have a car?
            </p>

            <input type="radio" name="car" id="yes" />
            <label for="yes">Yes</label>

            <input type="radio" name="car" id="no" />
            <label for="no">No</label>
          </div>
          <div className="col-12 d-flex flex-row align-items-center mt-4">
            <p style={{ color: "black", fontSize: "15pt" }}>
              Are you applying for
            </p>
            <input type="radio" name="job" id="Part Time" />
            <label for="Part Time">Part Time</label>

            <input type="radio" name="job" id="Full Time" />
            <label for="Full Time">Full Time</label>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-5 col-lg-4 col-12 apply-btn "
        />
      </form>
    </div>
  );
}
export default Apply;
