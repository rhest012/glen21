import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import Chance from "../../assets/background/Glen21_Background1.jpg"
import Druhill from "../../assets/background/Glen21_Background2.jpg"
import ToniBraxton from "../../assets/background/Glen21_Background3.jpg"
import ScorpionKings from "../../assets/background/Glen21_Background4.jpg"
import Bas from "../../assets/background/Glen21_Background5.jpg"
import ScorpionKingsTwo from "../../assets/background/Glen21_Background6.jpg"
import { useInView } from "react-intersection-observer"

// Framer Motion
import { motion } from "framer-motion"

const MissionVission = () => {
    const imageContainerStyling = {
        flexDirection:"column", 
        justifyContent:"space-between", 
        height:"100%",
        alignItems:"center", 
        justifyContent:"center"
    }
    
    const serviceSeperator = {
        borderTop:"1px solid #000",
        display: "flex",
        justifyContent: "flex-end",
        paddingY:"1rem",
    }
    
    const missionDescription = {
        paddingBottom: "1rem",
        textAlign:"right",
        paddingLeft:{ base: "0", sm:"0", md:"0", lg: "20%", xl:"20%"}
    }
    
    const gridStyling = {
        gridTemplateColumns:{ base:"100%", sm:"100%", md:"100%", lg:"50% 50%", xl:"50% 50%"},
        gap: { base: "0", sm: "0", lg:"5", xl:"0" },
        marginY:{ sm: "3rem", md: "3rem", lg:"6rem", xl: "6rem"},
        marginX:"2rem",
        height:"100%",

        _last: {
            marginY:"0"
        }
    }
    
    const portraitImageStyling = {
        height:"750px",
        width: "auto",
        borderRadius:"1rem",
        
    }

    const imageContainer = {
        overflow: "hidden",
        borderRadius:"1rem",
        marginY:"1rem"
    }

    const landscpaeImageStyling = {
        width:"auto",
        borderRadius:"1rem"
    }

    const missionTextContainer = {
        height:"100%",
        display:"flex",
        flexDir:"column",
        paddingX:{ base: "2rem", sm: "2rem", md: "2rem", lg: "6rem" , xl:"6rem"},
        paddingBottom:"1rem"
    }

    const twoColTextStyling = {
        margin:"2rem"
    }


    // Framer Motion 
    const MotionGridItem = motion(GridItem);
    const MotionText = motion(Text);
    const MotionHeading = motion(Heading);
    const MotionBox = motion(Box);
    const MotionImage = motion(Image);
    const { ref, inView } = useInView(); 

    const borderVariants = {
        initial: {
          height: 0,
        },
        visible: {
          height: 40,
          transition: {delay: 1, duration: 1}
        },
        exit: {
            height: 0,
            transition: {delay: 1, duration: 1}
        }
      };

    const seperatorVariants = {
        initial: {
          width: 0,
          opacity: 0
        },
        visible: {
          width: 300,
          opacity: 1,
          transition: { delay: 2, duration: 1}
        },
        exit: {
            height: 0,
            transition: {delay: 1, duration: 1}
        }
      };
      

    // 1 column Text  
    const leftTextVariants = {
        hidden: {
          opacity: 0,
          x: 50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {delay: 2, duration: 1}
        },
        exit: {
          opacity: 0,
          x: 50,
          transition: {delay: 2, duration: 1}
        }
    }

     // 2 column Text no images
    const twoColleftTextVariants = {
        hidden: {
          opacity: 0,
          x: -50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {delay: 2, duration: 1}
        },
        exit: {
          opacity: 0,
          x: 50,
          transition: {delay: 2, duration: 1}
        }
    }

    const TwoColRightTextVariants = {
        hidden: {
          opacity: 0,
          x: 50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {delay: 2, duration: 1}
        },
        exit: {
          opacity: 0,
          x: 50,
          transition: {delay: 2, duration: 1}
        }
    }

    // 2 col 1 image and text with image

    const leftHeadingVariants = {
        hidden: {
          opacity: 0,
          x: -50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {delay: 1, duration: 1}
        },
        exit: {
          opacity: 0,
          x: -50,
          transition: {delay: 1, duration: 1}
        }
    }

    const rightTextVariants = {
        hidden: {
          opacity: 0,
          x: 50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {delay: 1, duration: 1}
        },
        exit: {
          opacity: 0,
          x: 50,
          transition: {delay: 1, duration: 1}
        }
    }

    const portraitImageVariants = {
        hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {delay: 1, duration: 1}
          },
          hover: {
            scale: 1.1, // Increase the scale to zoom in (e.g., 1.2 for 20% zoom)
            transition: {
              duration: 1, // Adjust the duration of the zoom animation
              ease: 'easeInOut', // Choose the desired easing function
            },
          },
          exit: {
              opacity: 0,
              transition: {delay: 1, duration: 1}
          }
    }

    const bottomLandscapeImageVariants = {
        hidden: {
          opacity: 0,
          y: 50,
       
        },
        visible: {
          opacity: 1,
          y: 0,
       
          transition: {delay: 1, duration: 1}
        },
        hover: {
          scale: 1.1, // Increase the scale to zoom in (e.g., 1.2 for 20% zoom)
          transition: {
            duration: 1, // Adjust the duration of the zoom animation
            ease: 'easeInOut', // Choose the desired easing function
          },
        },
        exit: {
            opacity: 0,
            transition: {delay: 1, duration: 1}
        }
    }
      

      
  return (
    <Box marginY="4rem" overflow="hidden" ref={ref}>
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
        <Grid margin="1rem 2rem" gap="1rem" gridTemplateColumns={{ base:"100%", sm:"100%", md:"100%", lg:"50 50", xl:"50% 50%"}}>
            <MotionGridItem
                 variants={twoColleftTextVariants}
                 initial="hidden"
                 animate="visible"
                 exit="exit"
            >
                <Text variant="p" as="p" marginBottom="1rem">
                    Glen21 Entertainment, a prominent African event management agency, excelling in providing comprehensive event services encompassing ideation, production, artist management, and marketing. Boasting extensive industry experience, Glen21 Entertainment has solidified its position as a reliable partner for clients seeking to create remarkable and prosperous events. The agency boasts a team of skilled professionals who are deeply passionate about delivering outstanding events that align with clients' needs and exceed their expectations. From corporate gatherings to music festivals, Glen21 Entertainment possesses the necessary expertise and resources to handle events of any magnitude and intricacy.
                </Text>
            </MotionGridItem>
            <MotionGridItem
                variants={TwoColRightTextVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Text variant="p" as="p">
                    Glen21 Entertainment offers a wide range of services, including event concept development, venue selection, technical production, talent management, marketing, and branding. By closely collaborating with clients and comprehending their objectives, the agency tailors customized solutions that aid in the accomplishment of their goals. With a strong emphasis on innovation and creativity, Glen21 has garnered a reputation for organizing not only successful events but also highly immersive and unforgettable experiences. The agency remains committed to delivering exceptional service and ensuring flawless execution for each and every event.
                </Text>
            </MotionGridItem>
        </Grid>
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

        <Grid sx={gridStyling}>
            <GridItem height="100%">
                <Flex sx={imageContainerStyling} >
                    <Box sx={imageContainer}> 
                        <MotionImage
                            src={ToniBraxton}
                            sx={portraitImageStyling}
                            variants={portraitImageVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            whileHover="hover"
                        />
                    </Box>
                </Flex>
            </GridItem>
            <GridItem width="100%" height="100%" >
                <Flex flexDir="column" alignContent="center" height="100%">
                    <Box>
                        <Box sx={imageContainer}>
                            <MotionImage
                                src={Chance}
                                sx={landscpaeImageStyling}
                                variants={bottomLandscapeImageVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover="hover"
                            />
                        </Box>
                        <Box sx={missionTextContainer}>
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
                        <MotionHeading 
                            variant="h2" 
                            as="h2"
                            variants={leftHeadingVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit" 
                        >
                            Vision
                        </MotionHeading>
                        <MotionBox 
                            sx={serviceSeperator}
                            variants={seperatorVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit" 
                        />
                        <MotionText 
                            sx={missionDescription} 
                            variant="p"
                            variants={rightTextVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            Glen21 is working to be Africa’s trusted, one-stop entertainment solutions agency.
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
                    </Box>
                </Flex>
            </GridItem>
        </Grid>  

        

        <Grid sx={gridStyling}>
            <GridItem width="100%" height="100%" order={{ base: "2", sm: "2", md: "2", lg:"1", xl:"1" }}>
                <Flex flexDir="column" alignContent="center" height="100%">
                    <Box sx={missionTextContainer} order={{ base: "2", sm: "2", md: "2", lg:"1", xl:"1" }} paddingBottom="0">
                        <Grid className="vertical-seperator" gridTemplateColumns = "1fr 1fr">
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
                        <MotionHeading 
                            variant="h2" 
                            as="h2"
                            variants={leftHeadingVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit" 
                        >
                            Mission
                        </MotionHeading>
                        <MotionBox 
                            sx={serviceSeperator}
                            variants={seperatorVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit" 
                        />
                        <MotionText 
                            sx={missionDescription} 
                            variant="p"
                            variants={rightTextVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            Glen21 is recognised as an agency which exceeds it’s clients’ expectations with use of the best in supporting stakeholders, partners and suppliers.
                        </MotionText>
                        <Grid gridTemplateColumns = "1fr 1fr" className="vertical-seperator">
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
                    <Box order={{ base: "1", sm: "1", md: "1", lg:"2", xl:"2" }}>
                        <Box sx={imageContainer}>
                            <MotionImage
                                src={Druhill}
                                sx={landscpaeImageStyling}
                                variants={bottomLandscapeImageVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover="hover"
                            
                            />
                        </Box>
                    </Box>
                </Flex>
            </GridItem>
            <GridItem height="100%" order={{ base: "1", sm: "1", md: "1", lg:"2", xl:"2" }}>
                <Flex sx={imageContainerStyling} flexDir="column" alignItems="center" justifyContent="center">
                    <Box>
                        <Box sx={imageContainer}>
                            <MotionImage
                                src={ScorpionKingsTwo}
                                sx={portraitImageStyling}
                                variants={portraitImageVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover="hover"
                            />
                        </Box>
                    </Box>
                </Flex>
            </GridItem>
        </Grid>

        <Grid sx={gridStyling}>
            <GridItem height="100%">
                <Flex sx={imageContainerStyling} flexDir="column" alignItems="center" justifyContent="center">
                    <Box sx={imageContainer}> 
                        <MotionImage
                            src={Bas}
                            sx={portraitImageStyling}
                            variants={portraitImageVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            whileHover="hover"
                        />
                    </Box>
                </Flex>
            </GridItem>
            <GridItem width="100%" height="100%" >
                <Flex flexDir="column" alignContent="center" height="100%">
                    <Box>
                        <Box sx={imageContainer}>
                            <MotionImage
                                src={ScorpionKings}
                                sx={landscpaeImageStyling}
                                variants={bottomLandscapeImageVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover="hover"
                            />
                        </Box>
                        <Box sx={missionTextContainer}>
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
                        <MotionHeading 
                            variant="h2" 
                            as="h2"
                            variants={leftHeadingVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit" 
                        >
                            Mission
                        </MotionHeading>
                        <MotionBox 
                            sx={serviceSeperator}
                            variants={seperatorVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit" 
                        />
                        <MotionText 
                            sx={missionDescription} 
                            variant="p"
                            variants={rightTextVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            Glen21 is recognised as an agency which exceeds it’s clients’ expectations with use of the best in supporting stakeholders, partners and suppliers.
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
                    </Box>
                </Flex>
            </GridItem>
        </Grid>  
    </Box>
  )
}

export default MissionVission