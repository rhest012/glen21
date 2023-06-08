// React
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './Navbar'
import Nav from './Nav';
import FullNav from './FullNav';

// Pages
import Home from '../pages/Home';
import Tamia from '../pages/Tamia'
import BoysIIMen from '../pages/BoysIIMen';
import HeyNeighbour from '../pages/HeyNeighbour'
import About from '../pages/About';
import Contact from '../pages/Contact'
import Loader from '../pages/Loader';
import PreviousShows from '../pages/PreviousShows';
import PrevShowsSingle from '../pages/PrevShowsSingle';

// Framer Motion
import { motion } from 'framer-motion';
import {AnimatePresence} from 'framer-motion'
import Footer from './Footer';
import { Box } from '@chakra-ui/react';
import useLocoScroll from '../../actions/useLocoScroll';
import CustomCursor from './CustomCursor';


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

    useLocoScroll();
    

  

  return (
    <>
      <CustomCursor/>
      <AnimatePresence mode='wait'>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
        <>
          {!loading && (
        <>
          <Box className="main-container" id="main-container"
            data-scroll-container
          >
          <Nav/>
          <Routes 
            // location={location} key={location.pathname}
          >
              <Route path="/" element ={<Home/>}/>
              <Route path="/boys" element ={<BoysIIMen/>}/>
              <Route path="/hey-neighbour" element ={<HeyNeighbour/>}/>
              <Route path="/tamia" element ={<Tamia/>}/>
              <Route path="/background" element ={<About/>}/>
              <Route path="/previous-shows" element ={<PreviousShows/>}/>
                <Route path="/previous-shows/:id" element ={<PrevShowsSingle/>}/>
              <Route path="/contact" element ={<Contact/>}/>
            </Routes>
            <Footer/>
          </Box>
          </>
          )}
        </>
        )}
      </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes