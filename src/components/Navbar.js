import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div >
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  About
                </a>
              </li>
              
            </ul>
  
            </div>          
            <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
 </div>



 
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "TextUtils",
  about: "Home",
};
