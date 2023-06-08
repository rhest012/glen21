import React from 'react'
import Marquee from "react-fast-marquee";
import { Box, Flex, Heading } from '@chakra-ui/react';
import  useFetchFirebase from '../../actions/useFetchFirebase'

// Framer Motion
import { easeIn, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';


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
          transition: {delay: 1.3, duration: 1, ease: easeIn}
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

    const data = useFetchFirebase('headers');
    const location = useLocation();

    let activeHeader;

    if (data != null) {
        activeHeader = data.find((header) => header.url === location.pathname);   
    }
    
  return (
    <>
       {activeHeader && (
            <>
                <Box borderTop="1px solid #000">
                    <Marquee
                        speed = "100"
                    >
                        <MotionHeading 
                            variant="pageHeading"
                            fontSize= {{ base: "3.81rem", sm: "3.81rem", md: "3.81rem", lg: "4.67rem", xl: "4.67rem" }}
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