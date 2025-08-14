import React, {useEffect} from "react";
import { Accordion } from "react-bootstrap";
import BackButton from "../components/BackButton";

export default function Middle() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <main>
      <section className="container-fluid middle-high-header p-5">
            <div className="bg-image">
                <div className="p-5 dark-overlay d-flex align-items-center justify-content-center">
                    <div>
                      <BackButton />
                        <h1 className="text-white fw-bold text-center">Middle School</h1>
                        <h1 className="text-white fw-bold text-center">Grades 6 - 8</h1><br/>
                        <p className="text-white text-center">The faculty and staff provide hands on learning experiences with a strong academic emphasis on philosophy, mathematics and natural science primciples augmented by an innovative In-Field Learning Experience program that allows students observe how liberal arts is used in the world.</p>
                    </div>
                </div>
            </div>
            <h1 className="pt-3 fw-bold text-center" style={{ color: "maroon" }}>About Saffire Academy Middle School</h1>
            <p className="p-3 py-2 text-center responp">Saffire Academy Middle School is an accredited charter public school committed to impacting the knowledge of Liberal Arts in our students.
            Liberal arts is a comprehensive and interdisciplinary approach to learning that emphasizes a broad-based curriculum, critical thinking, and the development of well-rounded individuals.
            Liberal arts equips students with critical thinking skills, which are valuable in any profession.</p>
        </section>


        <section className="container-fluid middle-high-body px-5">

            <div className="row p-3 responrow">
                <div className="col-md-6">
                    <img src="images/26.jpg" width="100%" height="auto" loading="lazy" />
                </div>
                <div className="col-md-6 py-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>Grades 6 - 8</h1>
                    <div className="py-3">
                        <p>Here we envision every student becoming a world-class philosopher, mathematician or natural scientist. We encourage students to become critical thinkers and to explore and experiment with their talents and discover their purpose.</p>
                        <p>
          Our Middle Grades program builds on the strong foundation from the elementary years,
          preparing students for the challenges and opportunities of high school and beyond.
        </p>
        <p>
          Here, students deepen their critical thinking, expand their creativity, and begin exploring
          specialized areas of interest — from literature, history, and the sciences to the arts and
          emerging technologies.
        </p>
        
                    </div>
                </div>
            </div>

            <div className="row p-3 responrow">
                <div className="col-md-6 py-5 order-2 order-md-1">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>MR. PETE SHANGHAIL</h1>
                    <div className="py-3">
                        <h3 className="text-secondary mb-3">Message from the Middle Grades Principal</h3>
        <blockquote className="blockquote">
          <p className="mb-3">
            “Middle school is a journey of self-discovery.”
          </p>
        </blockquote>
        <p>
          At this stage, our students are not just learning facts — they are learning who they are and
          how they can contribute to the world.
        </p>
        <p>
          My vision for our Middle Grades is to cultivate confident, thoughtful young people who embrace
          challenges and seek truth with curiosity and respect.
        </p>
        <p>
          Through rigorous academics, creative exploration, and a supportive community, we equip our
          students to step into high school ready to excel — and into life ready to make a difference.
        </p>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src="images/35.jpg" width="100%" height="auto" loading="lazy" />
                </div>
            </div>

            {/* Curriculum & Approach */}
      
        <div className="m-3" style={{ borderTop: "4px solid #f0f0f0", paddingTop: "2rem" }}>
          <h2 className="fw-bold mb-3 text-center" style={{ color: "maroon" }}>Curriculum & Approach</h2>
          <p>
            In middle school, the liberal arts curriculum becomes more deliberate: subjects are woven together
            so students encounter ideas from multiple perspectives. Reading and writing sit at the centre of our program,
            supported by history, arts, languages, and inquiry-driven science.
          </p>

          <div className="row mt-4">
            <div className="col-lg-6">
              <div style={{ border: "4px solid maroon", width: "20%" }}></div>
              <h5 className="pt-2" style={{ color: "maroon" }}>Core Focus Areas</h5>
              <Accordion className="mt-3" >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Literature & Writing</Accordion.Header>
              <Accordion.Body>
                Close reading, creative writing, and research-based essays.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>History & Culture</Accordion.Header>
              <Accordion.Body>
                Comparative studies and project-based investigations.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Science & Inquiry</Accordion.Header>
              <Accordion.Body>
                Hands-on experiments and hypothesis-driven labs.
              </Accordion.Body>
            </Accordion.Item>
                        <Accordion.Item eventKey="3">
              <Accordion.Header>Arts & Performance</Accordion.Header>
              <Accordion.Body>
                Visual arts, drama, and music integrated across units.
              </Accordion.Body>
            </Accordion.Item>
                        <Accordion.Item eventKey="4">
              <Accordion.Header>Languages</Accordion.Header>
              <Accordion.Body>
                Continued language study (French / introductory classical language options).
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
            </div>

            <div className="col-lg-6">
              <div style={{ border: "4px solid maroon", width: "20%" }}></div>
              <h5 className="pt-2" style={{ color: "maroon" }}>How We Teach</h5>
              <ul className="mt-3">
                <li>Interdisciplinary units that connect literature, history, and the arts.</li>
                <li>Socratic seminars and debates to build oral reasoning and empathy.</li>
                <li>Portfolio assessment and exhibitions instead of relying solely on tests.</li>
                <li>Collaborative projects and community-based learning opportunities.</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="fw-bold mb-3 mt-4 text-center" style={{ color: "maroon" }}>Sample Weekly Snapshot</h5>
            <div className="row g-2">
              <div className="col-sm-6 col-md-4">
                <div className="p-3 border rounded bg-white h-100">
                  <strong>Monday</strong>
                  <div className="small text-muted">Literature workshop & seminar</div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="p-3 border rounded bg-white h-100">
                  <strong>Tuesday</strong>
                  <div className="small text-muted">Math labs & applied problem-solving</div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="p-3 border rounded bg-white h-100">
                  <strong>Wednesday</strong>
                  <div className="small text-muted">Arts studio & performance practice</div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="p-3 border rounded bg-white h-100">
                  <strong>Thursday</strong>
                  <div className="small text-muted">Science inquiry & outdoor learning</div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="p-3 border rounded bg-white h-100">
                  <strong>Friday</strong>
                  <div className="small text-muted">Project work & portfolio reflection</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      

        </section>
    </main>
  );
}
