import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import HomeImage from "../../assets/Crowd_3.jpg"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const HomeAbout = () => {
  const serviceSeperator = {
    borderTop:"1px solid #000",
    marginLeft:"30%",
    paddingBottom:"2rem",
  }

  // Framer Motion
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const { ref, inView } = useInView(); 

  const textVariants = {
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

  const imageVariants = {
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

  const borderBottomVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {delay: 1, duration: 1}
    }
  }
  

  const borderTopVariants = {
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
  return (
    <Box ref={ref} marginY="8rem" marginX={{sm:"1rem", md:"1rem"}}>
    <Grid gridTemplateColumns={{ sm:"100%", md:"100%", lg:"50% 50%",  xl:"50% 50%"}}>
    <GridItem height="100%"> 
        <Flex height="100%" flexDir="column" justifyContent="space-between">
          <Flex width={{sm:"100%"}} justifyContent="center">
            <MotionBox
              height="50px"
              borderLeft="1px solid #000"
              variants={borderTopVariants}
              initial="hidden"
              animate="visible"
            />
          </Flex>
          <Flex flexDir="column" paddingX="3rem" flexWrap="wrap" alignItems="center" >
            <MotionHeading 
              variant="h3" 
              as="h3" 
              textAlign="left" 
              paddingBottom="2rem"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              One stop entertainment solutions agency
            </MotionHeading>
            <Box sx={serviceSeperator}/>
            <MotionText
              variant="p"
              textAlign="right"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Glen21 is a passionate lifestyle company with the ability to produce excellent, large scale events by establishing links between culture, consumers, and brands.
              Glen21 knows that with hard work and dedication we will soon be known as Africa’s one-stop entertainment solutions agency.
            </MotionText>
          </Flex>
          <Flex width={{sm:"100%"}} justifyContent="center">
            <MotionBox
              variants={borderBottomVariants}
              initial="hidden"
              animate="visible"
              height="50px"
              borderLeft="1px solid #000"
            />
          </Flex>
        </Flex>
      </GridItem>
      <GridItem height="100%" paddingY="2rem">
        <MotionImage
          src={HomeImage}
          height={{ sm:"90%", md:"90%", lg:"90%",  xl:"400px"}}
          width="auto"
          marginX="auto"
          marginY="auto"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
      </GridItem>
    </Grid>
    </Box>
  )
}

export default HomeAbout