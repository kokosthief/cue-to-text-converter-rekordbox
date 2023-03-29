import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Results from './components/Results.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Results />
      <Footer />
    </div>
  )
}

export default App;
