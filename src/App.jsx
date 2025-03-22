import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Internship from "./components/Internship.jsx";
import Certificates from "./components/Certificates.jsx";


const App = () => {
  return (
    <>
      <Header />
      <main>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="internship"><Internship /></div>
        <div id="projects"><Projects /></div>
        <div id="certificates"><Certificates/></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </>
  );
};

export default App;
