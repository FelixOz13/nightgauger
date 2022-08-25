import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import Carousel from './components/Carousel';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Carousel/>
    </Router>
  );
}

export default App
