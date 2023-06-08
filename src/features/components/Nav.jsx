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

import {Link, Link as RouterLink} from 'react-router-dom'
import placeHolderImage from "../../assets/previousShows/Glen21_ScorpionKings.jpg"
import NickFest from '../../assets/Header/NickFest.jpg'
import TheDome from '../../assets/Header/TheDome.jpg'
import Swv from '../../assets/Header/SWV.jpg'
import Glen21Logo from '../../assets/Glen_21_Logo.svg'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'


const Nav = () => {
    const linkStyling = {
        width: "100vw",
        marginY:"0",
        position: "relative",
        display:"flex",
        flexDir:"row",
        flexWrap:"wrap",
        borderTop:"none",
        colorScheme: "none",
        _hover: {
            textDecoration: "none",
            background: "transparent",
        }
    }

    const menuGridStyling = {
        gridTemplateColumns: { base: "100%",  sm:"100%", md:"40% 30% 30%", lg: "40% 30% 30%",  xl: "40% 30% 30%"},  
        width:"100%"
    }

    const menuItemStyling = {
        fontFamily:"Inter, Arial, 'Helvetica Neue', Helvetica, sans-serif",
        fontSize:"3rem",
        fontWeight:"600",
        textTransform:"uppercase",
        maxHeight: "200px"
    }

    const menuImageStyling = {
        height:{ base: "0", md: "140px", lg:"140px", xl: "140px" },
        borderRadius:"1rem",
    }

    const menuTextStyling = {
        textTransform: "none",
        display: { base: "block", sm: "block",  md:"none", lg:"block", xl:"block"}
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


    // Framer Motion
    const MotionText = motion(Text);
    const MotionHeading = motion(Heading);
    const MotionImage = motion(Image);

    const logoVariants = {
        hidden: {
          opacity: 0,
          x: -50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 1}
        },
        exit: {
          opacity: 0,
          x: 50,
          transition: { duration: 1}
        }
      }

    const headingVariants = {
        hidden: {
          opacity: 0,
          x: -50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 1}
        },
        exit: {
          opacity: 0,
          x: -50,
          transition: { duration: 1}
        }
    }

    const menuButtonVariants = {
        hidden: {
          opacity: 0,
          x: 50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 1}
        },
        exit: {
          opacity: 0,
          x: 50,
          transition: { duration: 1}
        }
    }

    // Check if sticky header should be implemented
    const [sticky, setSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <Box maxHeight="100vh" overflow="hidden" background="#faf9f6">
        <Flex 
            justifyContent="space-between" 
            alignItems="flex-end"
            borderBotom="1px solid #000"
            paddingX="2rem"
            paddingY="1rem"
            height="10vh"
        >
            <Link as={RouterLink} to='/'>
                <MotionImage
                    src={Glen21Logo}
                    width="150px"
                    variants={logoVariants}
                    // initial="hidden"
                    // animate="visible"
                    // exit= 'exit'
                />
            </Link>
        <Menu 
            closeOnSelect="true"
        >
            <MenuButton as="button" textSize="2.33rem" textTransform="uppercase"> 
                <MotionHeading 
                    variant="h6"
                    variants={menuButtonVariants}
                    // initial="hidden"
                    // animate="visible"
                    // exit= 'exit'
                >
                    Menu
                </MotionHeading>
            </MenuButton>
            <MenuList 
                width="100vw"
                height="91vh"
                zIndex="100"
            >
                <Box>
                    <Link 
                        as={RouterLink} 
                        className="menu-item-container"
                        activeClassName="active-menu-item"
                        to='/'
                        sx={linkStyling}
                    >
                        <MenuItem  
                            className="menu-item-container"
                        >
                            <Grid sx={menuGridStyling}>
                                <GridItem display="flex" alignItems="flex-end">
                                    <MotionHeading  
                                        sx={menuItemStyling}
                                    >
                                        Home
                                    </MotionHeading>
                                </GridItem>
                                <GridItem sx={menuItemContainerStyling}>
                                    <MotionText 
                                        variant="p" 
                                        sx={menuTextStyling}
                                    >
                                        Introduction and upcoming shows
                                    </MotionText>
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
                    </Link>
                    <Link 
                        as={RouterLink} 
                        to='/background'
                        sx={linkStyling}
                    >
                        <MenuItem 
                            className="menu-item-container"
                        >
                            <Grid sx={menuGridStyling}>
                                <GridItem display="flex" alignItems="flex-end">
                                    <Heading sx={menuItemStyling}>
                                        Background
                                    </Heading>
                                </GridItem>
                                <GridItem sx={menuItemContainerStyling}>
                                    <Text variant="p" sx={menuTextStyling}>
                                        history and ethos
                                    </Text>
                                </GridItem >
                                <GridItem sx={menuImageContainerStyling}> 
                                    <Image
                                        src={NickFest}
                                        sx={menuImageStyling}
                                        className="menu-item-image"
                                    />
                                </GridItem>
                            </Grid>
                        </MenuItem>
                    </Link>
                    <Link 
                        as={RouterLink} 
                        to='/previous-shows'
                        sx={linkStyling}
                        activeClassName="active-menu-item"
                    >
                        <MenuItem 
                            className="menu-item-container"
                        >
                            <Grid sx={menuGridStyling}>
                                <GridItem display="flex" alignItems="flex-end">
                                    <Heading  sx={menuItemStyling}>
                                        Previous Shows
                                    </Heading>
                                </GridItem>
                                <GridItem sx={menuItemContainerStyling}>
                                    <Text variant="p" sx={menuTextStyling}>
                                        Image galleries of previous shows
                                    </Text>
                                </GridItem >
                                <GridItem sx={menuImageContainerStyling}> 
                                    <Image
                                        src={TheDome}
                                        sx={menuImageStyling}
                                        className="menu-item-image"
                                    />
                                </GridItem>
                            </Grid>
                        </MenuItem>
                    </Link>
                    <Link 
                        as={RouterLink} 
                        to='/contact'
                        sx={linkStyling}
                        activeClassName="active-menu-item"
                    >
                        <MenuItem 
                            className="menu-item-container"
                        >
                            <Grid sx={menuGridStyling}>
                                <GridItem display="flex" alignItems="flex-end">
                                    <Heading  sx={menuItemStyling}>
                                        Contact
                                    </Heading>
                                </GridItem>
                                <GridItem sx={menuItemContainerStyling}>
                                    <Text variant="p" sx={menuTextStyling}>
                                        Contact details and socials
                                    </Text>
                                </GridItem >
                                <GridItem sx={menuImageContainerStyling}> 
                                    <Image
                                        src={Swv}
                                        sx={menuImageStyling}
                                        className="menu-item-image"
                                    />
                                </GridItem>
                            </Grid>
                        </MenuItem>
                    </Link>
                </Box>
                <Box>
                    <Flex padding="1rem" width="100%" height="100%" justifyContent="flex-end" alignContent="flex-end">
                        <Text variant="p"  width="100%" height="100%">
                            Africa's premium eventing agency since 2008
                        </Text>
                    </Flex>
                </Box>
            </MenuList>
        </Menu>
        </Flex>
    </Box>
    </>
  )
}

export default Nav