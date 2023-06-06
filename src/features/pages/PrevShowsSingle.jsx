import React from 'react'
import Marquee from "react-fast-marquee";
import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import Header from "../../assets/headers/Previous_Shows_Header.jpg"
import { useParams } from 'react-router-dom';
import { useFetchFirebase } from '../../actions/useFetchFirebase';

// Framer Motion
import { easeIn, motion } from 'framer-motion';
import { useInView } from "react-intersection-observer"
import useFetch from '../../actions/usefetch';



const PrevShowsSingle = () => {
    const missionDescription = {
        marginBottom: "0",
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

    const serviceSeperator = {
        borderTop:"1px solid #000",
        marginLeft:"30%",
        paddingY:"1rem",
    }

    const portraitImageStyling = {
        height:"750px",
        width: "auto",
        borderRadius:"1rem",
    }
    
    const landscpaeImageStyling = {
        width:"auto",
        borderRadius:"1rem"
    }

    const imageContainerStyling = {
        flexDirection:"column", 
        justifyContent:"space-between", 
        height:"100%",
        borderRadius: "1rem",
        overflow: "hidden",
        marginY: "1rem"
    }

    const singleImageGalleryStyling = {
        height:"300px",
        borderRadius:"1rem",
        marginX:"1rem"
    }


    // Framer Motion
    const MotionHeading = motion(Heading);
    const MotionGridItem = motion(GridItem);
    const MotionText = motion(Text);
    const MotionFlex = motion(Flex);
    const MotionImage = motion(Image);
    const { ref, inView } = useInView();

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

    const leftImageVariants = {
        hidden: {
          opacity: 0,
          y: 50,
       
        },
        visible: {
          opacity: 1,
          y: 0,
       
          transition: {delay: 2, duration: 1}
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
            transition: {delay: 2, duration: 1}
        }
    }

    const rightImageVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {delay: 2, duration: 1}
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
            transition: {delay: 2, duration: 1}
        }
    }

    const leftTextVariants = {
        hidden: {
          opacity: 0,
          y: -50,
        
        },
        visible: {
          opacity: 1,
          y: 0,
      
          transition: {delay: 2, duration: 1}
        },
        hover: {
          scale: 1.2, // Increase the scale to zoom in (e.g., 1.2 for 20% zoom)
          transition: {
            duration: 0.3, // Adjust the duration of the zoom animation
            ease: 'easeInOut', // Choose the desired easing function
          },
        },
    }

    const borderVariants = {
        initial: {
          height: 0,
        },
        visible: {
          height: 50,
          transition: {delay: 2, duration: 1}
        },
        exit: {
            height: 0,
            transition: {delay: 2, duration: 1}
        }
      };

      const ImageCarouselVariants = {
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
        }
    }
    

    


    // Active page setup
    const { id } = useParams()
    const { data:prevShows, error, isPending} = useFetch(' http://localhost:8000/prevShows');
    const data = useFetchFirebase('prevShows');
    console.log(data)
    let activeShow = ""

    if (data != undefined) {
        activeShow = data.find(item => item.id == id)
    }

   

    

  return (
    <>
        { activeShow && (
            <>
                <Box data-scroll-container>

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
                                {activeShow.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {activeShow.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                {activeShow.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                {activeShow.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    <Grid sx={gridStyling}>
                    <GridItem width="100%" height="100%" >
                        <Flex flexDir="column" justifyContent="space-between" alignContent="center" height="100%">
                            <Box height="100%" display="flex" flexDir="column" justifyContent="space-between" paddingX={{ base: "2rem", sm: "2rem", md: "2rem", lg: "6rem" , xl:"6rem" }} paddingBottom="1rem">
                                <Grid gridTemplateColumns="50% 50%" >
                                    <MotionGridItem 
                                        borderRight="1px solid #000" 
                                        // height="50px"
                                        variants={borderVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        paddingY="0"

                                    />
                                        
                                
                                    <GridItem>
                                        
                                    </GridItem>
                                </Grid>
                                <MotionText 
                                    sx={missionDescription} 
                                    variant="p"
                                    variants={leftTextVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {activeShow.description}
                                </MotionText>
                                <Grid gridTemplateColumns="50% 50%" >
                                    <MotionGridItem 
                                        borderRight="1px solid #000" 
                                        // height="50px"
                                        variants={borderVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        paddingY="0"

                                    />
                            
                                    <GridItem>
                                        
                                    </GridItem>
                                </Grid>
                            </Box>
                            <Box justifyContent="center" width="100%" height="95%" overflow="hidden" borderRadius="1rem">
                                <MotionImage
                                    src={require(`../../assets/previousShows/${activeShow.folder}/${activeShow.galleryImageOne}`)}
                                    sx={landscpaeImageStyling}
                                    variants={leftImageVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    whileHover="hover"
                                />
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem height="100%">
                        <Flex sx={imageContainerStyling} flexDir="column" alignItems="flex-end" justifyContent="center">
                            <Flex justifyContent="center" overflow="hidden" borderRadius="1rem">
                                <MotionImage
                                    // src={activeShow.portraitImage}
                                    src={require(`../../assets/previousShows/${activeShow.folder}/${activeShow.portraitImage}`)}
                                    sx={portraitImageStyling}
                                    variants={rightImageVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    whileHover="hover"
                                />
                            </Flex>
                        </Flex>
                    </GridItem>
                </Grid>
                <MotionFlex 
                    marginX="2rem" 
                    marginBottom="2rem"
                    variants={ImageCarouselVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Marquee
                        speed = "100"
                    >
                        <Image
                            src={require(`../../assets/previousShows/${activeShow.folder}/${activeShow.galleryImageTwo}`)}
                            sx={singleImageGalleryStyling}
                        />
                        <Image
                            src={require(`../../assets/previousShows/${activeShow.folder}/${activeShow.galleryImageThree}`)}
                            sx={singleImageGalleryStyling}
                        />
                        <Image
                            src={require(`../../assets/previousShows/${activeShow.folder}/${activeShow.galleryImageFour}`)}
                            sx={singleImageGalleryStyling}
                        />
                        <Image
                            src={require(`../../assets/previousShows/${activeShow.folder}/${activeShow.galleryImageFive}`)}
                            sx={singleImageGalleryStyling}
                        />
                        <Image
                            src={require(`../../assets/previousShows/${activeShow.folder}/${activeShow.galleryImageSix}`)}
                            sx={singleImageGalleryStyling}
                        />
                        {/* <Image
                            src={require("../../assets/previousShows/chance/Chance-8.jpg")}
                            sx={singleImageGalleryStyling}
                        /> */}
                    </Marquee>
                </MotionFlex>
                </Box>
            </>
        )}
    </>
  )
}

export default PrevShowsSingle