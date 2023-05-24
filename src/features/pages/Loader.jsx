import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import ToniBraxton from '../../assets/glen21_Loader_Toni.jpg'
import SwvLoader from '../../assets/Swv-Loader.jpg'
import Glen21Logo from '../../assets/Glen_21_Logo.svg'
import ScorpionKings from '../../assets/glen21_Loader_Scorpion.jpg'
import React from 'react'
import { motion } from 'framer-motion'

const Loader = ({ setLoading }) => {

    const MotionImage = motion(Image);
    const MotionText = motion(Text);
    const MotionBox = motion(Box);

    const logoVariants = {
        hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {delay: 0.5, duration: 1}
          },
          exit: {
            opacity: 0,
            transition: {delay: 1, duration: 1}
          }
    }

    const captionVariants = {
        hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {delay: 1.5, duration: 1}
          },
          exit: {
            opacity: 0,
            transition: {delay: 1.5, duration: 1}
          }
    }

    const imageLeft = {
        hidden: {
            opacity: 0,
            x:-20,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {delay: 1, duration: 1}
          },
          exit: {
            opacity: 0,
            transition: {delay: 1, duration: 1}
          }
    }

    const imageRight = {
        hidden: {
            opacity: 0,
            x:20,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {delay: 1, duration: 1, staggerChildren: 1.5}
          },
          exit: {
            opacity: 0,
            transition: {delay: 1, duration: 1}
          }
    }

  return (
    <Box height="100vh" width="100vw" display="flex" flexDir="column" justifyContent="center" alignItems="center" paddingX="8rem">
        <Grid gridTemplateColumns="50% 50%">
            <GridItem>
              <Grid gridTemplateColumns="repeat(2, 1fr)" gap="1rem">
                  <GridItem>
                      <MotionImage
                        src={ToniBraxton}
                        height="400px"
                        borderRadius="1rem"
                        width="auto"
                        variants={imageLeft}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      />
                  </GridItem>
                  <GridItem display="flex" justifyContent="space-between" flexDir="column">
                      <MotionImage
                        src={SwvLoader}
                        variants={imageRight}
                        borderRadius="1rem"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      />
                      <MotionImage
                        src={ScorpionKings}
                        borderRadius="1rem"
                        variants={imageRight}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      />
                  </GridItem>
              </Grid>
            </GridItem>
            <GridItem display="flex" flexDir="column" justifyContent="flex-end" alignItems="center" gap="1rem">
              <MotionImage
                src={Glen21Logo}
                width="250px"
  
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
              <MotionText 
                variant="p" 
                textAlign="center"
                variants={captionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onAnimationComplete={() => setLoading(false)}
              >
                Africa’s trusted, one-stop entertainment solutions agency.
              </MotionText>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default Loader