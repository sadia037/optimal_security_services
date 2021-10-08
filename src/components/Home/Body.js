import React from "react";
import './Home.css';
function Body() {
  return (
    <div style={{ backgroundColor: "#1b1b1b" }}>
      <p
        style={{
          color: "#FFFBE9",
          padding: "90px",
          fontSize: "13pt",
          textIndent: "50px",
          letterSpacing: "1px",
          lineHeight: "1.5",
          justifyContent: "end",
        }}
      >
        A young company promising you the quality and competence you’d expect
        from any established one. Thanks to the 10 years <br /> of valuable
        experience in the eld of security, we know each and every aspect about{" "}
        this eld and we are familiar with the depths and <br /> demands of the
        job. We’ll deliver the upmost professional services at reasonable costs.
        No, our guards won’t sleep during nightshifts. The guards will be
        trained and become a solid asset to the site they’re posted to. The goal
        is to assure your safety and security in ecient ways. Our team will be
        handpicked carefully and sent out to sites they’re most suitable for.
        You’d nd our guards well trained, competent, and right for your site.
        Most importantly, our clients will know they’re secure and in the right
        hands. Experience the quality of an established company that suits your
        aordability.
      </p>
      <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap",justifyContent:"space-evenly"}}>
        <h4 style={{ color: "#D5B964" }}>
          Trained and qualied to industry standards, 24/7 service and support.
        </h4>
        <div className="col-6  body-bullets" >
          <li>Personal Security Guards</li>
          <li>Event Security</li>
          <li>Residential Security</li>
          <li>Front Desk Security</li>
          <li>Construction Security</li>
        </div>
        <div className="col-6 body-bullets" >
          <li>CCTV Surveillance</li>
          <li>Private Investigation</li>
          <li>Property Guarding</li>
          <li>Fire Watch</li>
          <li>Loss Preventions</li>
        </div>
      </div>
    </div>
  );
}

export default Body;
