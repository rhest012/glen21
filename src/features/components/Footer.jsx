import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box borderTop="1px solid #000" paddingY="1rem">
        <Text variant="p" textAlign="center">
            &copy; Glen21 Entertainment {new Date().getFullYear()}. A RHEST design.
        </Text>
    </Box>
  )
}

export default Footer