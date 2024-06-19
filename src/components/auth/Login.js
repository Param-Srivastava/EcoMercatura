import React, { useEffect, useState } from "react";
import "../../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getError } from "../../logic/utils";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const signIn = (event) => {
    setProcessing(true);
    event.preventDefault();

    // Firebase Sign In Functionality
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // User Login Successful
        if (auth) navigate("/");
      })
      .catch((err) => {
        // User Login Unsuccessful
        setProcessing(false);
        setError(getError(err.message));
      });
  };

  return (
    <div className="login">
      <div className={mounted ? "login__wrapper active" : "login__wrapper"}>
        <Link to="/">
          <img src={'./assets/icons/EcoMercaturalogo-finalbig.png'} alt="EcoMercatura" className="login__logo" width={240} height={130} />
        </Link>

        <div className="login__container">
          <h2>Sign In</h2>

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
            <button
              type="submit"
              className="login__signInButton"
              onClick={signIn}
              disabled={processing}
            >
              Sign In
            </button>
          </form>

          <p>
            By continuing, you agree to EcoMercatura's Conditions of Use
            and Privacy Notice.
          </p>
        </div>

        <p>
          New to EcoMercatura? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
