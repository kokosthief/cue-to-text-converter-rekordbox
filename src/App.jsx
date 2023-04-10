import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Results from "./components/Results.jsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <Navbar />
      <Header />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
