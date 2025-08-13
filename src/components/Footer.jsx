import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const Section = ({ title, children, id }) => (
    <div className="col-md-3 col-12">
      <h4
        className="pb-2 d-flex align-items-center"
        style={{ cursor: isMobile ? 'pointer' : 'default' }}
        onClick={() => isMobile && toggleSection(id)}
      >
        {title}
        {isMobile && <div>{openSections[id] ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} /> }</div>}
      </h4>
      {(!isMobile || openSections[id]) && <ul className="list-unstyled">{children}</ul>}
    </div>
  );

  return (
    <main>
      <section className="container-fluid footer p-o mt-3">
        <div className="row p-5 pt-4 pb-2 responrow">

          {/* Contact Us */}
          <div className="col-md-4 responcol col-12">
            <h4 className="pb-2">Contact Us</h4>
            <div className="d-flex footer-info pt-2">
              <i className="fa fa-map-marker"></i>
              <p className="mx-2">20 Stillwater Street<br />Reude Island</p>
            </div>
            <div className="d-flex footer-info pt-2">
              <i className="fa fa-phone"></i>
              <p className="mx-2">(402) 273-9999</p>
            </div>
            <div className="d-flex footer-info pt-2">
              <i className="fa fa-envelope"></i>
              <p className="mx-2">saffire@acad.edu</p>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-8 col-12">
            <div className="row">

              <Section title="About Us" id="about">
                <li className="py-2"><Link className="text-decoration-none text-white" to="/leadership">Leadership</Link></li>
                <li className="py-2"><Link className="text-decoration-none text-white" to="/policy">Our Policies</Link></li>
                <li className="py-2"><Link className="text-decoration-none text-white" to="/board">Board of Directors</Link></li>
              </Section>

              <Section title="Our Work" id="work">
                <li className="py-2"><Link className="text-decoration-none text-white" to="/academics">Education</Link></li>
                <li className="py-2"><Link className="text-decoration-none text-white" to="/athletics">Athletics</Link></li>
              </Section>

              <Section title="Academics" id="academics">
                <li className="py-2"><Link className="text-decoration-none text-white" to="/elementary">Elementary School</Link></li>
                <li className="py-2"><Link className="text-decoration-none text-white" to="/middle">Middle School</Link></li>
                <li className="py-2"><Link className="text-decoration-none text-white" to="/high">High School</Link></li>
              </Section>

              <Section title="Live At" id="live">
                <li className="py-2"><Link className="text-decoration-none text-white" to="/">Facebook</Link></li>
                <li className="py-2"><Link className="text-decoration-none text-white" to="/">Twitter</Link></li>
              </Section>

            </div>
          </div>

          <p className="text-center pt-3" style={{ color: "rgb(238, 171, 46)", fontSize: "13px" }}>
            Designed and developed by thesmallshaq
          </p>
        </div>
      </section>
    </main>
  );
}



