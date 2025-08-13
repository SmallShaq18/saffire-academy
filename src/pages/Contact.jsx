import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add form submission logic here
  };

  return (
    <main>
      <section className="contact">
        <div className="row">
          <div className="col-md-12 text-end rescol">
            <div className="p-5 m-2 position-relative responcol">
              <h2 className="fw-bold text-center pt-5">OUR CONTACT</h2>
              <p style={{ fontSize: "18px", color: "rgb(104, 104, 104)", textAlign: "center" }}>
                We value connection. Whether you’re curious about enrollment, academics, or simply want to say hello,
                we’d love to hear from you.
              </p>
              <div style={{ border: "3px solid maroon", width: "10%", position: "absolute", left: "45%" }}></div>
            </div>

            <div className="row p-3 m-2 responrow">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 mt-1 responcol">
                      <input type="text" className="form-control formm fst-italic" placeholder="Your Name" name="name" required />
                    </div>
                    <div className="col-lg-6 mt-1 responcol">
                      <input type="email" className="form-control formm fst-italic" placeholder="Your Email Address" name="email" required />
                    </div>
                    <div className="col-lg-12 mt-3 responcol">
                      <select className="form-control formm fst-italic" name="inquiryType" required>
                        <option value="">Select Inquiry Type</option>
                        <option value="admissions">Admissions</option>
                        <option value="academics">Academics</option>
                        <option value="athletics">Athletics</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div className="col-lg-10 pt-3">
                      <textarea className="form-control formm fst-italic" placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <div className="col-lg-2 responcol pt-3">
                      <button type="submit" className="form-control removeborder px-0">
                        <FontAwesomeIcon icon={faPaperPlane} className='fa fs-1 p-2' />
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center p-4">
                  <h5>Thank you for reaching out!</h5>
                  <p>We’ll get back to you as soon as possible.</p>
                  <button className="btn btn-danger mt-2"><Link to='/' className="text-white text-decoration-none">Go Home</Link></button>
                </div>
              )}

              <div className="row deets pt-5 px-0">
                <div className="col-lg-6 text-start responcol text-center">
                  <h6 className="fw-bold">Location:</h6>
                  <p style={{ color: "grey", fontWeight: 500 }} className="mb-0">20 Stillwater Street</p>
                  <p style={{ color: "grey", fontWeight: 500 }}>Reude Island</p>
                  <h6 className="fw-bold">Phone:</h6>
                  <p style={{ color: "grey", fontWeight: 500 }} className="mb-3">
                    <a href="tel:+14022739999" className="text-reset text-decoration-none">(402) 273-9999</a>
                  </p>
                  <h6 className="fw-bold">Other Branch:</h6>
                  <p style={{ color: "grey", fontWeight: 500 }} className="mb-3">North Miami Beach</p>
                </div>
                <div className="col-lg-6 text-start responcol text-center">
                  <h6 className="fw-bold">Work Hours:</h6>
                  <p style={{ color: "grey", fontWeight: 500 }} className="mb-0">07:30 AM - 4:30 PM </p>
                  <p style={{ color: "grey", fontWeight: 500 }}>Monday - Friday</p>
                  <h6 className="fw-bold">Email:</h6>
                  <p style={{ color: "grey", fontWeight: 500 }} className="mb-3">
                    <a href="mailto:saffire@acad.edu" className="text-reset text-decoration-none">saffire@acad.edu</a>
                  </p>
                  <h6 className="fw-bold">Social Media:</h6>
                  <p style={{ color: "grey", fontWeight: 500 }}>
                    <Link className="text-decoration-none text-reset" to="/">Facebook</Link>,{" "}
                    <Link className="text-decoration-none text-reset" to="/">Instagram</Link>,{" "}
                    <Link className="text-decoration-none text-reset" to="/">LinkedIn</Link>
                  </p>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="mt-5">
                <iframe
                  title="School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.02174044178!2d-122.41941508468116!3d37.77492977975937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzEwLjMiVw!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



/*import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <main>
      <section className="contact">

    <div className=" row">

        <div className="col-md-12 text-end rescol">
            <div className="p-5 m-2 position-relative responcol">
              <h2 className="fw-bold text-center pt-5">OUR CONTACT</h2>
              <p style={{ fontSize: "18px", color: "rgb(104, 104, 104)", textAlign: "center" }}>Easy and effective ways to contact us.</p>
              <div style={{ border: "3px solid maroon", width: "10%", position: "absolute", left: "45%" }}></div>
            </div>

            <div className="row p-3 m-2 responrow">
              <form>
                <div className="row">
                  <div className="col-lg-6 mt-1 responcol">
                    <input type="text" className="form-control formm fst-italic" placeholder="Your Name" name="name" />
                  </div>
                  <div className="col-lg-6 mt-1 responcol">
                    <input type="text" className="form-control formm fst-italic" placeholder="Your Email Address" name="email" />
                  </div>
                  <div className="col-lg-10 pt-3">
                    <textarea type="textbox" className="form-control formm fst-italic" placeholder="Your Message" row="50" cols="50" style={{ height: "100px" }}></textarea>
                  </div>
                  <div className="col-lg-2 responcol pt-3">
                    <button type="submit" className="form-control removeborder px-0">
                      <FontAwesomeIcon icon={faPaperPlane} className='fa fs-1 p-2' /></button>
                  </div>
                </div>
              </form>

          <div className="row deets pt-5 px-0">
            <div className="col-lg-6 text-start responcol text-center">
              <h6 className="fw-bold">Location:</h6>
              <p style={{ color: "grey", fontWeight: 500 }} className="mb-0">20 Stillwater Street</p>
              <p style={{ color: "grey", fontWeight: 500 }}>Reude Island</p>
              <h6 className="fw-bold">Phone:</h6>
              <p style={{ color: "grey", fontWeight: 500 }} className="mb-3">(402) 273-9999</p>
              <h6 className="fw-bold">Other Branch:</h6>
              <p style={{ color: "grey", fontWeight: 500 }} className="mb-3">North Miami Beach</p>
            </div>
            <div className="col-lg-6 text-start responcol text-center">
              <h6 className="fw-bold">Work Hours:</h6>
              <p style={{ color: "grey", fontWeight: 500 }} className="mb-0">07:30 AM - 4:30 PM </p>
              <p style={{ color: "grey", fontWeight: 500 }}>Monday - Friday</p>
              <h6 className="fw-bold">Email:</h6>
              <p style={{ color: "grey", fontWeight: 500 }} className="mb-3">saffire@acad.edu</p>
              <h6 className="fw-bold">Social Media:</h6>
              <p style={{ color: "grey", fontWeight: 500 }}><Link className="text-decoration-none text-reset" to="/">Facebook</Link>, <Link className="text-decoration-none text-reset" to="#">Instagram</Link>, <Link className="text-decoration-none text-reset" to="#">Behance</Link>, <Link className="text-decoration-none text-reset" to="#">Linkedin</Link></p>
            </div>
          </div>
            </div>
        </div>
    </div>
</section>
    </main>
  );
}*/
