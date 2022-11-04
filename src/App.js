import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./section/home/Home";
import Footer from "./components/footer/Footer";
import "./app.scss";

const App = () => {
  return (
    <div id="home" style={{ paddingTop: "115px" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
