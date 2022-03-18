import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Hero from "../components/home/Hero";
import { Button } from "@mui/material";

function Welcome({ user }) {
  console.log(user); //email,displayName, photoURL
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        localStorage.clear();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <h7>
        Welcome,{user.displayName || user.email}
        <Button
          onClick={{ handleLogout }}
          style={{ backgroundColor: "black", color: "white", border: "none" }}
        >
          Logout
        </Button>
      </h7>
      <Hero />
    </>
  );
}

export default Welcome;
