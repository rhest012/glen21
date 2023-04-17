import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import swv from '../../assets/Image_02.jpg'
import Nickfest from '../../assets/Image_03.jpg'

const About = () => {
  return (
    <Box marginTop="2rem" overflow="hidden" >
        <Text variant="p" as="p" margin="2rem">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, illum quae? Atque natus magni, nihil cum pariatur quidem praesentium ad suscipit magnam eum porro rerum sunt, corrupti dolore! Earum culpa quam exercitationem, illum provident a aliquam minima qui corporis ducimus nam deserunt. At sapiente fuga saepe obcaecati, illum itaque molestiae qui non fugiat officiis? Quibusdam vel quod quaerat numquam accusamus.
        </Text>
        <Grid gridTemplateColumns="50% 50%" marginBottom="2rem">
            <GridItem marginX="2rem">
                <Flex justifyContent="center" alignItems="flex-end">
                    <Image
                        src={swv}
                        height="650px"
                    />
                </Flex>
            </GridItem>
            <GridItem marginX="2rem" height="650px" className='about-text-container'>
                    <Heading variant="h3" as="h3">
                        Background
                    </Heading>
                    <Text variant="p">
                        Glen21 is recognised as an agency which exceeds it’s clients’ expectations with use of the best in supporting stakeholders, partners and suppliers.
                    </Text>
                    <Image
                        src={Nickfest}
                        width="650px"
                    />
               
            </GridItem>
        </Grid>

        <Grid gridTemplateColumns="50% 50%" marginY="4rem">
            <GridItem marginX="2rem" height="650px" className='about-text-container'>
                <Image
                    src={Nickfest}
                    width="650px"
                    marginBottom="1rem"
                />
                <Heading variant="h3" as="h3">
                    Vision
                </Heading>
                <Text variant="p" marginBottom= "0">
                    Glen21 is working to be Africa’s trusted, one-stop entertainment solutions agency.
                </Text>
                </GridItem>
            <GridItem marginX="2rem">
                <Flex justifyContent="center" alignItems="flex-end">
                    <Image
                        src={swv}
                        height="650px"
                    />
                </Flex>
            </GridItem>
        </Grid>

        <Grid gridTemplateColumns="50% 50%" marginBottom="2rem">
            <GridItem marginX="2rem">
                <Flex justifyContent="center" alignItems="flex-end">
                    <Image
                        src={swv}
                        height="650px"
                    />
                </Flex>
            </GridItem>
            <GridItem marginX="2rem" height="650px" className='about-text-container'>
                    <Heading variant="h3" as="h3">
                        Mission
                    </Heading>
                    <Text variant="p">
                        Glen21 is recognised as an agency which exceeds it’s clients’ expectations with use of the best in supporting stakeholders, partners and suppliers.
                    </Text>
                    <Image
                        src={Nickfest}
                        width="650px"
                    />
               
            </GridItem>
        </Grid>
    </Box>
  )
}

export default About