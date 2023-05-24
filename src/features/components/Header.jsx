import React from 'react'
import ContactHeader from '../../assets/headers/Contact_Header.jpg'
import Marquee from "react-fast-marquee";
import { Box, Flex, Heading } from '@chakra-ui/react';

// Framer Motion
import { easeIn, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import useFetch from '../../actions/usefetch';

const Header = () => {
    const MotionHeading = motion(Heading);
    const MotionFlex = motion(Flex);

    // Framer Motion
    const pageHeadingVariant = {
        hidden: {
          opacity: 0,
          
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {delay: 1.5, duration: 1, ease: easeIn}
        },
        exit: {
            opacity: 0,
            
            transition: {delay: 1, duration: 1}
          },

    }
    
    const BgVariant = {
    hidden: {
        opacity: 0,
        y: -50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 1.2, ease: easeIn}
    },
    exit: {
        opacity: 0,
        transition: {duration: 2}
        },

    }

    const { data:headers, error, isPending} = useFetch(' http://localhost:8000/headers');
    const location = useLocation();

    let activeHeader;

    if (headers != undefined) {
        activeHeader = headers.find((header) => header.url === location.pathname);
    }

    console.log(headers)
    console.log(activeHeader)
    // console.log(location.pathname)
    
  return (
    <>
       {headers && (
            <>
                <Box borderTop="1px solid #000">
                    <Marquee
                        speed = "100"
                    >
                        <MotionHeading 
                            variant="pageHeading"
                            as="h1"
                            variants={pageHeadingVariant}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            paddingY="0"
                        >
                            {activeHeader.pageName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {activeHeader.pageName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            {activeHeader.pageName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            {activeHeader.pageName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </MotionHeading>
                    </Marquee>
                </Box>
                <MotionFlex 
                    width="100%"
                    height={{ base:"18vh", sm:"20vh", md:"20vh", lg:"31vh", xl:"25vh" }}
                    // backgroundImage= {ContactHeader}
                   
                    backgroundImage= {require(`../../assets/headers/${activeHeader.backgroundImage}`)}
                    backgroundPosition={{ base:"left center", sm:"left center",  md:"left center", lg:"center", xl:"center" }}
                    backgroundSize={{ base:"250%", sm: "220%", md:"cover", lg:"cover", xl:"cover"}}
                    paddingX="2rem"
                    alignItems="center"
                    variants={BgVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                </MotionFlex>
                </>
            )}
    </>
  )
}

export default Header