import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    Flex,
    Heading,
    Box,
    Text,
    Grid,
    GridItem,
  } from '@chakra-ui/react'
  import placeHolderImage from "../../assets/previousShows/Glen21_ScorpionKings.jpg"
  import Glen21Logo from '../../assets/Glen_21_Logo.svg'
import { Link } from 'react-router-dom'


const Nav = () => {
    const menuItemStyling = {
        fontFamily:"Inter, Arial, 'Helvetica Neue', Helvetica, sans-serif",
        fontSize:"3rem",
        fontWeight:"600",
        textTransform:"uppercase",
        maxHeight: "200px"
    }

    const menuImageStyling = {
        height:"120px",
        borderRadius:"1rem",
    }

    const menuItemContainerStyling = {
        display:"flex", 
        alignItems:"flex-end"
    }

    const menuImageContainerStyling = {
        display:"flex", 
        alignItems:"flex-end",
        justifyContent:"flex-end", 
        paddingRight:"1rem"
    }

  return (
    <>
    <Box maxHeight="100vh" overflow="hidden">
        <Flex 
            justifyContent="space-between" 
            alignItems="flex-end"
            borderBotom="1px solid #000"
            paddingX="2rem"
            paddingY="1rem"
            height="10vh"
        >
            <Image
                src={Glen21Logo}
                width="150px"
            />
        <Menu 
            closeOnSelect="true"
        >
            <MenuButton as="button" textSize="2.33rem" textTransform="uppercase"> 
                <Heading variant="h6">
                    Menu
                </Heading>
            </MenuButton>
            <MenuList 
                width="100vw"
                height="91vh"
                zIndex="100"
                display="flex"
                flexDir="row"
                flexWrap="wrap"
                borderTop="none"
            >
                <MenuItem 
                    className="menu-item-container"
                    as='a' 
                    href='/'
                >
                    <Grid gridTemplateColumns="40% 30% 30%"  width="100%">
                        <GridItem display="flex" alignItems="flex-end">
                            <Heading  sx={menuItemStyling}>
                                Home
                            </Heading>
                        </GridItem>
                        <GridItem sx={menuItemContainerStyling}>
                            <Text variant="p" textTransform="none">
                                Introduction and upcoming shows
                            </Text>
                        </GridItem >
                        <GridItem sx={menuImageContainerStyling}> 
                            <Image
                                src={placeHolderImage}
                                sx={menuImageStyling}
                              
                            />
                        </GridItem>
                    </Grid>
                </MenuItem>
                <MenuItem 
                    className="menu-item-container"
                    as='a' 
                    href='/background'
                >
                    <Grid gridTemplateColumns="40% 30% 30%"  width="100%">
                        <GridItem display="flex" alignItems="flex-end">
                            <Heading sx={menuItemStyling}>
                                Background
                            </Heading>
                        </GridItem>
                        <GridItem sx={menuItemContainerStyling}>
                            <Text variant="p" textTransform="none">
                                history and ethos
                            </Text>
                        </GridItem >
                        <GridItem sx={menuImageContainerStyling}> 
                            <Image
                                src={placeHolderImage}
                                sx={menuImageStyling}
                                className="menu-item-image"
                            />
                        </GridItem>
                    </Grid>
                </MenuItem>
                <MenuItem 
                    className="menu-item-container"
                    as='a' 
                    href='/previous-shows'
                >
                    <Grid gridTemplateColumns="40% 30% 30%"  width="100%">
                        <GridItem display="flex" alignItems="flex-end">
                            <Heading  sx={menuItemStyling}>
                                Previous Shows
                            </Heading>
                        </GridItem>
                        <GridItem sx={menuItemContainerStyling}>
                            <Text variant="p" textTransform="none">
                                Image galleries of previous shows
                            </Text>
                        </GridItem >
                        <GridItem sx={menuImageContainerStyling}> 
                            <Image
                                src={placeHolderImage}
                                sx={menuImageStyling}
                                className="menu-item-image"
                            />
                        </GridItem>
                    </Grid>
                </MenuItem>
                <MenuItem 
                    className="menu-item-container"
                    as='a' 
                    href='/contact'
                >
                    <Grid gridTemplateColumns="40% 30% 30%"  width="100%">
                        <GridItem display="flex" alignItems="flex-end">
                            <Heading  sx={menuItemStyling}>
                                Contact
                            </Heading>
                        </GridItem>
                        <GridItem sx={menuItemContainerStyling}>
                            <Text variant="p" textTransform="none">
                                Contact details and socials
                            </Text>
                        </GridItem >
                        <GridItem sx={menuImageContainerStyling}> 
                            <Image
                                src={placeHolderImage}
                                sx={menuImageStyling}
                                className="menu-item-image"
                            />
                        </GridItem>
                    </Grid>
                </MenuItem>
                <Flex padding="1rem" width="100%">
                    <Text variant="p"  width="100%">
                        Africa's premium eventing agency since 2008
                    </Text>
                </Flex>
            </MenuList>
        </Menu>
        </Flex>
    </Box>
    </>
  )
}

export default Nav