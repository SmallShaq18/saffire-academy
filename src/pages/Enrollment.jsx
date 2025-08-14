import React, {useEffect} from "react";
import BackButton from "../components/BackButton";


export default function Enrollment() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const date = new Date ();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const currentYearNext = date.getFullYear() + 1;

  console.log (`date is ${currentDate}; year is ${currentYear}; next year is ${currentYearNext}; and month is ${currentMonth}`);

  return (
    <main>
      <section className="container-fluid enrollment-header p-5">
            <div className="bg-image">
                <div className="p-5 dark-overlay d-flex align-items-center justify-content-center">
                    <div>
                        <BackButton />
                        <h1 className="text-white fw-bold text-center">Enrollment</h1><br/>
                        <p className="text-white text-center">Saffire Academy is a charter public school committed to improving critical thinking, communication skills and interdisciplinary learning for urban youth in Reude Island. Scroll down for more information.</p>
                    </div>
                </div>
            </div>
            <p className="py-3 fw-bold pb-2 text-center responp">{`Applications are closed for the year ${currentYear} - ${currentYearNext} school year.`}</p>
            <p className="py-3 text-center responp">{`Thank you for your interest in our school. The ${currentYear} - ${currentYearNext} school year sesion aplication has ended. If you received an acceptance, please contact John Doe to turn in the appropriate paperwork at 401-273-9999.`}</p>
        </section>

     

        <section className="container-fluid enrollment-body px-5">

            <div className="row p-3 responrow">
                <div className="col-md-6">
                    <img src="images/14.jpg" width="100%" height="auto" loading="lazy" />
                </div>
                <div className="col-md-6 py-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>REQUIREMENTS FOR ELIGIBILITY</h1>
                    <div className="py-3">
                        <p>If you have any questions or concerns, please contact the main office at 401-273-9999</p>
                        <p>Safire Academy is a charter public school, open to student in grades kindergarten through 12 living in Reude Island.</p>
                        <p>For Kindergarten the lottery determines the students for the upcoming school year. In order to participate in the lottery, an application must be completed online at EnrollSA website</p>
                        <p>Students must be residence of Reude Island and must be 5 years old as of September 1st to enter Kindergarten. Parents must provide birth certificate of the applicant to be considered for enrollment.</p>
                    </div>
                </div>
            </div>

            <div className="row p-3 responrow" style={{ background: "rgb(241, 241, 241)" }}>
                <div className="col-md-6 py-5 order-2 order-md-1">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>ADMISSION TIMELINE</h1>
                    <div className="py-3">
                        <p>We are partnered with Reude Island Department of Education to allow for an easier and more streamlined application process. Applications are open December 1 and will close on March 16 at 5PM</p>
                        <p>The lottery will run on April 3.</p>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src="images/17.jpg" width="100%" height="auto" loading="lazy" />
                </div>
            </div>

            <div className="row p-3 responrow">
                <div className="col-md-6">
                    <img src="images/16.jpg" width="100%" height="auto" loading="lazy" />
                </div>
                <div className="col-md-6 py-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>ACCEPTANCE PROCESS</h1>
                    <div className="py-3">
                        <p>Once a family has been accepted into our academy, we will send an acceptance letter and required admissions forms will be mailed to students immediately following the lottery. Families are required to return completed forms within 15 days to confirm acceptance</p>
                        <p>Along with the completed form, families need to submit the following documents: a copy of birth certificate, current utility bill (dated within 30 days), school record and special education records such as IEP documentation. If families do not provide the required documentation within this time, the space may be given to the next eligible student on the waiting list.</p>
                    </div>
                </div>
            </div>

            <div className="row p-3 responrow" style={{ background: "rgb(241, 241, 241)" }}>
                <div className="col-md-6 py-5 order-2 order-md-1">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>WAITING LIST</h1>
                    <div className="py-3">
                        <p>Students who apply through the lottery are placed on a wait list in the order in which they were drawn during the lottery. Any family that is on the waitlist when the new enrollment year begins is encouraged to reapply. A new lottery is conducted on a yearly basis; it is not carried over from year to year.</p>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src="images/28.jpg" width="100%" height="auto" loading="lazy" />
                </div>
            </div>

        </section>
    </main>
  );
}
