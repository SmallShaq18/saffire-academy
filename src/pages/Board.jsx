import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function Board() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <main>
      <section className="container-fluid board-header p-5">
            <div className="bg-image">
                <div className="p-5 dark-overlay d-flex align-items-center justify-content-center">
                    <div>
                        <BackButton />
                        <h1 className="text-white fw-bold text-center">Board of Directors</h1><br/>
                        <p className="text-white text-center">The Saffire Academy board of directors is the governing body. It is charged with making all top level decisions for the school. We are currently recruiting so if you are interested in serving the academy as a board member, kindly email John Doe at  <i>jodoe@safacad.edu</i></p>
                    </div>
                </div>
            </div>
        </section>


        <section className="container-fluid board-body">
            <div className="row">
        <div className="col-md-4 p-3 text-center">
            <h3 className="fw-bold">Kelin Porvas</h3>
            <p className="fst-italic text-secondary">President</p>
            <p>
                Kelin brings over two decades of experience in educational leadership,
                guiding policy and strategic vision for the academy.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center">
            <h3 className="fw-bold">Rolly Bicker</h3>
            <p className="fst-italic text-secondary">Vice President I</p>
            <p>
                Rolly supports operational oversight and community engagement,
                ensuring the academy remains a strong educational partner.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center">
            <h3 className="fw-bold">Mel Husband</h3>
            <p className="fst-italic text-secondary">Vice President II</p>
            <p>
                Mel focuses on innovation and curriculum advancement, driving
                programs that prepare students for the future.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center">
            <h3 className="fw-bold">Joseph Pete</h3>
            <p className="fst-italic text-secondary">Board Member</p>
            <p>
                Joseph contributes expertise in governance and organizational
                development to support the academy’s long-term goals.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center">
            <h3 className="fw-bold">Cathy Cummings</h3>
            <p className="fst-italic text-secondary">Board Member</p>
            <p>
                Cathy is passionate about fostering inclusive learning environments
                and empowering both students and staff.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center">
            <h3 className="fw-bold">Jose Borgen</h3>
            <p className="fst-italic text-secondary">Board Member</p>
            <p>
                Jose brings financial and strategic planning expertise to ensure
                the academy’s sustainability and growth.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center">
            <h3 className="fw-bold">Lateefah Key</h3>
            <p className="fst-italic text-secondary">Board Member</p>
            <p>
                Lateefah advocates for student well-being and community involvement,
                strengthening ties between the academy and families.
            </p>
        </div>
    </div>
            

            <div className="row p-5 responrow">
                <div className="col-md-6">
                    <img src="images/32.jpg" width="100%" height="auto" />
                </div>
                <div className="col-md-6 px-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2">MEETING SCHEDULE</h1>
                    <div className="py-3">
                        <p>Board meetings begin at 5:00 pm and are held in the High School Cafteria unless otherwise specified. The meetings are open to public. Dates and times are subject to change, but wil be posted. If you are unable to attend, but would like to call in and participate via conference call, please contact Linda Mousseau at 401.273.9999.</p>
                        
                    </div>
                </div>
            </div>

            

        </section>
    </main>
  );
}
