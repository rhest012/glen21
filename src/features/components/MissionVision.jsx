import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import Chance from "../../assets/background/Glen21_Background1.jpg"
import Druhill from "../../assets/background/Glen21_Background2.jpg"
import ToniBraxton from "../../assets/background/Glen21_Background3.jpg"
import ScorpionKings from "../../assets/background/Glen21_Background4.jpg"
import Bas from "../../assets/background/Glen21_Background5.jpg"
import ScorpionKingsTwo from "../../assets/background/Glen21_Background6.jpg"

const MissionVission = () => {
    const imageContainerStyling = {
        flexDirection:"column", 
        justifyContent:"space-between", 
        height:"100%",
       }
    
       const serviceSeperator = {
        borderTop:"1px solid #000",
        marginLeft:"30%",
        paddingY:"1rem",
      }
    
      const missionDescription = {
        marginBottom: "0",
        textAlign:"right",
        paddingLeft:"20%"
      }
    
      const constGridStyling = {
        gridTemplateColumns:"repeat(2, 1fr)",
        marginY:"6rem",
        marginX:"2rem",
        height:"100%",
    
        _last: {
            marginY:"0"
        }
      }
    
      const portraitImageStyling = {
        height:"750px",
        width:"500px",
        borderRadius:"1rem"
      }
    
      const landscpaeImageStyling = {
        width:"700px",
        height:"467px",
        borderRadius:"1rem"
      }
      
  return (
    <Box marginY="4rem" overflow="hidden" >
    <Text variant="p" as="p" margin="2rem">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, illum quae? Atque natus magni, nihil cum pariatur quidem praesentium ad suscipit magnam eum porro rerum sunt, corrupti dolore! Earum culpa quam exercitationem, illum provident a aliquam minima qui corporis ducimus nam deserunt. At sapiente fuga saepe obcaecati, illum itaque molestiae qui non fugiat officiis? Quibusdam vel quod quaerat numquam accusamus.
    </Text>
    <Grid sx={constGridStyling}>
        <GridItem height="100%">
            <Flex sx={imageContainerStyling} flexDir="column" alignItems="center" justifyContent="center">
                <Image
                    src={ToniBraxton}
                    sx={portraitImageStyling}
                />
            </Flex>
        </GridItem>
        <GridItem width="100%" height="100%" >
            <Flex flexDir="column" justifyContent="space-between" alignContent="center" height="100%">
                <Box height="100%">
                    <Image
                        src={Chance}
                        sx={landscpaeImageStyling}
                    />
                </Box>
                <Box height="100%" display="flex" flexDir="column" justifyContent="space-between" paddingX="6rem" paddingTop="1rem">
                    <Grid gridTemplateColumns="50% 50%" >
                        <GridItem borderRight="1px solid #000" height="50px">
                            
                        </GridItem>
                        <GridItem>
                            
                        </GridItem>
                    </Grid>
                    <Heading variant="h2" as="h2">
                        Vision
                    </Heading>
                    <Box sx={serviceSeperator}/>
                    <Text sx={missionDescription} variant="p">
                        Glen21 is working to be Africa’s trusted, one-stop entertainment solutions agency.
                    </Text>
                    <Grid gridTemplateColumns="50% 50%" >
                        <GridItem borderRight="1px solid #000" height="50px">
                            
                        </GridItem>
                        <GridItem>
                            
                        </GridItem>
                    </Grid>
                </Box>
            </Flex>
        </GridItem>
    </Grid>
    <Grid sx={constGridStyling}>
        <GridItem width="100%" height="100%" >
            <Flex flexDir="column" justifyContent="space-between" alignContent="center" height="100%">
                <Box height="100%" display="flex" flexDir="column" justifyContent="space-between" paddingX="6rem" paddingBottom="1rem">
                    <Grid gridTemplateColumns="50% 50%" >
                        <GridItem borderRight="1px solid #000" height="50px">
                            
                        </GridItem>
                        <GridItem>
                            
                        </GridItem>
                    </Grid>
                    <Heading variant="h2" as="h2">
                        Mission
                    </Heading>
                    <Box sx={serviceSeperator}/>
                    <Text sx={missionDescription} variant="p">
                        Glen21 is recognised as an agency which exceeds it’s clients’ expectations with use of the best in supporting stakeholders, partners and suppliers.
                    </Text>
                    <Grid gridTemplateColumns="50% 50%" >
                        <GridItem borderRight="1px solid #000" height="50px">
                            
                        </GridItem>
                        <GridItem>
                            
                        </GridItem>
                    </Grid>
                </Box>
                <Box height="100%">
                    <Image
                        src={Druhill}
                        sx={landscpaeImageStyling}
                    />
                </Box>
            </Flex>
        </GridItem>
        <GridItem height="100%">
            <Flex sx={imageContainerStyling} flexDir="column" alignItems="center" justifyContent="center">
                <Image
                    src={ScorpionKingsTwo}
                    sx={portraitImageStyling}
                />
            </Flex>
        </GridItem>
    </Grid>
    <Grid sx={constGridStyling}>
        <GridItem height="100%">
            <Flex sx={imageContainerStyling} flexDir="column" alignItems="center" justifyContent="center">
                <Image
                    src={Bas}
                    sx={portraitImageStyling}
                />
            </Flex>
        </GridItem>
        <GridItem width="100%" height="100%" >
            <Flex flexDir="column" justifyContent="space-between" alignContent="center" height="100%">
                <Box height="100%" display="flex" flexDir="column" justifyContent="space-between" paddingX="6rem" paddingBottom="1rem">
                    <Grid gridTemplateColumns="50% 50%" >
                        <GridItem borderRight="1px solid #000" height="50px">
                            
                        </GridItem>
                        <GridItem>
                            
                        </GridItem>
                    </Grid>
                    <Heading variant="h2" as="h2">
                        Mission
                    </Heading>
                    <Box sx={serviceSeperator}/>
                    <Text sx={missionDescription} variant="p">
                        Glen21 is recognised as an agency which exceeds it’s clients’ expectations with use of the best in supporting stakeholders, partners and suppliers.
                    </Text>
                    <Grid gridTemplateColumns="50% 50%" >
                        <GridItem borderRight="1px solid #000" height="50px">
                            
                        </GridItem>
                        <GridItem>
                            
                        </GridItem>
                    </Grid>
                </Box>
                <Box height="100%">
                    <Image
                        src={ScorpionKings}
                        sx={landscpaeImageStyling}
                    />
                </Box>
            </Flex>
        </GridItem>
    </Grid>
</Box>
  )
}

export default MissionVission