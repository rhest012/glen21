import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import swv from '../../assets/Image_02.jpg'
import Nickfest from '../../assets/Image_03.jpg'
import AboutHeader from '../../assets/Glen21-Header-01.jpg'

const About = () => {
  return (
    <>
    <Flex 
        width="100%"
        height="400px"
        backgroundImage= {AboutHeader}
        paddingX="2rem"
        alignItems="center"
    >
        <Heading 
            variant="h1" 
            as="h1"
            color="#fff"
        >
            About
        </Heading>

    </Flex>
    <Box marginY="4rem" overflow="hidden" >
        <Text variant="p" as="p" margin="2rem">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, illum quae? Atque natus magni, nihil cum pariatur quidem praesentium ad suscipit magnam eum porro rerum sunt, corrupti dolore! Earum culpa quam exercitationem, illum provident a aliquam minima qui corporis ducimus nam deserunt. At sapiente fuga saepe obcaecati, illum itaque molestiae qui non fugiat officiis? Quibusdam vel quod quaerat numquam accusamus.
        </Text>
        <Grid gridTemplateColumns="repeat(3, 1fr)" marginBottom="2rem" marginX="2rem" height="100%">
            <GridItem height="100%">
                <Flex flexDirection="column" justifyContent="center" alignItems="flex-end" padding="1rem" height="100%">
                    <Box
                        height="50px"
                        borderRight="1px solid #000"
                    />
                    <Image
                        src={swv}
                        height="650px"
                        padding="1rem"
                    />
                    <Box
                        height="50px"
                        borderRight="1px solid #000"
                    />
                </Flex>
            </GridItem>
            <GridItem height="100%">
                <Flex flexDirection="column" justifyContent="center" alignItems="flex-end" padding="1rem" height="100%">
                    <Box
                        height="50px"
                        borderRight="1px solid #000"
                    />
                    <Image
                        src={swv}
                        height="650px"
                        padding="1rem"
                    />
                    <Box
                        height="50px"
                        borderRight="1px solid #000"
                    />
                </Flex>
            </GridItem>
            <GridItem height="100%">
                <Flex flexDirection="column" justifyContent="center" alignItems="flex-end" padding="1rem">
                    <Box
                        height="50px"
                        borderRight="1px solid #000"
                    />
                    <Heading variant="h3" as="h3">
                        Vision
                    </Heading>
                    <Text variant="p" marginBottom= "0">
                        Glen21 is working to be Africa’s trusted, one-stop entertainment solutions agency.
                    </Text>
                    <Box
                        height="50px"
                        borderRight="1px solid #000"
                    />
                </Flex>
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
    </>
  )
}

export default About