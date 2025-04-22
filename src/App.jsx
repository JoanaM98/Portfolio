import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import ProjectGallery from "./components/ProjectGallery";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
  <div className="box"> 
   <Nav />
    <div className="content">
      <Routes>
      <Route exact path="/" element={<Hero />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/projects" element={<ProjectGallery />}></Route>
      <Route path="/contacts" element={<Contacts />}> </Route>
      </Routes>
    </div>
    <Footer />
  </div>);
}

export default App;
