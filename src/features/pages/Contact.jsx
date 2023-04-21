import React from 'react'
import ContactHeader from '../../assets/Glen21_Header.jpg'
import ContactHeaderMobile from '../../assets/Glen21_Mobile_Header.jpg'
import { Box, Flex, FormControl, Grid, GridItem, HStack, Heading, Image, Input, Stack, Text, Textarea, Link } from '@chakra-ui/react'
import ContactImage from '../../assets/Crowd_2.jpg'
import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
// Framer Motion
import { motion } from 'framer-motion';

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

    const pageHeadingVariant = {
        hidden: {
          opacity: 0,
          x: -450,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {delay: 1, duration: 1}
        },
        exit: {
            opacity: 0,
            x: -450,
            transition: {delay: 1, duration: 1}
          },

      }

    const headingVariants = {
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

    const textVariant = {
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

      const BgVariant = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {duration: 2}
        },
        exit: {
            opacity: 0,
            transition: {duration: 2}
          },

      }

      const imageVariants = {
        hidden: {
          opacity: 0,
          
        },
        visible: {
          opacity: 1,
          transition: {delay: 1, duration: 1}
        },
        exit: {
            opacity: 0,
            transition: {delay: 1, duration: 1}
        }

      }
    
      const borderBottomVariants = {
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {duration: 1}
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {duration: 1}
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
          transition: {duration: 1}
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {duration: 1}
        }
      }

      const formVariants = {
        hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {delay: 1, duration: 1}
          },
          exit: {
              opacity: 0,
              transition: {delay: 1, duration: 1}
          }
      }


  return (
   <>
    <MotionFlex 
        width="100%"
        height={{ base:"18vh", sm:"20vh", md:"20vh", lg:"31vh", xl:"31vh" }}
        backgroundImage= {ContactHeader}
        backgroundPosition={{ base:"left center", sm:"left center",  md:"left center", lg:"center", xl:"center" }}
        backgroundSize="cover"
        paddingX="2rem"
        alignItems="center"
        variants={BgVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        <MotionHeading 
            fontSize="3.81rem"
            textAlign={{base:"center", sm:"left", md:"left", lg:"left", x:"lg"}} 
            as="h1"
            color="#fff"
            variants={pageHeadingVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            Contact
        </MotionHeading>
    </MotionFlex>
    <Grid gridTemplateColumns={{ base:"100%", sm:"100%", md:"100%", lg:"50 50", xl:"50% 50%"}} width="100%" height="60vh"> 
        <GridItem>
            <Flex flexDirection="column" justifyContent="center" width="100%">
                <MotionBox
                    height="50px"
                    borderRight="1px solid #000"
                    variants={borderTopVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                />
                <MotionImage
                    src={ContactImage}
                    margin="auto"
                    height="375px"
                    width="600px"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                />
                    <MotionBox
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
                {/* <Stack 
                    width="100%"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <MotionInput
                        sx={inputStyle}
                        type='text'
                        placeholder='Full Name'
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />
                    <MotionInput
                        sx={inputStyle}
                        type="email"
                        placeholder='Email Address'
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />
                    
                    <MotionTextarea
                        placeholder='Message'
                        sx={inputStyle}
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />    
                </Stack> */}
                
                <Flex flexDirection={{ base:"column", sm:"column", md:"column", lg:"row", xl:"row"}} gap={{base:"1rem", sm:"1rem", md:"1rem", lg:"1rem"}} justifyContent={{ lg:"space-between", xl:"space-between"}}>
                    <MotionText 
                        variant="p"
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        textAlign={{ base:"center", sm:"center", md:"center", lg:"left", xl:"left"}}
                    >
                        Building 2, 4 Karen Str, Bryanston | +27 87 805 9023
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
                        <Link isExternal href="https://www.facebook.com/glen21ent/">
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
   </>
  )
}

export default Contact