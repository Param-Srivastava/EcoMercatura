import React, { useEffect, useState } from "react";
import "../../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getError } from "../../logic/utils";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const register = (event) => {
    event.preventDefault();
    setProcessing(true);

    // Firebase Register Functionality
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // User Creation Successful
        if (auth) navigate("/");
      })
      .catch((err) => {
        // User Creation Unsuccessful
        setProcessing(false);
        setError(getError(err.message));
      });
  };

  return (
    <div className="login">
      <div className={mounted ? "login__wrapper active" : "login__wrapper"}>
        <Link to="/">
          <img src={'/assets/icons/EcoMercaturalogo-finalbig.png'} alt="EcoMercatura" className="login__logo"  width={240} height={130} />
        </Link>

        <div className="login__container">
          <h2>Sign Up</h2>

          <form>
            {!!error && <p className="login__error">{error}</p>}

            <label htmlFor="login__email">Username</label>
            <input
              type="email"
              name="email"
              id="login__email"
              value={email}
              onChange={(e) => {
                setError(null);
                setEmail(e.target.value);
              }}
            />

            <label htmlFor="login__password">Password</label>
            <input
              type="password"
              name="password"
              id="login__password"
              value={password}
              onChange={(e) => {
                setError(null);
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="login__cn">Company Name</label>
            <input
              type="text"
              name="compn"
              id="login__cn"
            />
            <label htmlFor="login__an">Admin Name</label>
            <input
              type="text"
              name="adminn"
              id="login_an"
            />
            <label htmlFor="Ecc">Eco-friendly Certification?</label>
            <select 
                     name="Ecc"
                     id="Ecc"
                     required
            >
                 <option value="" disabled>Certified?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
            </select>
            <label htmlFor="btype">Business Type</label>
            <select
                        name="btype"
                        id="btype"
                        required
                      >
                        <option value="" disabled>Select Business Type</option>
                        <option value="public ltd.">Public Ltd.</option>
                        <option value="pvt ltd.">Pvt Ltd.</option>
                        <option value="small venture">Small Venture</option>
                      </select>
            <button
              type="submit"
              className="login__signInButton"
              onClick={register}
              disabled={processing}
            >
              Create Account
            </button>
          </form>

          <p>
            By continuing, you agree to EcoMercatura'a Conditions of Use
            and Privacy Notice.
          </p>
        </div>

        <p>
          Already on EcoMercatura? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
