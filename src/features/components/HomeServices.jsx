import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import serviceBackground from "../../assets/Crowd_1.jpg"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Underline from '../../assets/border.svg'


const HomeServices = () => {
    const servicesStyle = {
        width:"88%", 
        marginX:{ base:"auto", sm:"auto", md:"2rem", lg:"auto",  xl:"auto"},
        flexDirection: "column",
        marginY:{ sm:"1.5rem", md:"1.5rem", lg:"auto", xl:"auto"},
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "65vh",
        paddingY: "4rem",
        paddingX: "2rem",
        background:"#fff", 
        borderRadius: "1rem"
      }
  
    const serviceDescriptionStyle = {
      textAlign:"right",
      as:"p",
      paddingLeft:"2rem"
    }

    const serviceHeadingStyle = {
      as:"h3", 
      marginBottom:"2rem"
    }

    const serviceSeperator = {
      borderTop:"1px solid #000",
      marginLeft:"30%",
      paddingBottom:"2rem",
    }

    // Framer Motion
    const headingVariants = {
      hidden: {
        opacity: 0,
        x: -50,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {delay: 1, duration: 1}
      }
    }
    const MotionHeading = motion(Heading);
    
    const textVariants = {
      hidden: {
        opacity: 0,
        x: 50,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {delay: 1, duration: 1}
      }
    }
    const MotionText = motion(Text);

    const borderVariants = {
      hidden: {
        borderLength: "0",
      },
      visible: {
        borderLength: "100px",
        transition: {delay: 1, duration: 1}
      }
    }
    const MotionBox = motion(Box);

    const backgroundVariants = {
      hidden: {
        opacity: 0,
        y: 50,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 1, duration: 1}
      }
    }
    const MotionFlex = motion(Flex);

    const { ref, inView } = useInView(); 

  return (
    <Box 
      paddingY="6rem" 
      backgroundImage={serviceBackground}
      ref={ref}
    >
        <Flex width="100%" gap="2rem" flexDirection={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}>
            <MotionFlex 
              sx={servicesStyle}
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
            >
              <MotionHeading 
                variant="h3" 
                sx={serviceHeadingStyle} 
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                  Event Consultation
              </MotionHeading>
              <MotionBox
              sx={serviceSeperator}
              variants={borderVariants}
              initial="hidden"
                animate="visible"
              />
              <MotionText 
                sx={serviceDescriptionStyle} 
                variant="p"
                variants= {textVariants}
                initial="hidden"
                animate="visible"
              >
                  Event consultation is one of Glen21’s primary functions. We provide strategic coordination and production management for multiple brands.
              </MotionText>
            </MotionFlex>

            <MotionFlex 
              sx={servicesStyle}
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
            >
            <MotionHeading 
                variant="h3" 
                sx={serviceHeadingStyle} 
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                Talent Solutions
            </MotionHeading>
            <Box sx={serviceSeperator}/>
            <MotionText 
              sx={serviceDescriptionStyle} 
              variant="p"
              variants= {textVariants}
              initial="hidden"
              animate="visible"
            >
                Glen21 has solidified relationships with numerous artists across the spectrum and is proficient in align brands with talent.
            </MotionText>
            </MotionFlex>

            <MotionFlex 
              sx={servicesStyle}
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
            >
            <MotionHeading 
                variant="h3" 
                sx={serviceHeadingStyle} 
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                TV<br/>Campaigns
            </MotionHeading>
            <Box sx={serviceSeperator}/>
            <MotionText 
              sx={serviceDescriptionStyle} 
              variant="p"
              variants= {textVariants}
              initial="hidden"
              animate="visible"
            >
                One of Glen21’s greatest skills is curating TV campaigns to enhance brand strategies with broad campaign management and connections to well known artists.
            </MotionText>
            
            </MotionFlex>
        </Flex>
      </Box>
  )
}

export default HomeServices