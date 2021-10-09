import React from 'react';
import Logo from '../Images/official-final logo-transparent.png';
import './style.nav.css';

const Nav = ({ i, setI, isActive, setActive }) => {

    return <div className="nav col-12 d-flex flex-row justify-content-center">
        <div className="col-lg-10 col-12 d-flex flex-row align-items-center flex-wrap">
            <img src={Logo} alt={'OPS'} style={{ width: '120px', height: '120px', marginRight: 'auto' }} />
            {['Nav1', 'Nav2', 'Nav3'].map(i => {
                return <h6 className="link">{i}</h6>
            })}
            <button className="burger-btn" onClick={e => setActive(!isActive)}>Burger</button>
            {isActive && <div className="d-flex flex-column col-12 align-items-center">
                {['Nav1', 'Nav2', 'Nav3'].map(i => {
                    return <h6 className="link-sm">{i}</h6>
                })}
            </div>}
        </div>
    </div>
}

export default Nav;