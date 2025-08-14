import React from 'react';
import { useEffect, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
//import 'react-image-lightbox/style.css';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import Gallery from '../components/Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {


  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('in-viewport');
        } else {
          el.classList.remove('in-viewport');
        }
      });
    },
    { threshold: 0.3 }
  );

  // Select *all* gallery images by class, not just manually tracked refs
  const imgs = document.querySelectorAll('.gallery img.transform-image');
  imgs.forEach((img) => observer.observe(img));

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (

    <main>  

        <section className="container-fluid slider p-0">
            <Slider />
        </section>

        <section className="container-fluid intro p-5">
            <div className="px-5">
                <h1 className="text-center fw-bold">Welcome to Saffire Academy!</h1>
                <p className="text-center pt-3">At Saffire Academy, our mission is to foster a dynamic and inclusive educational environment that empowers students to become critical thinkers, empathical and passionate leaders, and forever learners. We are dedicated to providing a diverse and innovative curriculum that nurtures the intellectual, social, and emotional growth of each child. Through our commitment to excellence, we aim to motivate a future generation of responsible citizens who can contribute positive things to the society.</p>
                <Link className="hoverable my-3 p-3 text-center fw-bold text-decoration-none d-flex align-items-center justify-content-center"
                    to="/board" style={ {margin: 'auto', background: 'maroon', color: 'rgb(238, 171, 46)', width: '30%'} }>
                    Meet Our Staff</Link>
                <p className="text-center pt-3">Our vision is a world where every student is equipped with the knowledge, skills, commitment and values to thrive in an ever-evoloving society. We strive to be a centre of educational excellence that celebrates diversity, encourages creativity and fosters a strong sense of community. Our Mission is to inspire and prepare students to embrace challenges, adapt to change and make a positive impact to the society and the world in general.</p>
                <br/>
                <div className='row'>
                    <div className='col-6'>
                        <Link className="hoverable my-3 p-3 text-center fw-bold text-decoration-none d-flex align-items-center justify-content-center"
                            to="/about" style={ {margin: 'auto', background: 'maroon', color: 'rgb(238, 171, 46)', width: '50%'} }>
                            About Us</Link>
                    </div>
                    <div className='col-6'>
                        <Link className="hoverable my-3 p-3 text-center fw-bold text-decoration-none d-flex align-items-center justify-content-center"
                            to="/programs" style={ {margin: 'auto', background: 'maroon', color: 'rgb(238, 171, 46)', width: '50%'} }>
                            Explore Programs</Link>
                    </div>
                </div>
                
                
            </div>
        </section>


        <section className="container-fluid academics p-5">
            <h2 className='mb-5 text-center social text-uppercase'>Click The Tiers Below For More</h2>
            <div className="row px-3">

                <div className="col-md-6 responcol">
                    <Link to="/elementary">
                        <div className="elementary  position-relative">
                            <span className="d-flex align-items-center justify-content-center">
                                <h5 className="text-center fw-bold head mb-5">ELEMENTARY SCHOOL</h5>
                                <p className="text-center">We believe that young minds are like newly formed galaxies. Full of energy, expansive and curious. Poised to stretch out and make their mark in the universe. At our Elementary school, we help the students discover their brilliance and potential.</p>
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6">
                    <div className="middle  position-relative">
                        <Link to="/middle">
                            <span className="d-flex align-items-center justify-content-center">
                                <h5 className="text-center fw-bold head mb-5">MIDDLE SCHOOL</h5>
                                <p className="text-center">Here we envision every student becoming a world-class philosopher, mathematician or natural scientist. We encourage students to become critical thinkers and to explore and experiment with their talents and discover their purpose.</p>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="col-md-12 pt-5">
                    <div className="high  position-relative">
                        <Link to="/high">
                            <span className="d-flex align-items-center justify-content-center">
                                <h5 className="text-center fw-bold head mb-5">HIGH SCHOOL</h5>
                                <p className="text-center">Here we envision every student becoming a world-class philosopher, mathematician or natural scientist. We encourage students to become critical thinkers and to explore and experiment with their talents and discover their purpose.</p>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>


        <Gallery />

        <section className="container-fluid social">
            <h6 className="text-center fw-bold social">Follow Us On:</h6>
            <ul className="list-unstyled d-flex text-center justify-content-center">
                <li className="p-2"><a className="text-decoration-none" href="https://www.facebook.com" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li className="p-2"><a className="text-decoration-none" href="https://www.instagram.com" target='_blanl'><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li className="p-2"><a className="text-decoration-none" href="https://www.x.com" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className="p-2"><a className="text-decoration-none" href="https://www.whatsapp.com" target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a></li>
            </ul>
        </section>
  
    </main>
  );
}
