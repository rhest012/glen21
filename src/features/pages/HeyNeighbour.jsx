import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import HeyNeighbour from '../../assets/Hey_Neighbour_Header_Tickets.jpg'
import { motion } from 'framer-motion'

const BoysIIMen = () => {
    const venueStyling = {
        fontSize: "1rem"
    }
    // Framer Motion
    const MotionImage = motion(Image);
    const MotionFlex = motion(Flex);
    const MotionBox = motion(Box);
    const MotionLink = motion(Link);

    const imageVariants = {
        hidden: {
            y: 1440,
            transition: { duration: 1}
          },
          visible: {
            y: 0,
            transition: { duration: 2}
          },
          exit: {
            y: 1440,
            transition: {duration: 1}
          } 
        }
    
    const descriptionVariants = {
            hidden: {
              opacity: 0,
              x: -30,
              transition: {delay: 1, duration: 1}
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {delay: 1, duration: 1}
            },
            exit: {
            opacity: 0,
            x: -30,
            transition: {delay: 1, duration: 1}
            }
    }

    const dateRightContainerVariant = {
        hidden: {
            opacity: 0,
            x: 30,
            transition: {delay: 1.2, duration: 1}
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {delay: 1.2, duration: 1},
        },
        exit: {
        opacity: 0,
        x: 30,
        transition: {delay: 1.2, duration: 1}
        }

    }
    const dateLeftContainerVariant = {
        hidden: {
            opacity: 0,
            x: -30,
            transition: {delay: 1.2, duration: 1}
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {delay: 1.2, duration: 1},
        },
        exit: {
        opacity: 0,
        x: -30,
        transition: {delay: 1.2, duration: 1}
        }
    }

    const linkVariant = {
        hidden: {
            opacity: 0,
            transition: {delay: 1.2, duration: 1}
        },
        visible: {
            opacity: 1,

            transition: {delay: 1.2, duration: 1},
        },
        exit: {
            opacity: 0,
            transition: {delay: 1.2, duration: 1},
        },
    }

  return (
    <Box marginTop="2rem" data-scroll-section>
    <Flex marginX="2rem" flexDirection={{ base:"column", sm:"column", md:"column", lg:"row", xl:"row" }}>
    <MotionFlex 
        width={{ base:"100%", md:"100%", lg:"70", xl:"70%" }}
        flexDirection="column"
        gap="1rem" 
        borderRight={{ base:"none", sm:"none", md:"none", lg:"1px solid #000", xl:"1px solid #000" }}
        borderBottom={{ base:"1px solid #000", sm:"1px solid #000", md:"1px solid #000", lg:"none", xl:"none" }}
        paddingY="1rem"
        paddingRight={{ base:"0", sm:"0", md:"0", lg:"2rem", xl:"2rem" }}
        Height="260px"
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
        exit= 'exit'
        >       
            <Heading variant="h1" 
                textAlign={{ base:"left", sm:"left", md:"left", lg:"right", xl:"right"}}
                paddingBottom= {{ base:"0.5rem", sm:"0.5rem", md:"0.5rem", lg:"0", xl:"0" }}
            >
                Hey <br/>Neighbour
            </Heading>
            <Box
                borderBottom= {{ base:"1px solid #000", sm: "1px solid #000", md: "1px solid #000", lg:"none", xl:"none" }}
                marginLeft={{ base:"15%", sm:"30%", md:"30%"}}
                display={{lg:"none", xl:"none"}}
            />
            <Text variant="p" textAlign="right">
                Get ready for a one-of-a-kind 3-day music festival in sunny South Africa that's packed with experiences, social activities, multiple food stalls, bars, and so much more! Hey Neighbour is not just an escape from everyday pressures, it's an opportunity to connect with diverse groups of people who share a common love of music and culture.
            </Text>
        </MotionFlex>
        <Flex 
            width={{ base:"100%", md:"100%", lg:"30%", xl:"30%"}} 
            paddingLeft={{ sm:"0", md:"0", lg:"2rem", xl:"2rem"}}
            paddingY="1rem"  
            flexDir="column" 
            alignContent="space-between" 
            justifyContent="space-between" 
            height="260px"
        >
            <Flex justifyContent="space-between" width="100%">
                <MotionBox 
                        paddingRight="0.5rem"
                        variants={dateLeftContainerVariant}
                        initial="hidden"
                        animate="visible"
                        exit= 'exit'
                    >
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            Legends Adventure Farm
                        </Heading>
                        <Text variant="p" as="p">Pretoria</Text>
                        
                    </Flex>
                </MotionBox>
                <MotionBox 
                    paddingLeft="0.5rem"
                    variants={dateRightContainerVariant}
                    initial="hidden"
                    animate="visible"
                    exit= 'exit'
                >
                    <Flex  justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            9 December
                        </Heading>
                    </Flex>
                </MotionBox>
            </Flex>
            <Flex justifyContent="space-between" width="100%">
                <MotionBox 
                        paddingRight="0.5rem"
                        variants={dateLeftContainerVariant}
                        initial="hidden"
                        animate="visible"
                        exit= 'exit'
                    >
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            10 December
                        </Heading>
                    </Flex>
                </MotionBox>
                <MotionBox 
                    paddingLeft="0.5rem"
                    variants={dateRightContainerVariant}
                    initial="hidden"
                    animate="visible"
                    exit= 'exit'
                >
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            11 December
                        </Heading>
                    </Flex>
                </MotionBox>
            </Flex>
            <Flex>
                <MotionLink 
                    variants={linkVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    href='https://heyneighbour.co.za/' 
                    isExternal
                    textAlign="center"
                    fontWeight="600" 
                    paddingY="0.5rem"
                    width="100%" 
                    borderRadius="2rem"
                    border="1px solid #000"
                    background="#000"
                    color="#fff"
                    textTransform="uppercase"
                    _hover = {{
                        background: "transparent",
                        color : "#000"
                    }}
                >
                    Purchase Tickets
                </MotionLink>
            </Flex>
        </Flex>
    </Flex>
        <MotionImage
            marginTop="2rem"
            width="100%"
            height={{ base:"130px", sm:"130px", md:"auto", lg:"400px", xl:"400px"}}
            src={HeyNeighbour}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit= 'exit'
        />
    </Box>
  )
}

export default BoysIIMen