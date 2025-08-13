import React from 'react';
// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
//import '../saffire.css'; // Import your CSS file

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 navbar-custom top">
      <div className="align-items-center justify-content-between container-fluid container-custom">
        <Link to="/" className="navbar-brand fw-bold">
          🌋🎓 SAFFIRE
        </Link>
        <div className="enroll mt-3">
                        <h6 className="py-2"><NavLink className="nav-link p-2" to="/enrollment" onClick={() => setIsOpen(false)}>ENROLLMENT</NavLink></h6>
        </div>

        <button className={`navbar-toggler ${isOpen ? "open" : ""}`} type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <div className="toggler-icon"></div>
          <div className="toggler-icon"></div>
          <div className="toggler-icon"></div>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto first-ul">
            <li className="nav-item list-items">
              <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item list-items hoverables">
              <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
                About
              </NavLink>
              {/*<FontAwesomeIcon icon={faCaretDown} className="ms-1 fa fa-caret-down carr" />*/}
                <ul className="hidden-navs list-unstyled">
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/leadership">Leadership</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/policy">Our Policies</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/board">Board of Directors</Link></li>
                </ul>
            </li>
            <li className="nav-item list-items hoverables">
              <NavLink to="/academics" className="nav-link" onClick={() => setIsOpen(false)}>
                Academics
              </NavLink>
                <ul className="hidden-navs list-unstyled">
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/elementary">Elementary School</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/middle">Middle School</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/high">High School</Link></li>
                  </ul>
            </li>
            <li className="nav-item list-items">
              <NavLink to="/programs" className="nav-link" onClick={() => setIsOpen(false)}>
                Programs
              </NavLink>
            </li>
            <li className="nav-item list-items hoverables">
              <NavLink to="/athletics" className="nav-link" onClick={() => setIsOpen(false)}>
                Athletics
              </NavLink>
            </li>
            <li className="nav-item list-items">
              <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </li>
            {/*<li className="nav-item list-items">
              <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                Search
              </NavLink>
            </li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
}


/*import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <main>
      <div className="top">
            <div className="row d-flex justify-content-between p-3 px-5">
                <div className="col-sm-4 justify-content-between d-flex respontop">
                    <div className="img-fluid">
                        <img src="images/saffire-logo.png" alt="logo" width="100%" height="65%" />
                    </div>
                    <div className="enroll mt-3">
                        <h6 className="p-2"><Link className="text-decoration-none p-2" to="/enrollment">ENROLLMENT</Link></h6>
                    </div>
                </div>
                <div className="col-lg-8">
                    <button className="btn btnmenu" id="btnmenu">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </button>
                    <ul className="first-ul list-unstyled justify-content-between" id="navbar">
                        <li className="li-items py-0 px-2"><Link to="/saffire">Home</Link></li>
                        <li className="li-items py-0 px-2 hoverables"><Link to="/about" id="a" style={{ color: 'rgb(238, 171, 46)' }}>About Us</Link><i className="fa fa-caret-down carr"></i>
                            <ul className="hidden-navs list-unstyled">
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/leadership">Leadership</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/policy">Our Policies</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/board">Board of Directors</Link></li>
                            </ul>
                        </li>
                        <li className="li-items py-0 px-2 hoverables"><Link to="/" id="a">Our Work</Link><i className="fa fa-caret-down carr"></i>
                            <ul className="hidden-navs list-unstyled">
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/academics">Education</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/athletics">Athletics</Link></li>
                            </ul>
                        </li>
                        <li className="li-items py-0 px-2 hoverables"><Link to="/academics" id="a">Academics</Link><i className="fa fa-caret-down carr"></i>
                            <ul className="hidden-navs list-unstyled">
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/elementary">Elementary School</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/middle">Middle School</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/high">High School</Link></li>
                            </ul>
                        </li>
                        <li className="li-items py-0 px-2 hoverables"><Link to="/" id="a">Portal</Link><i className="fa fa-caret-down carr"></i>
                            <ul className="hidden-navs list-unstyled">
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/register">Register</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li className="py-2 px-3 bg-white sub-hover"><Link className="sub-a text-decoration-none fw-light" to="/login">Login</Link></li>
                            </ul>
                        </li>
                        <li className="li-items py-0 px-2"><Link to="/contact" id="a">Contact</Link></li>
                        <li className="li-items py-0 px-2"><Link to="/search" id="search_icon"><i className="fa fa-search"></i></Link></li>
                        <div className="search-page d-flex align-items-center justify-content-center" id="search_page">
                            <div className="p-5 text-center search">
                              <div className="d-flex">
                                <input type="text" placeholder="Type to search" /> {/*onKeyDown="keyPress(event)"}
                                <Link to="/saffire"><i className="fa fa-search text-white"></i></Link>
                              </div>
                              <p className="text-white pt-3 text-start" style={{ fontSize: "15px" }}>Begin typing your search above and press return to search.</p>
                            </div>
                            <div className="search-closebtn" id="search_closebtn">
                              <div className="bg-white p-4">
                                <a href="#"><i className="fa fa-close text-dark" style={{ fontSize: "20px" }}></i></a>
                              </div>
                            </div>
                          </div>
                    </ul>
                </div>
            </div>
        </div>
    </main>
  );
}
*/