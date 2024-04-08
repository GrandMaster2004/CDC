import "./App.css";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
// import Alumni from "./page/Alumni";
// import Team from "./page/Team";
import Navbar from "./components/Navbar";
// import Admin from "./page/Admin";
import Footer from "./components/Footer";
import Top from "./components/Top";

function App() {
  return (
    <>
      <Top />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/alumni" element={<Alumni />} /> */}
        {/* <Route path="/ourteam" element={<Team />} /> */}
        {/* <Route path="/Admin" element={<Admin />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
