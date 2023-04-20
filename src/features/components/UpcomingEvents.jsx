import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Glen21Logo from '../../assets/Glen_21_Logo.svg'
import TamiaImage from '../../assets/Tamia_Square.jpg'
import BiiMImage from '../../assets/BIIM_Square.jpg'
import { Link } from 'react-router-dom'

const UpcomingEvents = () => {
    const flexContainerStyling = {
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        
        paddingX:"1rem",
      }
    
      const showContainerStyling = {
        marginTop: "8rem",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        flexDirection: "column",
        alignContent: "flex-end",
    
      }

  return (
    <Flex
      h="91vh"
      w="100vw"
    >
      
        <Flex 
          width="30%" 
          sx={flexContainerStyling} 
          borderRight="1px solid #000" 
          gap="8rem"
          flexDirection= "column"
        
          top="0"
          left="0"
          
        >
          {/* <video
            src='url(https://www.youtube.com/watch?v=K1qWvFE30jo)' 
            autoPlay 
            loop 
            muted
            width="100%"
            height="100%"
            objectFit="cover"
          /> */}
          <Image
            src={Glen21Logo}
            width="300px"
          />
          <Heading variant="h1" textAlign="center">
            Upcoming Shows
          </Heading>
        </Flex>
      <Flex width="70%" height="100%" flexDir="column">
          <Grid gridTemplateColumns="1fr 1fr 1fr" width="100%" height="50%">
            <GridItem 
              backgroundImage={TamiaImage}
              backgroundSize="cover"
            >
              <Flex sx={showContainerStyling}>
                <Heading 
                  variant="h6" 
                  textAlign="center" 
                  color="#eece78"
                >
                  4 - 8 July
                </Heading>
                <Link to="/boys">
                  <Button
                
                    borderRadius="3rem"
                    color="#151627"
                    width="120px"
                    border= "1px solid #fff"
                    background="#fff"
                    _hover= {{
                      background:"none",
                      color:"#fff"
                    }}
                  >
                    Explore
                  </Button>
                </Link>
              </Flex>
            </GridItem>
            <GridItem
              backgroundImage={BiiMImage}
              backgroundSize="cover"
            >
              <Flex sx={showContainerStyling}>
                <Heading 
                  variant="h6" 
                  textAlign="center" 
                  color="#fff"
                >
                  4 - 8 July
                </Heading>
                <Link to="/boys">
                  <Button
                    
                    borderRadius="3rem"
                    color="#151627"
                    width="120px"
                    border= "1px solid #fff"
                    background="#fff"
                    _hover= {{
                      background:"none",
                      color:"#fff"
                    }}
                  >
                    Explore
                  </Button>
                </Link>
              </Flex>
            </GridItem>
            <GridItem
              backgroundImage={TamiaImage}
              backgroundSize="cover"
            >
              <Flex sx={showContainerStyling}>
                <Heading 
                  variant="h6" 
                  textAlign="center" 
                  color="#eece78"
                >
                  4 - 8 July
                </Heading>
                <Button
                  borderRadius="3rem"
                  color="#151627"
                  width="120px"
                  border= "1px solid #eece78"
                  background="#eece78"
                  _hover= {{
                    background:"none",
                    color:"#eece78"
                  }}
                >
                  Explore
                </Button>
              </Flex>
            </GridItem>
          </Grid>
          <Grid gridTemplateColumns="1fr 1fr 1fr" width="100%" height="50%">
            <GridItem
              backgroundImage={BiiMImage}
              backgroundSize="cover"
            >
              <Flex sx={showContainerStyling}>
                <Text textAlign="center">
                  Show 2
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              backgroundImage={TamiaImage}
              backgroundSize="cover"
            >
              <Flex sx={showContainerStyling}>
                <Text textAlign="center">
                  Show 2
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              backgroundImage={BiiMImage}
              backgroundSize="cover"
            >
              <Flex sx={showContainerStyling}>
                <Text textAlign="center">
                  Show 2
                </Text>
              </Flex>
            </GridItem>
          </Grid>
      </Flex>
    </Flex>
  )
}

export default UpcomingEvents