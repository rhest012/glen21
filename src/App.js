import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './features/pages/Home';
import Navbar from './features/components/Navbar';
import BoysIIMen from './features/pages/BoysIIMen';
import About from './features/pages/About'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/boys" element ={<BoysIIMen/>}/>
        <Route path="/about" element ={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
