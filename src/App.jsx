import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Setlist from "./components/Setlist.jsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app ease-in-out dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <Navbar />
      <Header />
      <Setlist />
      <Footer />
    </div>
  );
}

export default App;
