import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../ConnectAuth";
import { Button } from "@mui/material";

function Login({ setUser, user }) {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  useEffect(() => {
    const localUser = localStorage.getItem("displayName");
    console.log("localUser from LS", localUser);
    if (localUser) setUser(localUser);
    else setUser(null);
  }, []);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("displayName", result.user.displayName);
        console.log("this is my result", result.user.displayName);
        navigate("/");
      })
      .catch();
  };

  return (
    <>
      <h1>Login</h1>

      <div style={{ textAlign: "center" }}>
        <Button
          onClick={handleGoogleLogin}
          style={{ backgroundColor: "black", color: "white", border: "none" }}
          variant="primary"
          size="lg"
        >
          Sign in with Google
        </Button>
      </div>

      <p>
        Not a user? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
}

export default Login;
