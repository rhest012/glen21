import React from 'react'
import Marquee from "react-fast-marquee";
import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import Header from "../../assets/headers/Previous_Shows_Header.jpg"

// Framer Motion
import { easeIn, motion } from 'framer-motion';
import useFetch from '../../actions/usefetch';
import { useParams } from 'react-router-dom';

const JCole = () => {
    const missionDescription = {
        marginBottom: "0",
    }

    const constGridStyling = {
        gridTemplateColumns:"repeat(2, 1fr)",
        marginY:"4rem",
        marginX:"2rem",
        height:"100%",
    
        _last: {
            marginY:"0"
        }
    }

    const serviceSeperator = {
        borderTop:"1px solid #000",
        marginLeft:"30%",
        paddingY:"1rem",
    }

    const portraitImageStyling = {
        height:"750px",
        width:"500px",
        borderRadius:"1rem"
    }
    
    const landscpaeImageStyling = {
        width:"700px",
        height:"467px",
        borderRadius:"1rem"
    }

    const imageContainerStyling = {
        flexDirection:"column", 
        justifyContent:"space-between", 
        height:"100%",
    }

    const singleImageGalleryStyling = {
        height:"300px",
        borderRadius:"1rem",
        marginX:"1rem"
    }


    // Framer Motion
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

    const { data:prevShows, error, isPending} = useFetch(' http://localhost:8000/prevShows');

  return (
    <>
        { prevShows && (
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
                            J Cole&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            J Cole&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            J Cole&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            J Cole&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </MotionHeading>
                    </Marquee>
                </Box>
                <MotionFlex 
                    width="100%"
                    height={{ base:"18vh", sm:"20vh", md:"20vh", lg:"31vh", xl:"25vh" }}
                    // backgroundImage= {ContactHeader}
                    backgroundImage= {Header}
                    backgroundPosition={{ base:"left center", sm:"left center",  md:"left center", lg:"center", xl:"center" }}
                    backgroundSize={{ base:"250%", sm: "220%", md:"cover", lg:"cover", xl:"cover"}}
                    paddingX="2rem"
                    alignItems="center"
                    variants={BgVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                />
                <Grid sx={constGridStyling}>
                <GridItem width="100%" height="100%" >
                    <Flex flexDir="column" justifyContent="space-between" alignContent="center" height="100%">
                        <Box height="100%" display="flex" flexDir="column" justifyContent="space-between" paddingX="6rem" paddingBottom="1rem">
                            <Grid gridTemplateColumns="50% 50%" >
                                <GridItem borderRight="1px solid #000" height="50px">
                                    
                                </GridItem>
                                <GridItem>
                                    
                                </GridItem>
                            </Grid>
                            <Text sx={missionDescription} variant="p">
                                A marriage of brands and collaboration from the country. The Dome in Johannesburg Hosted  Castle Lite Unlock 2016 which was met with an eager crowd selling out the event in only a few (hours). The campaign was met with Glen21’s collaboration in introducing an all-round production from acquiring the artist, local talent management and the execution of talent management.
                            </Text>
                            <Grid gridTemplateColumns="50% 50%" >
                                <GridItem borderRight="1px solid #000" height="50px">
                                </GridItem>
                                <GridItem>
                                    
                                </GridItem>
                            </Grid>
                        </Box>
                        <Flex justifyContent="center" width="100%" height="100%">
                            <Image
                                 src={require("../../assets/previousShows/jCole/JC-5.jpg")}
                                sx={landscpaeImageStyling}
                            />
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem height="100%">
                    <Flex sx={imageContainerStyling} flexDir="column" alignItems="flex-end" justifyContent="center">
                        <Image
                            src={require("../../assets/previousShows/jCole/JC-Portrait.jpg")}
                            sx={portraitImageStyling}
                        />
                    </Flex>
                </GridItem>
            </Grid>
            <Flex marginX="2rem" marginBottom="2rem">
                <Marquee
                    speed = "100"
                >
                    <Image
                        src={require("../../assets/previousShows/jCole/JC-1.jpg")}
                        sx={singleImageGalleryStyling}
                    />
                    <Image
                        src={require("../../assets/previousShows/jCole/JC-2.jpg")}
                        sx={singleImageGalleryStyling}
                    />
                    <Image
                        src={require("../../assets/previousShows/jCole/JC-3.jpg")}
                        sx={singleImageGalleryStyling}
                    />
                    <Image
                        src={require("../../assets/previousShows/jCole/JC-4.jpg")}
                        sx={singleImageGalleryStyling}
                    />
                   
                </Marquee>
            </Flex>
            </>
        )}
    </>
  )
}

export default JCole