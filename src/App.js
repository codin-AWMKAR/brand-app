import React from "react";
import "./index.css";
import Home from "./Routes/Home";
import Function from "./Routes/Function";
import Operations from "./Routes/Operations";
import Contact from "./Routes/Contact";
import About from "./Routes/About";




function App() {
  return (
    <>
   
      <div className="container">
        <section id="home">
          <Home/>
        </section>
        <section id="about">
         <About/>
        </section>
        <section id="functions">
          <Function/>
        </section>
        <section id="operations">
          <Operations/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </div>
    </>
  );
}

export default App;
