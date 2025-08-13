import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="container-fluid reg p-1 mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <form>
            <h2 className="fw-bold pt-5">Register Here:</h2>
            <br />

            <label className="d-flex input py-2">
              <i className="fa fa-user px-2"></i>
              <input type="text" name="name" placeholder="Enter your name" required />
            </label>

            <label className="d-flex input py-2">
              <i className="fa fa-envelope-o px-2"></i>
              <input type="email" name="email" placeholder="Enter your email" required />
            </label>

            <label className="d-flex input py-2 align-items-center">
              <i className="fa fa-lock px-2"></i>
              <input
                type={showPassword1 ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                required
              />
              <i
                className={`password-toggle fa ${showPassword1 ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword1(!showPassword1)}
                style={{ fontSize: "22px", cursor: "pointer", marginLeft: 'auto' }}
              ></i>
            </label>

            <label className="d-flex input py-2 align-items-center">
              <i className="fa fa-lock px-2"></i>
              <input
                type={showPassword2 ? "text" : "password"}
                name="confirm-password"
                placeholder="Confirm a password"
                required
              />
              <i
                className={`password-toggle fa ${showPassword2 ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword2(!showPassword2)}
                style={{ fontSize: "22px", cursor: "pointer", marginLeft: 'auto' }}
              ></i>
            </label>

            <label className="d-flex">
              <input type="checkbox" name="agreement" />
              <p className="pt-3 px-2 fw-bold" style={{ fontSize: "12px" }}>
                I accept all <Link to="#" className="text-dark">terms</Link> and <Link to="#" className="text-dark">conditions</Link>.
              </p>
            </label>
            <br />

            <button className="fw-bold p-2" type="submit">Register Now</button>
            <br />
            <p style={{ fontSize: "12px" }} className="fw-bold text-center pt-3">
              Already have an account? <Link to="/login">Login now</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}



/*import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Register() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <main>
      <section className="container-fluid reg p-1 mt-5">

            <div className="d-flex align-items-center justify-content-center">
                <form>
                    <h2 className="fw-bold pt-5">Register Here:</h2>
                    <br/>

                    <label className="d-flex input py-2">
                        <i className="fa fa-user px-2"></i>
                        <input type="name" name="name" placeholder="Enter your name" required />
                    </label>

                    <label className="d-flex input py-2">
                        <i className="fa fa-envelope-o px-2"></i>
                        <input type="email" name="email" placeholder="Enter your email" required />
                    </label>

                    <label className="d-flex input py-2">
                        <i className="fa fa-lock px-2"></i>
                        <input type="password" name="password" placeholder="Create a password" id="password1" required />
                        <i className="password-toggle fa fa-eye" id="togglePassword1" onClick={() => togglePassword(1)} style={{ fontSize: "22px", cursor: "pointer" }}></i>
                    </label>

                    <label className="d-flex input py-2">
                        <i className="fa fa-lock px-2"></i>
                        <input type="password" name="password" placeholder="Confirm a password" id="password2" required />
                        <i className="password-toggle fa fa-eye" id="togglePassword2" onClick={() => togglePassword(2)} style={{ fontSize: "22px", cursor: "pointer" }}></i>
                    </label>

                    <label className="d-flex">
                        <input type="checkbox" name="agreement" value="value" />
                        <p className="pt-3 px-2 fw-bold" style={{ fontSize: "12px" }}>I accept all <Link to="#" className="text-dark">terms</Link> and <Link to="#" className="text-dark">conditions</Link>.</p>
                    </label>
                    <br/>

                    <button className="fw-bold p-2" target="#">Register Now</button>
                    <br/>
                    <p style={{ fontSize: "12px" }} className="fw-bold text-center pt-3">Already have an account? <Link to="/login">Login now</Link></p>

                </form>
            </div>

        </section>
    </main>
  );
}*/
