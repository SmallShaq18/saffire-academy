import React, {useEffect} from "react";
import BackButton from "../components/BackButton";

export default function Leadership() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <main>
      <section className="container-fluid leadership-header p-5">
            <div className="bg-image">
                <div className="p-5 dark-overlay d-flex align-items-center justify-content-center">
                    <div>
                      <BackButton />
                        <h1 className="text-white fw-bold text-center">Saffire Academy Leadership Team</h1><br/>
                        <p className="text-white text-center">The school administration at the elementary and middle/high school collaborates with students, parents, faculty and staff to make the Academy mission a unified reality for grades K-12.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className="container-fluid leadership-body p-5">
            <div className="container py-5">
  <h1 className="text-center mb-5" style={{ color: "maroon" }}>Our Leadership</h1>
  <div className="row text-center gy-5">

    {/* Leader 1 */}
    <div className="col-12 col-sm-6 col-md-4 order-1 order-sm-1">
      <img
        src="images/37.jpg"
        alt="Heidie Harriss"
        className="rounded-circle mb-3"
        width="150"
        height="150"
        style={{ objectFit: "cover" }}
      />
      <h3 className="fw-bold">Heidie Harriss</h3>
      <h5 className="fst-italic text-secondary">Special Advisor</h5>
      <p className="small text-muted">
        With over 20 years in educational leadership, Heidie guides strategic planning and fosters academic innovation.
      </p>
    </div>

    {/* Leader 2 */}
    <div className="col-12 col-sm-6 col-md-4 order-3 order-sm-2">
      <img
        src="images/38.jpg"
        alt="Dr. Kath Griordang"
        className="rounded-circle mb-3"
        width="150"
        height="150"
        style={{ objectFit: "cover" }}
      />
      <h3 className="fw-bold">Dr. Kath Griordang</h3>
      <h5 className="fst-italic text-secondary">Elementary School Principal</h5>
      <p className="small text-muted">
        Dr. Griordang leads with a passion for early childhood education, ensuring students build strong academic foundations.
      </p>
    </div>

    {/* Leader 3 */}
    <div className="col-12 col-sm-6 col-md-4 order-2 order-sm-3">
      <img
        src="images/39.jpg"
        alt="Mrs. Melissa D'Armadilo"
        className="rounded-circle mb-3"
        width="150"
        height="150"
        style={{ objectFit: "cover" }}
      />
      <h3 className="fw-bold">Mrs. Melissa D'Armadilo</h3>
      <h5 className="fst-italic text-secondary">Elementary School Assistant Principal</h5>
      <p className="small text-muted">
        Melissa supports our elementary programs with expertise in curriculum development and student engagement.
      </p>
    </div>

    {/* Leader 4 */}
    <div className="col-12 col-sm-6 col-md-4 order-4 order-sm-4">
      <img
        src="images/41.jpg"
        alt="Mr. Pete Shanghail"
        className="rounded-circle mb-3"
        width="150"
        height="150"
        style={{ objectFit: "cover" }}
      />
      <h3 className="fw-bold">Mr. Pete Shanghail</h3>
      <h5 className="fst-italic text-secondary">Middle/High School Principal</h5>
      <p className="small text-muted">
        Pete focuses on fostering leadership, academic rigor, and real-world readiness among our older students.
      </p>
    </div>

    {/* Leader 5 */}
    <div className="col-12 col-sm-6 col-md-4 order-5 order-sm-5">
      <img
        src="images/40.jpg"
        alt="Mrs. Betty Aguair"
        className="rounded-circle mb-3"
        width="150"
        height="150"
        style={{ objectFit: "cover" }}
      />
      <h3 className="fw-bold">Mrs. Betty Aguair</h3>
      <h5 className="fst-italic text-secondary">Middle/High School Assistant Principal</h5>
      <p className="small text-muted">
        Betty works closely with staff and students to create an inclusive, supportive, and inspiring school environment.
      </p>
    </div>

  </div>
</div>


            
        </section>
    </main>
  );
}
