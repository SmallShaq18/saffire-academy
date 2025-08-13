import React, {useEffect} from "react";
import BackButton from "../components/BackButton";

export default function Elementary() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <main>
      <section className="container-fluid elementary-header p-5">
            <div className="bg-image">
                <div className="p-5 dark-overlay d-flex align-items-center justify-content-center">
                    <div>
                        <BackButton />
                        <h1 className="text-white fw-bold text-center">Elementary School</h1>
                        <h1 className="text-white fw-bold text-center">Grades K - 5</h1><br/>
                        <p className="text-white text-center">We believe that young minds are like newly formed galaxies. Full of energy, expansive and curious. Poised to stretch out and make their mark in the universe. At our Elementary school, we help the students discover their brilliance and potential.</p>
                    </div>
                </div>
            </div>
            <h1 className="pt-3 fw-bold text-center" style={{ color: "maroon" }}>About Saffire Academy Elementary</h1>
            <p className="p-3 py-2 text-center responp">Saffire Academy Elementary school is an accredited charter public school committed to impacting the knowledge of Liberal Arts in our students.
            Liberal arts is a comprehensive and interdisciplinary approach to learning that emphasizes a broad-based curriculum, critical thinking, and the development of well-rounded individuals.
            Liberal arts equips students with critical thinking skills, which are valuable in any profession.</p>
        </section>


        <section className="container-fluid elementary-body p-5">

            <div className="row p-5 responrow">
                <div className="col-md-6">
                    <img src="images/14.jpg" width="100%" height="auto" />
                </div>
                <div className="col-md-6 px-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>Grades K - 5</h1>
                    <div className="py-3">
                        <p>We believe that young minds are like newly formed galaxies. Full of energy, expansive and curious. Poised to stretch out and make their mark in the universe. At our Elementary school, we help the students discover their brilliance and potential.</p>
                         <p>
          Our Elementary program covers Grades 1–6, offering a supportive and 
          engaging environment for young learners. We focus on developing strong 
          foundational skills in reading, writing, mathematics, and the sciences, 
          while also fostering creativity, curiosity, and a lifelong love for learning.
        </p>
                    </div>
                </div>
            </div>

            <div className="row p-5 responrow">
                <div className="col-md-6 py-5 order-2 order-md-1">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>DR. KATH GRIORDGANG</h1>
                    <div className="py-3">
                        <p>Elementary K-5 Principal.</p>
                        <p>
          Our Elementary division is led by a dedicated principal who is passionate 
          about guiding students through their formative years. With years of 
          experience in liberal arts education, the principal ensures that each 
          child’s unique abilities are nurtured, preparing them for the challenges 
          and opportunities ahead.
        </p>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src="images/36.jpg" width="100%" height="auto" />
                </div>
            </div>

        </section>

      {/* NEW: Curriculum & Approach Section */}
      <section className="container-fluid elementary-body p-5">
        <div className="row p-5 responrow">
                <div className="col-md-6">
                    <img src="images/17.jpg" width="100%" height="auto" />
                </div>
                <div className="col-md-6 py-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>Elementary Curriculum & Approach</h1>
                    <div className="py-3">
                      <p>
          At Saffire Academy, our Elementary curriculum blends core academic 
          subjects with the richness of the liberal arts. Students explore literature, 
          history, music, art, and philosophy alongside math and science, encouraging 
          both critical thinking and creative expression.  
        </p>
        <p>
          We emphasize small class sizes, project-based learning, and 
          interdisciplinary connections, so children not only gain knowledge 
          but also learn how to question, analyze, and collaborate — skills that 
          will serve them throughout their education and beyond.
        </p>  
                    </div>
                </div>
            </div>
        
        
      </section>
    </main>
  );
}
