import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Features from "./Components/Features";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen relative font-Bazinga w-full bg-primary">
      <Header />
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
