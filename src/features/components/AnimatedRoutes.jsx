import Home from '../pages/Home';
import Tamia from '../pages/Tamia'
import BoysIIMen from '../pages/BoysIIMen';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element ={<Home/>}/>
        <Route path="/boys" element ={<BoysIIMen/>}/>
        <Route path="/tamia" element ={<Tamia/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/contact" element ={<Contact/>}/>
      </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes