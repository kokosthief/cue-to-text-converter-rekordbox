import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Results from "./components/Results.jsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col h-screen App  bg-gradient-to-r from-slate-500 to-yellow-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600  ">
      <Navbar />
      <Header />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
