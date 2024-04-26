import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';
import '../src/media-query.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
// import Project from "./components/Project";
import Contact from "./components/Contact/Contact";
import Skill from "./components/Skills/Skills";

function App() {
  return (
    <>
      <div className="d-flex">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/skills" element={<Skill></Skill>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
          {/* <Route path="/project" element={<Project></Project>}></Route> */}
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
