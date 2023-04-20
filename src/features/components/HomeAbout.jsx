import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import HomeImage from "../../assets/Bas_JHB.jpg"

const HomeAbout = () => {
  return (
    <Box marginY="6rem">
    <Grid gridTemplateColumns="50% 50%">
      <GridItem height="100%" paddingY="2rem">
        <Image
          src={HomeImage}
          height="550px"
          width="550px"
          marginX="auto"
          marginY="auto"
        />
      </GridItem>
      <GridItem height="100%"> 
        <Flex height="100%" flexDir="column" justifyContent="space-between">
          <Box
            height="50px"
            borderLeft="1px solid #000"
          />
          <Flex flexDir="column" paddingX="3rem" flexWrap="wrap" alignItems="center" >
            <Heading variant="h3" as="h3" textAlign="center" paddingBottom="2rem">
              One stop entertainment solutions agency
            </Heading>
            <Text variant="p" textAlign="center">
            Glen21 is a passionate lifestyle company with the ability to produce excellent, large scale events by establishing links between culture, consumers, and brands.<br/><br/>
            Glen21 knows that with hard work and dedication we will soon be known as Africa’s one-stop entertainment solutions agency.
            </Text>
          </Flex>
          <Box
            height="50px"
            borderLeft="1px solid #000"
          />
        </Flex>
      </GridItem>
    </Grid>
    </Box>
  )
}

export default HomeAbout