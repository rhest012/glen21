import React from 'react'
import { Box, Flex, Grid, GridItem, HStack, Heading, Image, Input, Stack, Text, Textarea, Link } from '@chakra-ui/react'
import ContactImage from '../../assets/Crowd_2.jpg'
import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

import Marquee from "react-fast-marquee";

// Framer Motion
import { motion } from 'framer-motion';
import Header from '../components/Header'

const Contact = () => {
    const inputStyle = {
        border:"none",
        borderRadius:"0",
        borderBottom:"1px solid #000",
        fontSize: "0.85rem",
        fontFamily: "Inter, Arial, 'Helvetica Neue', Helvetica, sans-serif",

        _placeholder:{
            color: "#000",
        }
    }

    const MotionText = motion(Text);
    const MotionHeading = motion(Heading);
    const MotionFlex = motion(Flex);
    const MotionImage = motion(Image);
    const MotionBox = motion(Box);
    const MotionTextarea = motion(Textarea);
    const MotionInput = motion(Input);


    const headingVariants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {delay: 2.5, duration: 1}
    },
    exit: {
        opacity: 0,
        x: -50,
        transition: {delay: 2.5, duration: 1}
    }
    }

    const textVariant = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {delay: 2.5, duration: 1}
    },
    exit: {
        opacity: 0,
        x: 50,
        transition: {delay: 2.5, duration: 1}
    }
    }

      const imageVariants = {
        hidden: {
          opacity: 0,
          
        },
        visible: {
          opacity: 1,
          transition: {delay: 2, duration: 1}
        },
        exit: {
            opacity: 0,
            transition: {delay: 2, duration: 1}
        },
        hover: {
            scale: 1.1, // Increase the scale to zoom in (e.g., 1.2 for 20% zoom)
            transition: {
              duration: 1, // Adjust the duration of the zoom animation
              ease: 'easeInOut', // Choose the desired easing function
            },
          },

      }
    
      const borderBottomVariants = {
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {delay: 2, duration: 1}
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {delay: 2, duration: 1}
        }
      }
      
    
      const borderTopVariants = {
        hidden: {
          opacity: 0,
          y: -50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {delay: 2, duration: 1}
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {delay: 2, duration: 1}
        }
      }


  return (
   <Box data-scroll-section>
    <Header/>
    <Grid gridTemplateColumns={{ base:"100%", sm:"100%", md:"50% 50%", lg:"50 50", xl:"50% 50%"}} width="100%" > 
        <GridItem>
            <Flex flexDirection="column" justifyContent="center" width="100%">
                <MotionBox
                    zIndex="1"
                    height="50px"
                    borderRight="1px solid #000"
                    variants={borderTopVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                />
                <Box overflow="hidden" borderRadius="1rem" marginX="2rem">
                    <MotionImage
                        src={ContactImage}
                        margin="auto"
                        width="100%"
                        borderRadius="1rem"
                        variants={imageVariants}
                        initial="hidden"
                        whileHover="hover"
                        animate="visible"
                        exit="exit"
                    />
                </Box>
                    <MotionBox
                        zIndex="1"
                        height="50px"
                        borderRight="1px solid #000"
                        variants={borderBottomVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />
            </Flex>
        </GridItem>
        <GridItem paddingX="3rem" width="100%">
            <Flex 
                flexDirection="column" 
                height="100%" 
                justifyContent="center"  
                gap="6rem"
            >
                <Stack>
                    <MotionHeading 
                        variation="h3" 
                        textTransform="uppercase" 
                        textAlign="left"
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        Get In Touch
                    </MotionHeading>
                    <MotionText 
                        variant="p" 
                        textAlign="right"
                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        If you are looking for an agency that prides itself on being an industry leader when it comes to everything events, feel free to get in touch with the Glen21 team by dropping us a mail.
                    </MotionText>
                </Stack>
                
                <Flex flexDirection={{ base:"column", sm:"column", md:"column", lg:"row", xl:"row"}} gap={{base:"1rem", sm:"1rem", md:"1rem", lg:"1rem"}} justifyContent={{ lg:"space-between", xl:"space-between"}}>
                    <MotionText 
                        variant="p"
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        textAlign={{ base:"center", sm:"center", md:"center", lg:"left", xl:"left"}}
                    >
                        Building 2, 4 Karen Str, Bryanston | +27878059023
                    </MotionText>
                    <MotionFlex 
                        gap="2rem" 
                        justifyContent={{ base:"space-between", sm:"space-between", md:"space-between", lg:"flex-end", xl:"flex-end"}}
                        paddingTop={{base:"1rem", sm:"1rem", md:"1rem", lg:"0", xl:"0" }}
                        paddingBottom={{ base:"1rem", sm:"1.5rem", md:"1.5rem", lg:"0", xl:"0" }}
                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit">
                        <Link href="https://www.facebook.com/glen21ent/" isExternal>
                            <FaFacebookF fontSize="1.25rem"/>  
                        </Link>
                        <Link href="https://www.instagram.com/glen21ent" isExternal>
                            <FaInstagram fontSize="1.25rem"/>  
                        </Link>
                        <Link isExternal href="https://www.twitter.com/glen21ent/">
                            <FaTwitter fontSize="1.25rem"/>
                        </Link>
                        <Link isExternal href="mailto:info@glen21.com">
                            <FaEnvelope fontSize="1.25rem"/>
                        </Link>
                    </MotionFlex>
                </Flex>
            </Flex>
        </GridItem>
    </Grid>
   </Box>
  )
}

export default Contact