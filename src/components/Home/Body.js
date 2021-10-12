import React, { useState } from "react";
import arrow from "../Images/ARROW.png";
import "./Home.css";

let arr = [
  "Personal Security Guards",
  "CCTV Surveillance",
  "Event Security",
  "Private Investigation",
  "Residential Security",
  "Property Guarding",
  "Front Desk Security",
  "Fire Watch",
  "Construction Security",
  "Loss Prevention",
];

function Body() {
  const [i, setI] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#1b1b1b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px 30px",
      }}
    >
      <div class="slideshow-container col-lg-11 col-12">
        <div
          className={`slider ${
            i === 0 ? "slider1" : i === 1 ? "slider2" : "slider3"
          }`}
        >
          <button
            className="left-pos"
            onClick={(e) => setI(i === 0 ? 2 : i - 1)}
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                marginTop: "4px",
                transform: "scaleX(-1)",
                animation: "spin-reverse 2s infinite linear",
              }}
              src={arrow}
              alt=""
            />
          </button>
          <button
            className="right-pos"
            onClick={(e) => setI(i === 2 ? 0 : i + 1)}
          >
            <img
              style={{ width: "40px", height: "40px", marginTop: "4px" }}
              src={arrow}
              alt=""
            />
          </button>
          <div className="col-12 d-flex flex-row justify-content-center">
            <span
              class={i === 0 ? "active-dot" : "dot"}
              onClick={(e) => setI(0)}
            ></span>
            <span
              class={i === 1 ? "active-dot" : "dot"}
              onClick={(e) => setI(1)}
            ></span>
            <span
              class={i === 2 ? "active-dot" : "dot"}
              onClick={(e) => setI(2)}
            ></span>
          </div>
        </div>
      </div>
      <br />

      <p
        className="col-lg-10 col-12"
        style={{
          color: "#FFFBE9",
          fontSize: "20px",
          letterSpacing: "1px",
          textAlign: "justify",
          marginTop: "60px",
        }}
      >
        A young company promising you the quality and competence you’d expect
        from any established one. Thanks to the 10 years of valuable experience
        in the field of security, we know every aspect about this field, and we
        are familiar with the depths and demands of the job. We’ll deliver the
        upmost professional services at reasonable costs. <br/> No, our guards won’t
        sleep during nightshifts. The guards will be trained and become a solid
        asset to the site they’re posted to. The goal is to assure your safety
        and security in efficient ways. Our team will be handpicked carefully
        and sent out to sites they’re most suitable for. You’d find our guards
        well trained, competent, and right for your site. Most importantly, our
        clients will know they’re secure and in the right hands. Experience the
        quality of an established company that suits your affordability.
      </p>
      <div
        className="col-lg-10 col-12"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "60px",
          marginBottom: "60px",
        }}
      >
        <h4
          className="col-12"
          style={{ color: "#D5B964", marginBottom: "24px" }}
        >
          Trained and qualified to industry standards, 24/7 service and support.
        </h4>
        {arr.map((i) => {
          return (
            <div
              className="col-lg-5 col-12"
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "50px",
              }}
            >
              <img
                style={{ width: "15px", height: "15px", marginTop: "4px" }}
                src={arrow}
                alt=""
              />
              <h6
                style={{
                  color: "white",
                  marginLeft: "24px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {i}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
