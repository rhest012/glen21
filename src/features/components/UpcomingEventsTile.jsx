
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link } from "@chakra-ui/react"
import TamiaSquare from "../../assets/Tamia_Square.jpg"
import HeyNeighbourPlaylist from "../../assets/upcomingEvents/playlistCovers/Hey_Neighbour.jpg"
import TamiaPlaylist from "../../assets/upcomingEvents/playlistCovers/Tamia_Square.jpg"
import BoyzIIMenPlaylist from "../../assets/upcomingEvents/playlistCovers/Boyz2Men_Square..jpg"
import InkabiPoster from "../../assets/upcomingEvents/InkabiSSquare.jpg"
import InkabiPlaylist from "./../../assets/upcomingEvents/playlistCovers/Inkabi_zezwe.jpg"
import BoysIIMenSquare from "../../assets/Boyz2Men_Square.jpg"
import HeyNeighbourSquare from '../../assets/Hey-Nieghbour.jpg'
import { motion } from 'framer-motion'
import { gsap } from 'gsap';
import {useRef, useEffect, useState} from 'react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useInView } from 'react-intersection-observer'

const UpcomingEventsTile = () => {
<<<<<<< HEAD
     const imageContainer = {
      display:"inline-block",
      borderRadius: "1rem",
      overflow: "hidden"
     }
     
=======
  const imageContainer = {
    display:"inline-block",
    borderRadius: "1rem",
    overflow: "hidden"
  }
>>>>>>> tests

  const singleShowContainer = {
    width: { base:"920px", sm:"920px", md:"1440px", lg:"1440px", xl:"1440px"},
    marginX: { base:"2rem", sm:"2rem", md:"0", lg:"0", xl:"0"},
  }

  const showHeadingContainer = {
    width:"215px",
    fontSize:"2.1rem",
    textAlign: "center"
  }

  const posterSize = {
    height: { base:"360px", sm:"400px", md:"400px", lg:"600px", xl:"600px" },
    width: { base:"360px", sm:"400px", md:"400px", lg:"600px", xl:"600px" },
    borderRadius: "1rem",
  }

  const buttonStyle = {
    backgroundColor:"#000000", 
    width: { base:"8rem", sm:"8rem", md:"10rem",lg:"10rem", xl:"10rem" },
    paddingY:"1.5rem",
    border:"1px solid #000",
    color:"#fff", 
    borderRadius:"5rem", 
    fontWeight: "normal",
    textTransform: "uppercase",
    fontSize: { sm:"0.7rem", md:"0.85rem", lg:"0.85rem", xl:"0.85rem" },
    fontWeight: "600",
    
    _hover: {
      border:"1px solid #000",
      backgroundColor: "#fff",
      color: "#000",
    }
  }

    const playlistPosterStyling = {
      maxHeight: { base:"310px", sm:"310px", md:"450px", lg:"450px", xl:"450px" },
      maxWidth: { base:"310px", sm:"310px", md:"450px", lg:"450px", xl:"450px" },
      borderRadius: "1rem",
    }
    
    const playlistPosterButtonContainer = {
      display:"flex", 
      justifyContent: "space-between", 
      margin:"1rem 0"
    }

      //  Framer Motion
      const MotionFlex = motion(Flex);
      const MotionImage = motion(Image);
      const MotionHeading = motion(Heading);
      const MotionBox = motion(Box);
      const { ref, inView } = useInView();

      const posterVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {delay: 1, duration: 1.2},
        },
        hover: {
          scale: 1.05, // Increase the scale to zoom in (e.g., 1.2 for 20% zoom)
          transition: {
            duration: 1, // Adjust the duration of the zoom animation
            ease: 'easeInOut', // Choose the desired easing function
          },
        },
      }

      const headingVariants = {
        hidden: {
          opacity: 0,  
        },
        visible: {
          opacity: 1,
          transition: {delay: 0.5, duration: 1.2}
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
              return '-3480px';
            } else if (screenWidth < breakpoints.small) {
              return '-3440px';
              // 1440 * 3 + 32
            } else if (screenWidth < breakpoints.medium) {
              return '-4336px';
            } else if (screenWidth < breakpoints.large) {
              return '-4336px'; 
            } else {
              return '-4336px';
            }
          }

          return () => {
            pin.kill();
          };
      }, []);

      
     
  return (
    <Box 
      // paddingX= {{ base:"0.25rem", md:"0.25rem", lg:"2rem", xl:"2rem"}}  
      marginY="6rem" 
      // display= {{ base:"none", sm:"none",   md:"none", lg:"block", xl:"block" }}
    >
        <MotionHeading 
          variant="h3" 
          as="h3" 
          textAlign="center" 
          paddingBottom="2rem"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Upcoming Shows
        </MotionHeading>
        <Box 
          className="scroll-section-outer"
          overflow="hidden"
        >
           <Box 
            ref={triggerRef}
          >
            <Box
              className="scroll-section-inner"
              height="100vh"
              width="5760px"
              display="flex"
              // justifyContent="center"
              alignItems="center"
              position="relative"
              ref={sectionRef}
            >
              <Box display="flex" justifyContent="center">
                <Box sx={singleShowContainer} >
                  <Flex
                    // justifyContent="center"
                    alignItems="center"
                    justifyContent="center"
                   
                  >
                    <Heading variant="h3" sx={showHeadingContainer}>
                      Inkabi <br/>Zezwe
                    </Heading>
                      <MotionImage
                        src={InkabiPoster}
                        variants={posterVariants}
                        initial="hidden"
                        animate="visible"
                        marginX="2rem"
                        sx={posterSize}
                        
                        position="relative"
                      />
                    <Flex height="100%" flexDir="column">
                      <Box>
                        <Box sx={imageContainer}>
                          <MotionImage
                            src={InkabiPlaylist}
                            variants={posterVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            sx={playlistPosterStyling}
                          />
                        </Box>
                        <Box sx={playlistPosterButtonContainer}>
                          <Link isExternal href="https://tickets.computicket.com/event/inkabi_zezwe_tour/7213503">
                            <Button
                              sx={buttonStyle}
                            >
                              Purchase
                            </Button>
                          </Link>
                          <Link isExternal href="https://music.apple.com/za/album/ukhamba/1685664203">
                            <Button 
                              sx={buttonStyle}
                            >
                              Playlist
                            </Button>
                          </Link>
                        </Box>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
                <Box sx={singleShowContainer}>
                  <Flex
                    // justifyContent="center"
                    alignItems="center"
                    justifyContent="center"
                   
                  >
                    <Heading variant="h3" sx={showHeadingContainer}>
                      Tamia Live In South Africa
                    </Heading>
                      <MotionImage
                        src={TamiaSquare}
                        variants={posterVariants}
                        initial="hidden"
                        animate="visible"
                        marginX="2rem"
                        sx={posterSize}
                        
                        position="relative"
                      />
                    <Flex height="100%" flexDir="column">
                      <Box>
                        <Box sx={imageContainer}>
                          <MotionImage
                            src={TamiaPlaylist}
                            variants={posterVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            sx={playlistPosterStyling}
                          />
                        </Box>
                        <Box sx={playlistPosterButtonContainer}>
                          <Link isExternal href="https://www.ticketpros.co.za/portal/web/index.php/parent_event/1915f22b-8cf5-c5c3-9449-642286c5cad5">
                            <Button
                              sx={buttonStyle}
                            >
                              Purchase
                            </Button>
                          </Link>
                          <Link isExternal href="https://music.apple.com/za/playlist/tamia-essentials/pl.1c127f3670d34209a8efa4143d2a427b">
                            <Button 
                              sx={buttonStyle}
                            >
                              Playlist
                            </Button>
                          </Link>
                        </Box>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
                <Box sx={singleShowContainer}>
                  <Flex
                    // justifyContent="center"
                    alignItems="center"
                    justifyContent="center"
                   
                  >
                    <Heading variant="h3" sx={showHeadingContainer}>
                      Boyz II Men South African Tour
                    </Heading>
                      <MotionImage
                        src={BoysIIMenSquare}
                        variants={posterVariants}
                        initial="hidden"
                        animate="visible"
                        marginX="2rem"
                        sx={posterSize}
                        
                        position="relative"
                      />
                    <Flex height="100%" flexDir="column">
                      <Box>
                        <Box sx={imageContainer}>
                          <MotionImage
                            src={BoyzIIMenPlaylist}
                            variants={posterVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            sx={playlistPosterStyling}
                          />
                        </Box>
                        <Box sx={playlistPosterButtonContainer}>
                          <Link isExternal href="https://www.ticketpros.co.za/portal/web/index.php/parent_event/810aa03b-d57e-d4eb-10a4-63fe581c39ac?sort_order=A-Z&category=music&province=&from=&to=">
                            <Button
                              sx={buttonStyle}
                            >
                              Purchase
                            </Button>
                          </Link>
                          <Link isExternal href="https://music.apple.com/za/playlist/boyz-ii-men-essentials/pl.95bfdb84270a41509e118bb25955f0b0">
                            <Button 
                              sx={buttonStyle}
                            >
                              Playlist
                            </Button>
                          </Link>
                        </Box>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
                <Box sx={singleShowContainer}>
                  <Flex
                    // justifyContent="center"
                    alignItems="center"
                    justifyContent="center"
                   
                  >
                    <Heading variant="h3"  sx={showHeadingContainer}>
                      Hey Neighbour
                    </Heading>
                      <MotionImage
                        src={HeyNeighbourSquare}
                        variants={posterVariants}
                        initial="hidden"
                        animate="visible"
                        marginX="2rem"
                        sx={posterSize}
                        
                        position="relative"
                      />
                    <Flex height="100%" flexDir="column">
                      <Box>
                        <Box sx={imageContainer}>
                          <MotionImage
                            src={HeyNeighbourPlaylist}
                            variants={posterVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            sx={playlistPosterStyling}
                          />
                        </Box>
                        <Box sx={playlistPosterButtonContainer}>
                          <Link isExternal href="https://www.ticketpros.co.za/portal/web/index.php?page_id=event&event_id=5077564a-6bcc-a263-fb88-642d3e6c4844">
                            <Button
                              sx={buttonStyle}
                            >
                              Purchase
                            </Button>
                          </Link>
                        </Box>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Box>  
           </Box>
        </Box>
    </Box>
        
  )
}

export default UpcomingEventsTile
