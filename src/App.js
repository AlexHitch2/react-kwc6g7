import React from "react";
import "./style.css";
import Header from "./Header.js";
import Section from "./Section.js"
import Container from "./Container.js"

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <Section/>
        <Container/>
        <Footer/>
      </main>
    </div>
  );
}
