import { useState } from "react";
import "./App.css";
import Home from "./page/Home";
// import Goal from "./page/Goal";
// import Roadmap from "./components/Roadmap";
// import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Alumni from "./page/Alumni";
import Team from "./page/Team";
import Navbar from "./components/Navbar";
import Admin from "./page/Admin";
// import { IconName } from "react-icons/fa";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/ourteam" element={<Team />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
