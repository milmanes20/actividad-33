import React from "react";

export default function UserInfo({ user }) {
  return (
    <div id="user-info">
      <h2>Información del Usuario</h2>
      {user.name && <p><b>Nombre:</b> {user.name}</p>}
      <p><b>Email:</b> {user.email}</p>
      <p><b>Password:</b> {user.password}</p>
    </div>
  );
}
