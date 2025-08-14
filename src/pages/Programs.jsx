import React, { useEffect } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function Programs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="container-fluid academics-header p-5">
        <div className="bg-image">
          <div className="p-5 dark-overlay d-flex align-items-center justify-content-center">
            <div>
              <BackButton />
              <h1 className="text-white fw-bold text-center">Our Programs</h1>
              <br />
              <p className="text-white text-center">
                Saffire Academy's liberal arts curriculum inspires students across all age groups to think critically, create freely, and lead confidently.
              </p>
              <p className="text-white text-center">
                Explore how we tailor our approach to suit every stage of a child’s development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid academics-body px-5">
        <div className="row px-5 responrow">
          <div className="col-md-6">
            <img src="images/2.jpg" width="100%" height="auto" alt="Elementary School" loading="lazy" />
          </div>
          <div className="col-md-6 py-5">
            <div style={{ border: "4px solid maroon", width: "20%" }}></div>
            <h1 className="pt-2" style={{ color: "maroon" }}>Elementary School</h1>
            <h2>Grades K - 5</h2>
            <p>
              Our youngest learners build strong foundations in literacy, numeracy, and creative expression. Our holistic approach integrates art, music, and physical education alongside core academics.
            </p>
            <Card className="">
                <Card.Body>
                  <Card.Title>Elementary School</Card.Title>
                  <Card.Text>
                    Focused on foundational literacy, numeracy, and curiosity-driven learning. We use storytelling,
                    creative play, and exploratory projects to build a lifelong love for learning.
                    <br/>
                    <button className="btn btn-danger mt-2"><Link to='/elementary' className="text-white text-decoration-none">View More</Link></button>
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
        </div>

        <div className="row px-5 responrow">
          <div className="col-md-6 py-5 order-2 order-md-1">
            <div style={{ border: "4px solid maroon", width: "20%" }}></div>
            <h1 className="pt-2" style={{ color: "maroon" }}>Middle School</h1>
            <h2>Grades 6 - 8</h2>
            <p>
              Students begin to refine their critical thinking, engage in interdisciplinary learning, and explore subjects like literature, philosophy, world history, and debate.
            </p>
            <Card className="">
                <Card.Body>
                  <Card.Title>Middle School</Card.Title>
                  <Card.Text>
                    Encourages critical thinking and deeper engagement with subjects like literature, history,
                    languages, and the arts. Interdisciplinary projects and discussion-based learning form the core.
                    <br/>
                    <button className="btn btn-danger mt-2"><Link to='/middle' className="text-white text-decoration-none">View More</Link></button>
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <img src="images/11.jpg" width="100%" height="auto" alt="Middle School" loading="lazy" />
          </div>
        </div>

        <div className="row px-5 responrow">
          <div className="col-md-6">
            <img src="images/9.png" width="100%" height="auto" alt="High School" loading="lazy" />
          </div>
          <div className="col-md-6 py-5">
            <div style={{ border: "4px solid maroon", width: "20%" }}></div>
            <h1 className="pt-2" style={{ color: "maroon" }}>High School</h1>
            <h2>Grades 9 - 12</h2>
            <p>
              High schoolers engage in deeper academic inquiry, public speaking, independent research, and creative projects. Students can also join our arts and humanities electives like ethics, journalism, drama, and classical studies.
            </p>
            <Card className="">
                <Card.Body>
                  <Card.Title>High School</Card.Title>
                  <Card.Text>
                    A rigorous liberal arts curriculum preparing students for higher education. Emphasis on research,
                    writing, public speaking, philosophy, and global awareness.
                    <br/>
                    <button className="btn btn-danger mt-2"><Link to='/high' className="text-white text-decoration-none">View More</Link></button>
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
        </div>
      </section>

      {/* Program Philosophy */}
        <section className="container-fluid px-5 my-5 academics-body responrow">
          <h2 className="py-2 text-center" style={{ color: "maroon" }}>Our Program Philosophy</h2>
          <p>
            At Saffire Academy, education is more than test scores — it's about nurturing thinkers, creators, and
            compassionate citizens. Our liberal arts approach is centered around the belief that every child deserves
            an education that builds character, curiosity, and community.
          </p>
          <p>
            We encourage open dialogue, critical inquiry, and artistic exploration across all school levels. Our small
            class sizes and dedicated faculty ensure personalized guidance, while our curriculum integrates literature,
            languages, philosophy, and civic studies in meaningful ways.
          </p>
        </section>

        {/* FAQs Section */}
        <section className="container-fluid px-5 mb-5 academics-body responrow">
          <h2 className="py-2 text-center" style={{ color: "maroon" }}>Frequently Asked Questions</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Is your curriculum accredited?</Accordion.Header>
              <Accordion.Body>
                Yes. Saffire Academy meets all national standards and is accredited by relevant educational bodies. Our
                liberal arts curriculum is designed to exceed expectations and equip students for global opportunities.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Do students take external exams?</Accordion.Header>
              <Accordion.Body>
                Absolutely. While we emphasize holistic learning, students in our high school program are well-prepared
                for WAEC, IGCSE, and other standardized examinations.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What languages are taught?</Accordion.Header>
              <Accordion.Body>
                English is the primary language of instruction. Students also learn French and have access to Latin
                studies in upper classes.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        {/* Call To Action */}
        <section className="text-center py-5 academics-body responrow">
          <h2>Join a community that values depth over speed.</h2>
          <p className="lead">Explore our programs or schedule a visit to see Saffire Academy in action.</p>
          <Button variant="danger" href="/contact">Contact Us</Button>
        </section>
    </main>
  );
}


