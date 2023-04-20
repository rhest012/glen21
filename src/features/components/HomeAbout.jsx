import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import HomeImage from "../../assets/Bas_JHB.jpg"
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
    <Box ref={ref} marginY="6rem">
    <Grid gridTemplateColumns="50% 50%">
      <GridItem height="100%" paddingY="2rem">
        <MotionImage
          src={HomeImage}
          height="550px"
          width="550px"
          marginX="auto"
          marginY="auto"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
      </GridItem>
      <GridItem height="100%"> 
        <Flex height="100%" flexDir="column" justifyContent="space-between">
          <MotionBox
            height="50px"
            borderLeft="1px solid #000"
            variants={borderTopVariants}
            initial="hidden"
            animate="visible"
          />
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
            <MotionBox
              borderTop="1px solid #000"
              marginLeft="2rem"
              paddingBottom="1rem"
              variants={borderTopVariants}
              initial="hidden"
              animate="visible"
            />
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
          <MotionBox
            variants={borderBottomVariants}
            initial="hidden"
            animate="visible"
            height="50px"
            borderLeft="1px solid #000"
          />
        </Flex>
      </GridItem>
    </Grid>
    </Box>
  )
}

export default HomeAbout