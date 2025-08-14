import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import BackButton from '../components/BackButton';

export default function About() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <main>
      <section className="container-fluid about-header p-5 pb-0">
            <div className="bg-image">
                <div className="p-5 dark-overlay d-flex align-items-center justify-content-center">
                    <div>
                      <BackButton />
                        <h1 className="text-white fw-bold text-center">About Saffire Academy</h1>
                        <p className="text-white text-center">Our school name is based on the founder's name and the notion that the fire in the name of the school implies fierce passion in both the students and teachers.</p>
                    </div>
                </div>
            </div>
            <p className="p-5 text-center responp">Saffire Academy stands as a beacon of learning in the community, known for its outstanding academic programs, a diverse array of extracurricular activities, range of sporting activities and a faculty dedicated to the success and well-being of each stuydent. Our commitment to innovation and inclusion remains as strong as ever, and we look foward to continuing our tradition of excellence as we prepare the leaders of tomorrow.</p>
        </section>

        <section className="container-fluid about-body px-5">
            <div className="row p-5 responrow">
                <div className="col-md-6 order-2 order-md-1">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2">FOUNDATION</h1>
                    <div className="py-3">
                        <p>Saffire Academy has a rich history rooted in the belief that quality education can transform lives and communities. Established in 2006, our institution was founded by a dedicated group of educators and community leaders who shared a common vision of providing a holistic and inclusive educational experience.</p>
                        <p>The early years were marked by humble beginnings in a small facility, but the passion(fire) and dedication of our founders laid the foundation for what Saffire Academy would become. With focus, the school grew steadily, gaining recognition for its commitment to nurturing well-rounded individuals.</p>
                        <p>Over the decades, Safire Academy expanded to include not just one but three distinct sections: elementary, middle and high school each tailored to meet the unique needs and challenges of students at different stages of their educational journey. It has embraced change and faced challenges with resilience, always keeping our students’ best interests at the forefront. We take pride in our past achievements, and we look ahead with great optimism and enthusiasm, ready to shape the future of the world.</p>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src="images/1.jpg" width="100%" height="auto" loading='lazy' />
                </div>
            </div>
            <div className='row'>
                    <div className='col-6'>
                        <Link className="hoverable my-3 py-2 px-5 text-center fw-bold text-decoration-none d-flex align-items-center justify-content-center"
                            to="/leadership" style={ {margin: 'auto', background: 'maroon', color: 'rgb(238, 171, 46)', width: '50%'} }>
                            Leadership</Link>
                    </div>
                    <div className='col-6'>
                        <Link className="hoverable my-3 py-2 px-5 text-center fw-bold text-decoration-none d-flex align-items-center justify-content-center"
                            to="/policy" style={ {margin: 'auto', background: 'maroon', color: 'rgb(238, 171, 46)', width: '50%'} }>
                            Our Policies</Link>
                    </div>
                </div>

            {/* PROFESSIONAL AFFILIATIONS */}
<div className="row p-5 responrow">
  <div className="col-md-6">
    <img
      src="images/26.jpg"
      width="100%"
      height="100%"
      alt="Students representing Saffire Academy at a partnered event"
      loading='lazy'
    />
  </div>
  <div className="col-md-6 responcol">
    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
    <h1 className="pt-2" style={{ color: "maroon" }}>PROFESSIONAL AFFILIATIONS</h1>
    <div className="py-3">
      <p>
        At <strong>Saffire Academy</strong>, we believe that meaningful connections with 
        respected organizations elevate the quality of education we provide.  
        Our affiliations with the <strong>Rhode Island League of Charter Schools</strong>, 
        the <strong>College Board</strong>, and the 
        <strong> Greater Providence Chamber of Athletics</strong> open doors to invaluable 
        resources, enriching academic programs, competitive athletics, and community engagement.
      </p>
      <p>
        These partnerships ensure our students benefit from a network that supports 
        their intellectual, creative, and athletic pursuits beyond the classroom.
      </p>
    </div>
  </div>
</div>

{/* OUR VALUES */}
<div className="row p-5 responrow">
  <div className="col-md-6 responcol order-2 order-md-1">
    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
    <h1 className="pt-2" style={{ color: "maroon" }}>OUR VALUES</h1>
    <div className="py-3">
      <p>
        Our values form the heartbeat of Saffire Academy — guiding how we learn, how we lead, 
        and how we live as a community. They are the compass that shapes the experiences of 
        every student who walks through our doors.
      </p>
      <ul className="mt-3">
        <li><strong>Excellence✅:</strong> Striving for the highest standards in academics, arts, and athletics.</li>
        <li><strong>Integrity✅:</strong> Promoting honesty, fairness, and responsibility in every endeavor.</li>
        <li><strong>Innovation✅:</strong> Encouraging creativity and forward-thinking in problem-solving.</li>
        <li><strong>Community✅:</strong> Fostering inclusivity, respect, and active contribution to society.</li>
        <li><strong>Lifelong Learning✅:</strong> Inspiring curiosity and a love of knowledge that endures.</li>
      </ul>
    </div>
  </div>
  <div className="col-md-6 order-1 order-md-2">
    <img
      src="images/27.jpg"
      width="100%"
      height="100%"
      alt="Students collaborating and learning together at Saffire Academy"
      loading='lazy'
    />
  </div>
</div>

    
        </section>
 
    </main>
  );
}
