import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import Image1 from '../../assets/image_01.jpg'
import React from 'react'

const BoysIIMen = () => {
    const venueStyling = {
        fontSize: "1rem"
    }
  return (
    <Box marginTop="2rem" height="91vh" overflow="hidden">
    <Flex marginX="2rem">
        <Flex width="70%" flexDir="column" gap="1rem" borderRight="1px solid #000" paddingRight="2rem" paddingY="1rem" height="260px" >     
            <Heading variant="h1" textAlign="right">
                Boys II Men South <br/>Africa Tour
            </Heading>
            <Text variant="p" textAlign="right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit sagittis diam et bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque quis scelerisque libero. Aenean metus tortor, fringilla quis odio vitae, pretium egestas lectus. Sed volutpat luctus libero id porttitor.
            </Text>
        </Flex>
        <Flex width="30%" paddingLeft="2rem" paddingY="1rem"  flexDir="column" alignContent="space-between" justifyContent="space-between" height="260px">
            <Flex justifyContent="space-between" width="100%">
                <Box paddingRight="0.5rem">
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            31 Oct
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            Grand Arena
                        </Heading>
                        <Text variant="p" as="p">Cape Town</Text>
                    </Flex>
                </Box>
                <Box paddingLeft="0.5rem">
                    <Flex  justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            31 Oct
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling} textAlign="right">
                            Grand Arena
                        </Heading>
                        <Text variant="p" as="p" textAlign="right">Cape Town</Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex justifyContent="space-between" width="100%">
                <Box paddingRight="0.5rem">
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            31 Oct
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            Grand Arena
                        </Heading>
                        <Text variant="p" as="p">Cape Town</Text>
                    </Flex>
                </Box>
                <Box paddingLeft="0.5rem">
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            31 Oct
                        </Heading>
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            Grand Arena
                        </Heading>
                        <Text variant="p" as="p" textAlign="right">Cape Town</Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex>
                <Button variant="btn" width="100%"> Purchase Tickets </Button>
            </Flex>
        </Flex>
    </Flex>
        <Image
            marginTop="2rem"
            width="100%"
            height="500px"
            src={Image1}
        />
    </Box>
  )
}

export default BoysIIMen