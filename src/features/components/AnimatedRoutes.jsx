// React
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './Navbar'
import Nav from './Nav';

// Pages
import Home from '../pages/Home';
import Tamia from '../pages/Tamia'
import BoysIIMen from '../pages/BoysIIMen';
import About from '../pages/About';
import Contact from '../pages/Contact'
import Loader from '../pages/Loader';


// Framer Motion
import { motion } from 'framer-motion';
import {AnimatePresence} from 'framer-motion'
import PreviousShows from '../pages/PreviousShows';
import Footer from './Footer';


const AnimatedRoutes = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true); // Reset loading state on location change
      // Add any additional loading logic if needed
    }, [location]);

    useEffect(() => {
      loading
        ? document.querySelector("body").classList.add("loading")
        : document.querySelector("body").classList.remove("loading");
    }, [loading]);
  
  return (
    <AnimatePresence mode='wait'>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
      <>
        {!loading && (
       <>
       <Nav/>
       <Routes location={location} key={location.pathname}>
          <Route path="/" element ={<Home/>}/>
          <Route path="/boys" element ={<BoysIIMen/>}/>
          <Route path="/tamia" element ={<Tamia/>}/>
          <Route path="/background" element ={<About/>}/>
          <Route path="/previous-shows" element ={<PreviousShows/>}/>

          <Route path="/contact" element ={<Contact/>}/>
        </Routes>
        <Footer/>
        </>
        )}
      </>
      )}
    </AnimatePresence>
  )
}

export default AnimatedRoutes