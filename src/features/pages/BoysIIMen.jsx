import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import BoysiiMen from '../../assets/Boyz2Men_Cover.jpg'

import React from 'react'

const BoysIIMen = () => {
    const venueStyling = {
        fontSize: "1rem"
    }
  return (
    <Box marginTop="2rem" height="91vh">
    <Flex marginX="2rem">
        <Flex width="70%" flexDir="column" gap="1rem" borderRight="1px solid #000" paddingRight="2rem" paddingY="1rem" height="260px" >     
            <Heading variant="h1" textAlign="right">
                Boys II Men South <br/>Africa Tour
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
                            2 November
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling} textAlign="right">
                            Time Square
                        </Heading>
                        <Text variant="p" as="p" textAlign="right">Pretoria</Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex justifyContent="space-between" width="100%">
                <Box paddingRight="0.5rem">
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            4 November
                        </Heading>
                        <Heading variant="h6" as="h6" sx={venueStyling}>
                            Suncity Superbowl
                        </Heading>
                        <Text variant="p" as="p">Sun City</Text>
                    </Flex>
                </Box>
                <Box paddingLeft="0.5rem">
                    <Flex justifyContent="center" flexDirection="column">
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            31 Oct
                        </Heading>
                        <Heading variant="h6" as="h6" textAlign="right" sx={venueStyling}>
                            Durban ICC
                        </Heading>
                        <Text variant="p" as="p" textAlign="right">Durban</Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex>
                
                <Link 
                    href='https://www.ticketpros.co.za/portal/web/index.php/parent_event/810aa03b-d57e-d4eb-10a4-63fe581c39ac?sort_order=A-Z&category=music&province=&from=&to=' 
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
            src={BoysiiMen}
        />
    </Box>
  )
}

export default BoysIIMen