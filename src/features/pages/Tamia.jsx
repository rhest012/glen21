import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import TamiaImage from '../../assets/Tamia_Header.jpg'
import React from 'react'

const BoysIIMen = () => {
    const venueStyling = {
        fontSize: "1rem"
    }
  return (
    <Box marginTop="2rem" height="91vh" overflow="scroll">
    <Flex marginX="2rem">
        <Flex width="70%" flexDir="column" gap="1rem" borderRight="1px solid #000" paddingRight="2rem" paddingY="1rem" height="260px" >     
            <Heading variant="h1" textAlign="right">
                Tamia Live<br/> in South Africa
            </Heading>
            <Text variant="p" textAlign="right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit sagittis diam et bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque quis scelerisque libero. Aenean metus tortor, fringilla quis odio vitae, pretium egestas lectus.
            </Text>
        </Flex>
        <Flex width="30%" paddingLeft="2rem" paddingY="1rem"  flexDir="column" alignContent="space-between" justifyContent="space-between" height="260px">
            <Flex justifyContent="space-between" width="100%">
                <Box paddingRight="0.5rem">
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            4 July
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            Grand West
                        </Heading>
                        <Text variant="p" as="p">Cape Town</Text>
                    </Flex>
                </Box>
                <Box paddingLeft="0.5rem">
                    <Flex  justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            7 July 
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling} textAlign="right">
                            Durban ICC
                        </Heading>
                        <Text variant="p" as="p" textAlign="right">Durban</Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex justifyContent="space-between" width="100%">
                <Box paddingRight="0.5rem">
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            8 July
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            Time Square
                        </Heading>
                        <Text variant="p" as="p">Pretoria</Text>
                    </Flex>
                </Box>
                <Box paddingLeft="0.5rem">
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            9 July
                        </Heading>
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            Time Square
                        </Heading>
                        <Text variant="p" as="p" textAlign="right">Pretoria</Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex>
                <Link 
                    href='https://www.ticketpros.co.za/portal/web/index.php/parent_event/1915f22b-8cf5-c5c3-9449-642286c5cad5' 
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
                </Link>
            </Flex>
        </Flex>
    </Flex>
        <Image
            marginTop="2rem"
            width="100%"
            height="400px"
            src={TamiaImage}
        />
    </Box>
  )
}

export default BoysIIMen