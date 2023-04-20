import { Link as ReachLink} from 'react-router-dom'
import { Box, Flex, Grid, GridItem, Heading, Image, Link } from "@chakra-ui/react"
import TamiaSquare from "../../assets/Tamia_Square.jpg"
import BoysIIMenSquare from "../../assets/Boyz2Men_Square.jpg"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const UpcomingEventsTile = () => {
    const singleEventContainer = {
        flexDirection:"column",
        width:"80%",
        marginX:"auto",
        justifyContent:"center",
      }
    
      const topLeftBorder = {
        height:"70px",
        width:"70px",
        borderLeft:"1px solid #000",
        borderTop:"1px solid #000",
      }
    
      const bottomRightBorder = {
        marginLeft:"87%",
        marginTop:"-4%",
        height:"70px",
        width:"70px",
        borderRight:"1px solid #000",
        borderBottom:"1px solid #000",
      }

      //  Framer Motion
      const MotionFlex = motion(Flex);
      const MotionImage = motion(Image);
      const MotionHeading = motion(Heading);
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
      
      
     
  return (
    <Box paddingX="2rem" marginY="6rem" ref={ref}>
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
        <Grid gridTemplateColumns="50% 50%">
          <GridItem width="100%">
            <Link 
              variants={containerVariants}
              whileHover='hover'
              as={ReachLink}  
              to="/tamia" 
              _hover={{
                textDecorate: "none",
              }}>
              <MotionFlex 
                sx={singleEventContainer}
                variants={containerVariants}
                whileHover="hover"
              >
                <Box sx={topLeftBorder}/>
                  <Flex flexDirection="column" paddingX="1rem" marginY="-3.5rem">
                    <MotionImage
                      src={TamiaSquare}
                      variants={posterVariants}
                      initial="hidden"
                      animate="visible"
                      height="550px"
                      width="550px"
                    />
                    <Flex justifyContent="space-between" paddingY="1rem">
                      <MotionHeading 
                        variant="h6" 
                        as="h6"
                        variants={showNameVariants}
                        initial="hidden"
                        animate="visible"
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
                        4-9 July
                      </MotionHeading>
                    </Flex>
                  </Flex>
                <Flex sx={bottomRightBorder}/>
              </MotionFlex>
            </Link>
          </GridItem>
          <GridItem width="100%">
          <Link 
              as={ReachLink}  
              to="/boys" 
              _hover={{
                textDecorate: "none",
              }}>
              <MotionFlex 
                sx={singleEventContainer}
                variants={containerVariants}
                whileHover="hover"
              >
                <Box sx={topLeftBorder}/>
                  <Flex flexDirection="column" paddingX="1rem" marginY="-3.5rem">
                    <MotionImage
                      src={BoysIIMenSquare}
                      variants={posterVariants}
                      initial="hidden"
                      animate="visible"
                      height="550px"
                      width="550px"
                    />
                    <Flex justifyContent="space-between" paddingY="1rem">
                      <MotionHeading 
                        variant="h6" 
                        as="h6" 
                        variants={showNameVariants}
                        initial="hidden"
                        animate="visible">
                        Boys II Men SA Tour
                      </MotionHeading>
                      <MotionHeading 
                        variant="h6" 
                        as="h6"
                        variants={showDateVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        31 Oct - 5 Nov
                      </MotionHeading>
                    </Flex>
                  </Flex>
                <Flex sx={bottomRightBorder}/>
              </MotionFlex>
            </Link>
          </GridItem>
        </Grid>
      </Box>
  )
}

export default UpcomingEventsTile