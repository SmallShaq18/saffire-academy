import React, {useEffect} from "react";
import { Accordion } from "react-bootstrap";
import BackButton from "../components/BackButton";

export default function High() {

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
                        <h1 className="text-white fw-bold text-center">High School</h1>
                        <h1 className="text-white fw-bold text-center">Grades 9 - 12</h1><br/>
                        <p className="text-white text-center">The faculty and staff provide hands on learning experiences with a strong academic emphasis on philosophy, mathematics and natural science primciples augmented by an innovative In-Field Learning Experience program that allows students observe how liberal arts is used in the world.</p>
                    </div>
                </div>
            </div>
            <h1 className="pt-3 fw-bold text-center" style={{ color: "maroon" }}>About Saffire Academy High School</h1>
            <p className="p-3 py-2 text-center responp">Saffire Academy High School is an accredited charter public school committed to impacting the knowledge of Liberal Arts in our students.
            Liberal arts is a comprehensive and interdisciplinary approach to learning that emphasizes a broad-based curriculum, critical thinking, and the development of well-rounded individuals.
            Liberal arts equips students with critical thinking skills, which are valuable in any profession. The ability to expres ideas clearly, in both writing and speaking is a hallmark of liberal arts education.
            Students gain exposure to variety of subjects making them  well-rounded individuals. Graduates are more inclined to pursue continuous education and self-development.
            Liberal arts grants students versatility in career opportunities. Beyond career success, liberal arts is seen as a path to personal fulfillment and a life rich in intellectual and cultural experiences.</p>
        </section>


        <section className="container-fluid middle-high-body px-5">

            <div className="row p-3 responrow">
                <div className="col-md-6">
                    <img src="images/12.jpg" width="100%" height="auto" loading="lazy" />
                </div>
                <div className="col-md-6 py-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>Grades 9 - 12</h1>
                    <div className="py-3">
                        <p>Here we envision every student becoming a world-class philosopher, mathematician or natural scientist. We encourage students to become critical thinkers and to explore and experiment with their talents and discover their purpose.</p>
                    </div>
                </div>
            </div>

            <div className="row p-3 responrow">
    <div className="col-md-6 py-5 order-2 order-md-1">
        <div style={{ border: "4px solid maroon", width: "20%" }}></div>
        <h1 className="pt-2" style={{ color: "maroon" }}>DR. SARAH RODRIGUEZ</h1>
        <div className="py-3">
            <h3 className="text-secondary mb-3">Message from the High School Principal</h3>
            <blockquote className="blockquote">
                <p className="mb-3">
                    "High school is where potential becomes purpose."
                </p>
            </blockquote>
            <p>
                These four years are transformative — our students discover their passions, develop their voices,
                and prepare for the next chapter of their academic and personal journeys.
            </p>
            <p>
                My vision for our High School is to empower each student to pursue excellence, think critically,
                and develop the leadership skills necessary to thrive in college and beyond.
            </p>
            <p>
                Through challenging coursework, meaningful relationships, and opportunities for growth, we prepare
                graduates who are not only college-ready but life-ready — equipped to lead with integrity and
                make lasting contributions to their communities.
            </p>
        </div>
    </div>
    <div className="col-md-6 order-1 order-md-2">
        <img src="images/42.jpg" width="100%" height="auto" loading="lazy" />
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
              <Accordion className="mt-3">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Advanced Literature & Composition</Accordion.Header>
    <Accordion.Body>
      Critical analysis of world literature, advanced essay writing, poetry, and college-prep composition skills.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="1">
    <Accordion.Header>Advanced Mathematics</Accordion.Header>
    <Accordion.Body>
      Algebra II, Pre-Calculus, Calculus, Statistics, and applied mathematics for real-world problem solving.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="2">
    <Accordion.Header>Sciences & Research</Accordion.Header>
    <Accordion.Body>
      Biology, Chemistry, Physics, Environmental Science with laboratory research and independent study projects.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="3">
    <Accordion.Header>World History & Social Studies</Accordion.Header>
    <Accordion.Body>
      Global perspectives, civics, economics, government, and current affairs with debate and discussion.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="4">
    <Accordion.Header>Foreign Languages</Accordion.Header>
    <Accordion.Body>
      Advanced French, Spanish, Latin, and introduction to other world languages with cultural immersion.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="5">
    <Accordion.Header>Visual & Performing Arts</Accordion.Header>
    <Accordion.Body>
      Advanced studio art, digital media, theater production, music theory, and creative portfolio development.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="6">
    <Accordion.Header>Technology & Engineering</Accordion.Header>
    <Accordion.Body>
      Computer programming, robotics, engineering design, digital citizenship, and emerging technologies.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="7">
    <Accordion.Header>College & Career Preparation</Accordion.Header>
    <Accordion.Body>
      SAT/ACT prep, college applications, career exploration, internships, and life skills development.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="8">
    <Accordion.Header>Leadership & Community Service</Accordion.Header>
    <Accordion.Body>
      Student government, community outreach, volunteer coordination, and social impact project leadership.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>

            <div className="col-lg-6">
  <div style={{ border: "4px solid maroon", width: "20%" }}></div>
  <h5 className="pt-2" style={{ color: "maroon" }}>How We Teach</h5>
  <ul className="mt-3">
    <li>Advanced Placement and dual enrollment courses for college readiness.</li>
    <li>Project-based learning with real-world applications and internships.</li>
    <li>Peer mentoring programs and student-led research initiatives.</li>
    <li>Digital portfolios showcasing growth across all four years.</li>
  </ul>
</div>
          </div>

          <div className="mt-4">
  <h5 className="fw-bold mb-3 mt-4 text-center" style={{ color: "maroon" }}>Sample Weekly Snapshot</h5>
  <div className="row g-2">
    <div className="col-sm-6 col-md-4">
      <div className="p-3 border rounded bg-white h-100">
        <strong>Monday</strong>
        <div className="small text-muted">AP courses & advanced seminars</div>
      </div>
    </div>
    <div className="col-sm-6 col-md-4">
      <div className="p-3 border rounded bg-white h-100">
        <strong>Tuesday</strong>
        <div className="small text-muted">Lab research & STEM competitions</div>
      </div>
    </div>
    <div className="col-sm-6 col-md-4">
      <div className="p-3 border rounded bg-white h-100">
        <strong>Wednesday</strong>
        <div className="small text-muted">Internships & career exploration</div>
      </div>
    </div>
    <div className="col-sm-6 col-md-4">
      <div className="p-3 border rounded bg-white h-100">
        <strong>Thursday</strong>
        <div className="small text-muted">Student leadership & mentoring</div>
      </div>
    </div>
    <div className="col-sm-6 col-md-4">
      <div className="p-3 border rounded bg-white h-100">
        <strong>Friday</strong>
        <div className="small text-muted">Senior projects & college prep</div>
      </div>
    </div>
  </div>
</div>

        </div>

        </section>
    </main>
  );
}
