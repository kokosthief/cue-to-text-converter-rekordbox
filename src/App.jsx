import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Results from "./components/Results.jsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App  bg-white dark:bg-[#191919] min-h-screen">
      <Navbar />
      <Header />
      <Results />
    </div>
  );
}

export default App;
