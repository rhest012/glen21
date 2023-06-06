import React from 'react'
import {useRef, useEffect, useState} from 'react'
import { motion } from 'framer-motion';
import useFetch from '../../actions/usefetch';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Box, Grid, Flex, GridItem, Heading, Text } from '@chakra-ui/react'
// Images
import ToniBraxton from '../../assets/previousShows/Glen21_ToniBraxton.jpg'
import ScorpionKings from "../../assets/previousShows/Glen21_ScorpionKings.png"
import Bas from "../../assets/previousShows/Glen21_BAS.jpg"
import Chance from "../../assets/previousShows/Glen21_Chance.jpg"
import SoulFest from "../../assets/previousShows/Glen21_SoulFest.jpg"
import JCole from "../../assets/previousShows/jCole/JC-2.jpg"
import { Link } from 'react-router-dom';


const PrevShowsGallery = ( {prevShows} ) => {
    
    const imageContainerStyle = {
        justifyContent:"center",
        alignItems:"center",
        marginX:"2rem",
        height:"533px",
        minWidth:"800px",
        // position:"relative",
        borderRadius:"1rem",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        pointerEvents: "none"
    }

    const prevShowsTitleStyle = {
      color:"white", 
      position:"absolute", 
      textAlign:"center",
      width: "100%"
    }
    
    // Fetch Data
   

    // Framer Motion
    const MotionHeading = motion(Heading);
    const MotionText = motion(Text);
    const MotionFlex = motion(Flex);
    const MotionBox = motion(Box);
    const MotionGridItem = motion(GridItem);

    const borderVariants = {
      initial: {
        height: 0,
      },
      visible: {
        height: 40,
        transition: {delay: 1.5, duration: 1}
      },
      exit: {
          height: 0,
          transition: {delay: 1.5, duration: 1}
      }
    };

    const textVariants = {
      hidden: {
        opacity: 0,
       
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 2.5, duration: 1}
      },
      exit: {
        opacity: 0,
  
        transition: {delay: 1.5, duration: 1}
      }
    }

    const imageContainerVariants = {
      hidden: {
        opacity: 0,
       
      },
      visible: {
        opacity: 1,
     
        transition: {delay: 3, duration: 1, staggerChildren: 0.2}
      },
      exit: {
        opacity: 0,
      
        transition: {delay: 2.5, duration: 1}
      }
    }

    const imageChildrenVariants = {
      hidden: {
        opacity: 0,
        x: 50,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {delay: 3, duration: 1}
      },
      exit: {
        opacity: 0,
        x: 50,
        transition: {delay: 3, duration: 1}
      }
    }


    // Gsap
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const [activeImage, setActiveImage] = useState(1)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
          const pin = gsap.fromTo(
            sectionRef.current,
            {
              translateX: 0,
            },
            {
              translateX: getTranslateXValue(),
              ease: "none",
              duration: 2,
              scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 2,
                pin: true,
              },
            }
          );

          function getTranslateXValue() {
            const screenWidth = window.innerWidth;
            const breakpoints = {
              tiny: 500,
              small: 640,
              medium: 768,
              large: 1024,
            };
      
            if (screenWidth < breakpoints.tiny) {
              return '-1270vw';
            } else if (screenWidth < breakpoints.small) {
              return '-920vw';
            } else if (screenWidth < breakpoints.medium) {
              return '-615vw';
            } else if (screenWidth < breakpoints.large) {
              return '-430vw';
            } else {
              return '-280vw';
            }
          }

          return () => {
            pin.kill();
          };
      }, []);


  return (
    <> 
        <>
          <Box>
            <Box marginX="2rem" marginY="4rem">
              <Grid gridTemplateColumns = "1fr 1fr">
              <MotionGridItem 
                borderRight="1px solid #000" 
                // height="50px"
                variants={borderVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                
              />  
                  <GridItem>
                      
                  </GridItem>
                </Grid>
                <MotionText 
                  variant="p" 
                  textAlign="center" 
                  paddingY="1rem"
                  // variants={textVariants}
                  // initial="hidden"
                  // animate="visible"
                  // exit="exit"
                >
                  Over the years, Glen21 has produced events of various magnitudes across the African continent, featuring Grammy Award-winning artists. From conceptualizing to marketing and execution, Glen21 has a proven track record of delivering world-class events that meet and exceed all stakeholders' expectations.
                </MotionText>
                <Grid gridTemplateColumns = "1fr 1fr">
                  <MotionGridItem 
                    borderRight="1px solid #000" 
                    // height="50px"
                    variants={borderVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"    
                  />  
                      <GridItem>
                          
                      </GridItem>
                </Grid>
            </Box>
            <MotionBox 
              className="scroll-section-outer"
              overflow="hidden"  
              
            >
            <Box ref={triggerRef}>
              <MotionBox 
                className="scroll-section-inner"
                // marginY="4rem" 
                height="100vh"
                alignItems="center"
                display="flex"
                position="relative"
                width="700wv"
                ref={sectionRef}
              >
                <Box>
                  <Flex
                    // width="100vw"
                    height="100vh"
                    justifyContent="center"
                    alignItems="center"
                    // variants={imageContainerVariants}
                    // initial="hidden"
                    // animate="visible"
                    // exit="exit"
              
                  >
                    <Link to="/previous-shows/scorpion-kings">
                      <MotionFlex 
                        flexDir="column" 
                        // variants={imageChildrenVariants}
                        // initial="hidden"
                        // animate="visible"
                        // exit="exit"  
                      >
                        <Flex
                          sx={imageContainerStyle}
                          backgroundImage= {ScorpionKings}
                          width="100px"
                        >
                          <Heading variant="h2" sx={prevShowsTitleStyle}>
                            Scorpion Kings
                          </Heading>
                        </Flex>
                        <Flex justifyContent="space-between">
                          <Text margin="1rem 2rem">
                            2022-2023
                          </Text>
                          <Text margin="1rem 2rem">
                            Read More
                          </Text>
                        </Flex>
                      </MotionFlex>
                    </Link>
                    <Link to="/previous-shows/toni-braxton">
                      <MotionFlex 
                        flexDir="column" 
                        // variants={imageChildrenVariants}
                        // initial="hidden"
                        // animate="visible"
                        // exit="exit"  
                      >
                        <Flex
                          sx={imageContainerStyle}
                          backgroundImage= {ToniBraxton}
                          width="100px"
                          index="1"
                          updateActiveImage= {index => setActiveImage}
                        >
                          <Heading variant="h2" sx={prevShowsTitleStyle}>
                            Toni Braxton
                          </Heading>
                        </Flex>
                          <Flex justifyContent="space-between">
                            <Text margin="1rem 2rem">
                              2019
                            </Text>
                            <Text margin="1rem 2rem">
                              Read More
                            </Text>
                          </Flex>
                      </MotionFlex>
                    </Link>
                    <Link to ="/previous-shows/bas">
                      <Flex flexDir="column">
                        <Flex
                          sx={imageContainerStyle}
                          backgroundImage= {Bas}
                          width="100px"
                          index="2"
                          // updateActiveImage= {index => setActiveImage (index + 1)}
                          
                        >
                          <Heading variant="h2" sx={prevShowsTitleStyle}>
                            Bas
                          </Heading>
                        </Flex>
                          <Flex justifyContent="space-between">
                            <Text margin="1rem 2rem">
                              2017
                            </Text>
                            <Text margin="1rem 2rem">
                              Read More
                            </Text>
                          </Flex>
                      </Flex>
                    </Link>
                    <Link to="/previous-shows/chance-the-rapper">
                      <MotionFlex 
                        flexDir="column" 
                        variants={imageChildrenVariants}
                        // initial="hidden"
                        // animate="visible"
                        // exit="exit"  
                      >
                        <Flex
                          sx={imageContainerStyle}
                          backgroundImage= {Chance}
                          width="100px"
                          index="3"
                          // updateActiveImage= {index => setActiveImage (index + 1)}
                        >
                          <Heading variant="h2" sx={prevShowsTitleStyle}>
                            Chance The Rapper
                          </Heading>
                        </Flex>
                          <Flex justifyContent="space-between">
                            <Text margin="1rem 2rem">
                              2018
                            </Text>
                            <Text margin="1rem 2rem">
                              Read More
                            </Text>
                          </Flex>
                      </MotionFlex>
                    </Link>
                    <Link to="/previous-shows/soul-fest">
                      <MotionFlex 
                        flexDir="column" 
                        // variants={imageChildrenVariants}
                        // initial="hidden"
                        // animate="visible"
                        // exit="exit"  
                      >
                        <Flex
                          sx={imageContainerStyle}
                          backgroundImage= {SoulFest}
                          width="100px"
                          index="3"
                          updateActiveImage= {index => setActiveImage (index + 1)}
                        >
                          <Heading variant="h2" sx={prevShowsTitleStyle}>
                            Soul Fest
                          </Heading>
                        </Flex>
                          <Flex justifyContent="space-between">
                            <Text margin="1rem 2rem">
                              2018
                            </Text>
                            <Text margin="1rem 2rem">
                              Read More
                            </Text>
                          </Flex>
                      </MotionFlex>
                    </Link>
                    <Link to="/previous-shows/j-cole">
                      <MotionFlex 
                        flexDir="column" 
                        // variants={imageChildrenVariants}
                        // initial="hidden"
                        // animate="visible"
                        // exit="exit"  
                      >
                        <Flex
                          sx={imageContainerStyle}
                          backgroundImage= {JCole}
                          width="100px"
                          index="4"
                          updateActiveImage= {index => setActiveImage (index + 1)}
                        >
                          <Heading variant="h2" sx={prevShowsTitleStyle}>
                            J Cole
                          </Heading>
                        </Flex>
                          <Flex justifyContent="space-between">
                            <Text margin="1rem 2rem">
                              2016
                            </Text>
                            <Text margin="1rem 2rem">
                              Read More
                            </Text>
                          </Flex>
                      </MotionFlex>
                    </Link>
                  </Flex>
                </Box>
              </MotionBox>
            </Box>
            </MotionBox>
          </Box>
        </>
    </>
  )
}

export default PrevShowsGallery