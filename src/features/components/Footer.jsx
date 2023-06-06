import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion"


const Footer = () => {
  const MotionBox = motion(Box);

  const footerVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {delay: 5, duration: 1, }
    },
    exit: {
        height: 0,
        transition: {delay: 5, duration: 1}
    }
  };

  return (
    <MotionBox 
      background="#000" 
      borderTop="1px solid #000" 
      paddingY="1rem"
      height="60px"
      variants= {footerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <Text variant="p" textAlign="center" color="#fff">
            &copy; Glen21 Entertainment {new Date().getFullYear()}. A RHEST design.
        </Text>
    </MotionBox>
  )
}

export default Footer