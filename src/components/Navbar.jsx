import React from "react";

export default function Navbar({ setView }) {
  return (
    <nav style={{ marginBottom: "10px" }}>
      <button onClick={() => setView("login")}>Login</button>
      <button onClick={() => setView("register")}>Register</button>
    </nav>
  );
}
