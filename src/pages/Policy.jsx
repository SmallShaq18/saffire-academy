import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function Policy() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <main>
      <section className="container-fluid policy-header p-5">
            <div className="bg-image">
                <div className="p-5 dark-overlay d-flex align-items-center justify-content-center">
                    <div>
                      <BackButton />
                        <h1 className="text-white fw-bold text-center">Our Policies</h1><br/>
                        <p className="text-white text-center">Saffire Academy is successful in part because it is bound to a code of ethics and policies stemming from that code which are designed to maintain students’ focus on the academics they need to be successful after graduation</p>
                    </div>
                </div>
            </div>
        </section>


        <section className="container-fluid policy-body">

            <div className="row p-5 responrow">
                <div className="col-md-6 p-3">
                    <img src="images/12.jpg" width="100%" height="auto" loading='lazy' />
                </div>
                <div className="col-md-6 p-3">
                    <h1 className="pt-2">Code Of Honour</h1>
                    <div className="p-3">
                        <p>One of a person’s greatest attributes and most cherished traits is honour. An honour system is based on the premise that a person upholds the highest standard in al they do. Honor and integrity are related to our schol’s key characteristics. Without honour, students can not achieve their maximum potential.</p>
                        <p>Saffire Academy Code of Honour:</p>
                        <ul>
                            <li>Respect</li>
                            <li>Responsibility</li>
                            <li>Fairness</li>
                            <li>Trust</li>
                            <li>Compassion</li>
                        </ul>
                        
                    </div>
                </div>
            </div>

            <div className="row p-5 responrow" style={{ background: "rgb(241, 241, 241)" }}>
                <div className="col-md-6 p-3 order-2 order-md-1">
                    <h1 className="pt-2">Dress Code</h1>
                    <div className="p-3">
                        <p>All students MUST wear their appropriate uniform, including when in after-school programs. Students and parents should follow “the day of the week” calendar to coordinate uniform changes for PE days. All uniform clothing and footwear must be purchased from an authorized retailer and may only be the designated syles and colours approved by the school.</p>
                        
                    </div>
                </div>
                <div className="col-md-6 p-3 order-1 order-md-2">
                    <img src="images/13.jpg" width="100%" height="auto" loading='lazy' />
                </div>
            </div>

            <div className="row p-5 responrow">
                <div className="col-md-6 p-3">
                    <img src="images/15.jpg" width="100%" height="auto" loading='lazy' />
                </div>
                <div className="col-md-6 p-3">
                    <h1 className="pt-2">Code Of Discipline</h1>
                    <div className="p-3">
                        <p>Responsibility Centred Discipline, the philosophy of our school, should be a responsibility based, progressive, learning process; It should carry with it goal of intervening in and prevention of continuous episodes of disruptive and/or hurtful behaviours that interfere with a safe, comfortable, and welcoming learning environment.</p>
                      
                    </div>
                </div>
            </div>

            <div className="row p-5 responrow" style={{ background: "rgb(241, 241, 241)" }}>
                <div className="col-md-6 p-3 order-2 order-md-1">
                    <h1 className="pt-2">Communication Protocols</h1>
                    <div className="p-3">
                        <p>Responsibility Centred Discipline, the philosophy of our school, should be a responsibility based, progressive, learning process; It should carry with it goal of intervening in and prevention of continuous episodes of disruptive and/or hurtful behaviours that interfere with a safe, comfortable, and welcoming learning environment.</p>
                        
                    </div>
                </div>
                <div className="col-md-6 p-3 order-1 order-md-2">
                    <img src="images/26.jpg" width="100%" height="auto" loading='lazy' />
                </div>
            </div>

            <div className="row p-5 responrow">
                <div className="col-md-6 p-3">
                    <img src="images/10.jpg" width="100%" height="auto" loading='lazy' />
                </div>
                <div className="col-md-6 p-3">
                    <h1 className="pt-2">Communication Handbook</h1>
                    <div className="p-3">
                        <p>Through a rigorous and innovative academic program in math, science, and technology, in combination with the liberal arts, our academy affords its diverse student population those experiences, skills and values that will prepare them for purposeful contributions in higher education and related fields.</p>
                        
                    </div>
                </div>
            </div>

            {/* ATTENDANCE & PUNCTUALITY POLICY */}
<div className="row p-5 responrow" style={{ background: "rgb(241, 241, 241)" }}>
  <div className="col-md-6 p-3 order-2 order-md-1">
    <h1 className="pt-2">Attendance & Punctuality Policy</h1>
    <div className="p-3">
      <p>
        Regular attendance and punctuality are vital to academic success. Students
        are expected to arrive on time for all classes, assemblies, and activities.
        Absences must be reported by a parent or guardian with a valid reason.
      </p>
      <ul>
        <li>Notify the school for absences before 9:00 a.m.</li>
        <li>More than 3 unexcused absences may result in disciplinary action.</li>
        <li>Late arrivals disrupt learning and should be avoided.</li>
      </ul>
      
    </div>
  </div>
  <div className="col-md-6 p-3 order-1 order-md-2">
    <img src="images/23.jpg" width="100%" height="auto" alt="Attendance Policy" loading='lazy' />
  </div>
</div>

{/* ACADEMIC INTEGRITY POLICY */}
<div className="row p-5 responrow">
  <div className="col-md-6 p-3">
    <img src="images/33.jpg" width="100%" height="auto" alt="Academic Integrity" loading='lazy' />
  </div>
  <div className="col-md-6 p-3">
    <h1 className="pt-2">Academic Integrity Policy</h1>
    <div className="p-3">
      <p>
        Academic honesty is a core value at Saffire Academy. Students are expected
        to complete their own work, properly cite sources, and uphold the principles
        of fairness in all academic activities.
      </p>
      <ul>
        <li>No plagiarism or unauthorized collaboration.</li>
        <li>Cheating on tests or assignments is strictly prohibited.</li>
        <li>Proper citation and referencing are mandatory.</li>
      </ul>
    
    </div>
  </div>
</div>

{/* TECHNOLOGY USE POLICY */}
<div className="row p-5 responrow" style={{ background: "rgb(241, 241, 241)" }}>
  <div className="col-md-6 p-3 order-2 order-md-1">
    <h1 className="pt-2">Technology Use Policy</h1>
    <div className="p-3">
      <p>
        Technology is a valuable educational tool when used responsibly.
        Students must follow guidelines for device usage to ensure a safe and
        productive learning environment.
      </p>
      <ul>
        <li>Use school devices for academic purposes only.</li>
        <li>No access to inappropriate or harmful content.</li>
        <li>Respect the privacy and data of others.</li>
      </ul>
      
    </div>
  </div>
  <div className="col-md-6 p-3 order-1 order-md-2">
    <img src="images/28.jpg" width="100%" height="auto" alt="Technology Use" loading='lazy' />
  </div>
</div>

        </section>
    </main>
  );
}
