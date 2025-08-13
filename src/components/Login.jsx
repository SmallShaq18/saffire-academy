import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <main>
      <section className="container-fluid reg p-1 mt-5">

            <div className="d-flex align-items-center justify-content-center">
                <form>
                    <h2 className="fw-bold pt-5">Login Here:</h2>
                    <br/>

                    <label className="d-flex input py-2">
                        <i className="fa fa-envelope-o px-2"></i>
                        <input type="email" name="email" placeholder="Enter your email" required />
                    </label>

                    <label className="d-flex input py-2">
                        <i className="fa fa-lock px-2"></i>
                        <input type="password" name="password" placeholder="Enter your password" id="password1" required />
                        <i className="password-toggle fa fa-eye" id="togglePassword1" onClick={() => togglePassword(1)} style={{ fontSize: "22px", cursor: "pointer" }}></i>
                    </label>

                    <label className="d-flex">
                        <input type="checkbox" name="agreement" value="value" />
                        <p className="pt-3 px-2 fw-bold" style={{ fontSize: "12px" }}>Remember me</p>
                        <Link className="pt-3 px-2 fw-bold text-decoration-none text-end" to="/" style={{ fontSize: "12px" }}>Forgot password?</Link>
                    </label>
                    <br/>

                    <button className="fw-bold p-2" target="#">Login Now</button>
                    <br/>
                    <p style={{ fontSize: "12px" }} className="fw-bold text-center pt-3">Don't have an account? <Link to="/register">Signup now</Link></p>

                </form>
            </div>

        </section>
    </main>
  );
}
