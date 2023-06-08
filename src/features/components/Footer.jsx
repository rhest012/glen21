import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion"


const Footer = () => {
  const MotionBox = motion(Box);

  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 10000,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {delay: 3, duration: 1, }
    },
    exit: {
        height: 0,
        transition: {delay: 3, duration: 1}
    }
  };

  return (
    <MotionBox 
      as="footer"
      backgroundColor="#00000 !important" 
      borderTop="1px solid #000" 
      paddingY="1rem"
      height="60px"
      marginBottom="0"
      variants= {footerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <Text fontWeight="300" textAlign="center" color="#fff" background="#000">
            &copy; Glen21 Entertainment {new Date().getFullYear()}. A RHEST design.
        </Text>
    </MotionBox>
  )
}

export default Footer