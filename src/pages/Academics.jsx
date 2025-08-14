import react, { useEffect } from "react";
import BackButton from "../components/BackButton";

export default function Academics() {

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
                        <h1 className="text-white fw-bold text-center">Academics</h1><br/>
                        <p className="text-white text-center">At Saffire Academy, our students’ success is rooted in the future. Students master academic and real-world skills today, that will be in demand when they graduate.</p>
                        <p className="text-white text-center">Learn more about the school that is setting the standard for education. </p>
                    </div>
                </div>
            </div>
            <p className="p-5 pb-2 text-center responp">Saffire Academy focuses on liberal arts, an approach to learning that emphasizes a broad-based curriculum, critical thinking and the development of well-rounded individuals.</p>
            <p className="px-5 text-center responp">If you want your child to be best prepared for college and jobs of the future, then look no further.</p>
        </section>

        <section className="container-fluid academics-body px-5">

            <div className="row px-5 responrow">
                <div className="col-md-6">
                    <img src="images/2.jpg" width="100%" height="auto" loading="lazy" />
                </div>
                <div className="col-md-6 py-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>ELEMENTARY SCHOOL</h1>
                    <h2>Grades K - 5</h2>
                    <div className="py-3">
                        <p>We believe that young minds are like newly formed galaxies. Full of energy, expansive and curious. Poised to stretch out and make their mark in the universe. At our Elementary school, we help the students discover their brilliance and potential.</p>
                    </div>
                </div>
            </div>

            <div className="row px-5 responrow">
                <div className="col-md-6 py-5 order-2 order-md-1">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>MIDDLE SCHOOL</h1>
                    <h2>Grades 6 - 8</h2>
                    <div className="py-3">
                        <p>Here we envision every student becoming a world-class philosopher, mathematician or natural scientist. We encourage students to become critical thinkers and to explore and experiment with their talents and discover their purpose.</p>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src="images/11.jpg" width="100%" height="auto" loading="lazy" />
                </div>
            </div>

            <div className="row px-5 responrow">
                <div className="col-md-6">
                    <img src="images/8.jpg" width="100%" height="auto" loading="lazy" />
                </div>
                <div className="col-md-6 py-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>HIGH SCHOOL</h1>
                    <h2>Grades 9 - 12</h2>
                    <div className="py-3">
                        <p>Here we envision every student becoming a world-class philosopher, mathematician or natural scientist. We encourage students to become critical thinkers and to explore and experiment with their talents and discover their purpose.</p>
                    </div>
                </div>
            </div>

            <div className="row p-5 responrow">
                <div className="col-md-6 py-5 order-2 order-md-1">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>WHAT IS LIBERAL ARTS?</h1>
                    <div className="py-3">
                        <p>Liberal arts is a comprehensive and interdisciplinary approach to learning that emphasizes a broad-based curriculum, critical thinking, and the development of well-rounded individuals.</p>
                        <p>The concept has roots dating back to classical civilizations of Grece and Rome. This aproach to education was aimed at producing informed and responsible citizens who could engage in public life. During the middle ages, the tradition of liberal arts was preserved and promoted through the monastic and cathedral schools of europe. The curriculum included trivium(grammar, rhetoric and logic) and the quadvirum(arithmetic, geometry, music and astronomy), which forms the basis of a classical education.</p>
                        <p>We provide a curriculum that combines the humanities, sciences, and social sciences.</p>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src="images/20.png" width="100%" height="auto" loading="lazy" />
                </div>
            </div>

            <div className="row px-5 responrow">
                <div className="col-md-6">
                    <img src="images/21.jpg" width="100%" height="auto" loading="lazy" />
                </div>
                <div className="col-md-6 py-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>IMPORTANCE OF LIBERAL ARTS</h1>
                    <div className="py-3">
                        <p>Liberal arts equips students with critical thinking skills, which are valuable in any profession. The ability to expres ideas clearly, in both writing and speaking is a hallmark of liberal arts education.</p>
                        <p>Students gain exposure to variety of subjects making them  well-rounded individuals. Graduates are more inclined to pursue continuous education and self-development.</p>
                        <p>Liberal arts grants students versatility in career opportunities. Beyond career success, liberal arts is seen as a path to personal fulfillment and a life rich in intellectual and cultural experiences.</p>
                    </div>
                </div>
            </div>

        </section>

    </main>
  );
}
