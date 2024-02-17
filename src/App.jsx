import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Residences from "./components/Residences";
import Value from "./components/Value";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Residences />

      <Value />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
