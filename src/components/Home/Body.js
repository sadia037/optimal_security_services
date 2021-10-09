import React from "react";
import arrow from "../Images/ARROW.png";
import security from "../Images/security-patrol-guard.jpg";
import photo from "../Images/photo-1485230405346-71acb9518d9c.jpg";
import basic from "../Images/basic-guard.jpg";
import './Home.css';


let arr=['Personal Security Guards','CCTV Surveillance','Event Security','Private Investigation','Residential Security','Property Guarding','Front Desk Security','Fire Watch','Construction Security','Loss Prevention']

function Body() {
  return (
    <div style={{ backgroundColor: "#1b1b1b" }}>
      <div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src={basic} style={{width:"100%"}}/>
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src={security} style={{width:"100%"}}/>
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src={photo} style={{width:"100%"}}/>
  <div class="text">Caption Three</div>
</div>

</div>
<br/>

<div style={{textAlign:"center"}}>
<span class="dot" onclick="currentSlide(1)"></span>
<span class="dot" onclick="currentSlide(2)"></span>
<span class="dot" onclick="currentSlide(3)"></span>
</div>

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
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", }}>
        {arr.map((i)=> {
          return <div className="col-lg-6 col-12" style={{display:"flex", flexDirection:"row", justifyContent:"center", }}>
           <img style={{width :"10px", height:"15px",marginTop:"10px"}} src={arrow} alt=""/>
            <h6 style={{color:"white",marginLeft:"20px", }}>{i}</h6>
            </div>
        })}
        </div>
      </div>
      </div>
  ); 
}

export default Body;
