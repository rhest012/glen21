import { Link as ReachLink} from 'react-router-dom'
import { Box, Flex, Grid, GridItem, Heading, Image, Link } from "@chakra-ui/react"
import TamiaSquare from "../../assets/Tamia_Square.jpg"
import BoysIIMenSquare from "../../assets/Boyz2Men_Square.jpg"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const UpcomingEventsTile = () => {
    const singleEventContainer = {
        flexDirection:"column",
        width:{ sm:"100%", md:"100%", lg:"80%", xl:"80%"},
        marginLeft:{ sm:"2.5rem", md:"2.5rem", lg:"2rem", xl:"2rem"},
        flexDirection:"column",
        justifyContent:"center",
      }
    
      const topLeftBorder = {
        height:"70px",
        width:"70px",
        borderLeft:"1px solid #000",
      
        borderTop:"1px solid #000",
      }
    
      const bottomRightBorder = {
        marginLeft:{lg:"80%", xl:"87%"},
        marginTop:"-4%",
        display: { base:"none", sm:"none", md:"none", lg:"block", xl:"block"},
        position:"relative",
        height:"70px",
        width:"70px",
        borderRight:"1px solid #000",
        borderBottom:"1px solid #000",
      }

      const posterSize = {
        height:{ sm:"90%", md:"90%", lg:"90%",  xl:"550px"},
        width:{ sm:"90%", md:"90%", lg:"90%",  xl:"550px"}
      }

      //  Framer Motion
      const MotionFlex = motion(Flex);
      const MotionImage = motion(Image);
      const MotionHeading = motion(Heading);
      const MotionBox = motion(Box);
      const { ref, inView } = useInView();

      const containerVariants = {
        hover: {
          scale: 1.03,
          transition: {
            duration: 0.7,
          }
        }
      }

      const posterVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {delay: 1, duration: 1.2}
        }
      }

      const showNameVariants = {
        hidden: {
          opacity: 0,
          x: -30
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {delay: 1.2, duration: 1.2}
        }
      }

      const showDateVariants = {
        hidden: {
          opacity: 0,
          x: 30
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {delay: 1.2, duration: 1.2}
        }
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

      const borderTopVariants = {
        hidden: {
          opacity: 0,
          y: -20,
          x:-20
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {delay: 1, duration: 1}
        }
      }

      const borderBottomVariants = {
        hidden: {
          opacity: 0,
          y: 20,
          x:20
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {delay: 1, duration: 1}
        }
      }
       
     
  return (
    <Box paddingX={{ base:"0.25rem", md:"0.25rem", lg:"2rem", xl:"2rem"}} marginY="6rem" ref={ref}>
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
        <Grid gridTemplateColumns={{ base:"100%", md: "100%", lg:"50% 50%", xl:"50% 50%"}}>
          <GridItem width="100%" marginBottom={{base:"2.5rem", md:"2.5rem", lg:"0", xl:"0" }}>
            <Link 
              variants={containerVariants}
              whileHover='hover'
              isExternal 
              href="https://www.ticketpros.co.za/portal/web/index.php/parent_event/1915f22b-8cf5-c5c3-9449-642286c5cad5" 
              _hover={{
                textDecorate: "none",
              }}>
              <MotionFlex 
                sx={singleEventContainer}
                variants={containerVariants}
                whileHover="hover"
                marginBottom={{base:"1.25rem", sm:"2.5rem", md:"2.5rem", lg:"0", xl:"0"}}
              >
                <MotionBox 
                  sx={topLeftBorder}
                  variants={borderTopVariants}
                  initial="hidden"
                  animate="visible"
                />
                  <Flex flexDirection="column" paddingX="1rem" marginY="-3.5rem">
                    <MotionImage
                      src={TamiaSquare}
                      variants={posterVariants}
                      initial="hidden"
                      animate="visible"
                      sx={posterSize}
                    />
                    <Flex justifyContent="space-between" paddingY="1rem">
                      <MotionHeading 
                        variant="h6" 
                        as="h6"
                        variants={showNameVariants}
                        initial="hidden"
                        animate="visible"
                        display={{base:"none", sm:"none", md:"none", lg:"block", xl:"block"}}
                      >
                        Tamia Live In SA
                      </MotionHeading>
                      <MotionHeading 
                        variant="h6" 
                        as="h6"
                        variants={showDateVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        Purchase Tickets
                      </MotionHeading>
                    </Flex>
                  </Flex>
                <MotionFlex 
                  sx={bottomRightBorder} 
                  variants={borderBottomVariants}
                  initial="hidden"
                  animate="visible"/>
              </MotionFlex>
            </Link>
          </GridItem>
          <GridItem width="100%">
          <Link 
              isExternal 
              href="https://www.ticketpros.co.za/portal/web/index.php/parent_event/810aa03b-d57e-d4eb-10a4-63fe581c39ac?sort_order=A-Z&category=music&province=&from=&to=" 
              _hover={{
                textDecorate: "none",
              }}>
              <MotionFlex 
                sx={singleEventContainer}
                variants={containerVariants}
                whileHover="hover"
              >
                <MotionBox 
                  sx={topLeftBorder}
                  variants={borderTopVariants}
                  initial="hidden"
                  animate="visible"

                />
                  <Flex flexDirection="column" paddingX="1rem" marginY="-3.5rem" maxWidth="100%">
                    <MotionImage
                      src={BoysIIMenSquare}
                      variants={posterVariants}
                      initial="hidden"
                      animate="visible"
                      sx={posterSize}
                    />
                    <Flex justifyContent="space-between" paddingY="1rem">
                      <MotionHeading 
                        variant="h6" 
                        as="h6" 
                        variants={showNameVariants}
                        initial="hidden"
                        animate="visible"
                        display={{base:"none", sm:"none", md:"none", lg:"block", xl:"block"}}
                      >
                        Boys II Men SA Tour
                      </MotionHeading>
                      <MotionHeading 
                        variant="h6" 
                        as="h6"
                        variants={showDateVariants}
                        initial="hidden"
                        animate="visible"
                        textAlign="right"
                      >
                        Purchase Tickets
                      </MotionHeading>
                    </Flex>
                  </Flex>
                <MotionFlex 
                  sx={bottomRightBorder}
                  variants={borderBottomVariants}
                  initial="hidden"
                  animate="visible"
                />
              </MotionFlex>
            </Link>
          </GridItem>
        </Grid>
      </Box>
  )
}

export default UpcomingEventsTile