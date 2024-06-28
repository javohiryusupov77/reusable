import { useState } from "react";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./home/home";
import Services from "./Service/Service";
import Project from "./Project/Project";
import logo from "./assets/SELHONO.svg"
function App() {
  const [count, setCount] = useState(false);

  return (
    <>
      <Router>
        <header>
          <img className="logo" src={logo} alt="image" />
          <nav>
            <ul>
              <li>
                <NavLink to={"/Home"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/Service"}>Services</NavLink>
              </li>
              <li>
                <NavLink to={"/Project"}>Project</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="backgroundImage">
          </div>
        </main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/Project" element={<Project />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
