import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import UserInfo from "./components/UserInfo";


// probar navbar y cambiar vista
/*export default function App() {
  const [view, setView] = useState("login");
  return (
    <div style={{ padding: "20px" }}>
      <h1>probando navbar</h1>
      <Navbar setView={setView} />
      <p>Vista Actual:{view} </p>
    </div>
    
  );
}

*/

export default function App() {
  const [view, setView] = useState("login"); //inicio en login
  const [user, setUser] = useState(null); //estado para guardar datos del usuario

  return (
    <div style={{ padding: "20px" }}>
      <h1>Eventos y Formularios</h1>
      <Navbar setView={setView} />

      {view === "login" && <Login setUser={(u) => { setUser(u); setView("user"); }} />}
      {view === "register" && <Register setUser={(u) => { setUser(u); setView("user"); }} />}
    
      {view === "user" && user && <UserInfo user={user} />}
    </div>
  );
}
