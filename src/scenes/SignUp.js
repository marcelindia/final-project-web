import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../ConnectAuth";

function SignUp({ setUser, user }) {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch();
  };
  return (
    <>
      <h1>Signup</h1>

      <div className="text-center">
        <button
          onClick={handleGoogleLogin}
          style={{ backgroundColor: "black", color: "white", border: "none" }}
        >
          Sign in with Google
        </button>
      </div>
      <p>
        Already a user? <Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default SignUp;
