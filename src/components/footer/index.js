import React from 'react';
import './style.nav.css';
import image1 from '../Images/insta icon.png'

let images = [image1, image1, image1];

const Nav = () => {

    return <div className="footer col-12 d-flex flex-row justify-content-center">
        <div className="col-lg-10 col-12 d-flex flex-row flex-wrap">
            <div className="col-lg-6 col-12">
                <h2>Contact Us</h2>
                <div className="col-12 d-flex flex-row align-items-center mt-4">
                     <img src={image1} alt="Social" style={{ width: '40px', height: '40px', margin: '-4px 16px 0px 0px' }} />
                     <h3>MY TEXT HERE</h3>
                </div>
                <div className="col-12 d-flex flex-row align-items-center mt-4">
                     <img src={image1} alt="Social" style={{ width: '40px', height: '40px', margin: '-4px 16px 0px 0px' }} />
                     <h3>MY TEXT HERE</h3>
                </div>
                <div className="col-12 d-flex flex-row align-items-center mt-4">
                     <img src={image1} alt="Social" style={{ width: '40px', height: '40px', margin: '-4px 16px 0px 0px' }} />
                     <h3>MY TEXT HERE</h3>
                </div>
            </div>
            <div className="col-lg-6 col-12 d-flex flex-column align-items-center">
                <h2>Social Media</h2>
                <div className="col-12 d-flex flex-row justify-content-center align-items-center">
                    {images.map(i => {
                        return <img src={i} alt="Social" style={{ width: '80px', height: '80px', margin: '12px 16px' }} />
                    })}
                </div>
            </div>
        </div>
    </div>
}

export default Nav;