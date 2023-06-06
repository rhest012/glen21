import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import BoysiiMen from '../../assets/Boyz2Men_Cover.jpg'
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
    <Box marginTop="2rem" height="91vh" data-scroll-section>
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
                Boys II Men South <br/>Africa Tour
            </Heading>
            <Box
                borderBottom= {{ base:"1px solid #000", sm: "1px solid #000", md: "1px solid #000", lg:"none", xl:"none" }}
                marginLeft={{ base:"15%", sm:"30%", md:"30%"}}
                display={{lg:"none", xl:"none"}}
            />
            <Text variant="p" textAlign="right">
                Boyz II Men remains one of the most truly iconic R&B groups in the music industry history.<br/>
                The group redefined popular R&B music and continues to create timeless hits that appeal to fans across all generations.<br/>
                The band has penned and performed some of the most celebrated classics of the past two decades
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
                            31 Oct
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            Grand Arena
                        </Heading>
                        <Text variant="p" as="p">Cape Town</Text>
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
                            2 November
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling} textAlign="right">
                            Time Square
                        </Heading>
                        <Text variant="p" as="p" textAlign="right">Pretoria</Text>
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
                            4 November
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            Suncity Superbowl
                        </Heading>
                        <Text variant="p" as="p">Sun City</Text>
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
                            31 Oct
                        </Heading>
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            Durban ICC
                        </Heading>
                        <Text variant="p" as="p" textAlign="right">Durban</Text>
                    </Flex>
                </MotionBox>
            </Flex>
            <Flex>
                <MotionLink 
                    variants={linkVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    href='https://www.ticketpros.co.za/portal/web/index.php/parent_event/810aa03b-d57e-d4eb-10a4-63fe581c39ac?sort_order=A-Z&category=music&province=&from=&to=' 
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
            src={BoysiiMen}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit= 'exit'
        />
    </Box>
  )
}

export default BoysIIMen