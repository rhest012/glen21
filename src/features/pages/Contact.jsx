import React from 'react'
import ContactHeader from '../../assets/Glen21_Header.jpg'
import { Box, Flex, FormControl, Grid, GridItem, HStack, Heading, Image, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import ContactImage from '../../assets/Crowd_2.jpg'
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
    const inputStyle = {
        border:"none",
        borderRadius:"0",
        borderBottom:"1px solid #000",
        fontSize: "0.85rem",
        fontFamily: "Inter, Arial, 'Helvetica Neue', Helvetica, sans-serif",

        _placeholder:{
            color: "#000",
        }
    }
  return (
   <>
    <Flex 
        width="100%"
        height="31vh"
        backgroundImage= {ContactHeader}
        backgroundPosition="center"
        backgroundSize="contain"
        paddingX="2rem"
        alignItems="center"
    >
        <Heading 
            variant="h1" 
            as="h1"
            color="#fff"
        >
            Contact
        </Heading>
    </Flex>
    <Grid gridTemplateColumns="50% 50%" width="100%" height="60vh"> 
        <GridItem>
            <Flex flexDirection="column" justifyContent="center" width="100%">
                <Box
                    height="50px"
                    borderRight="1px solid #000"
                />
                <Image
                    src={ContactImage}
                    margin="auto"
                    height="375px"
                    width="600px"
                />
                <Box
                    height="50px"
                    borderRight="1px solid #000"
                />
            </Flex>
        </GridItem>
        <GridItem paddingX="3rem" width="100%">
            <Flex 
                flexDirection="column" 
                height="100%" 
                justifyContent="center"  
                gap="3rem"
            >
                <Stack>
                    <Heading variation="h3" textTransform="uppercase" textAlign="left">
                        Get In Touch
                    </Heading>
                    <Text variant="p">
                        If you are looking for an agency that prides itself on being an industry leader when it comes to everything events, feel free to get in touch with the Glen21 team by dropping us a mail.
                    </Text>
                </Stack>
                <Stack width="100%">
                    <Input
                        sx={inputStyle}
                        type='text'
                        placeholder='Full Name'/>
                    
                    <Input
                        sx={inputStyle}
                        type="email"
                        placeholder='Email Address'
                    />
                    
                    <Textarea
                        placeholder='Message'
                        sx={inputStyle}
                    />    
                </Stack>
                
                <Flex justifyContent="space-between">
                    <Text variant="p">
                        Building 2, 4 Karen Str, Bryanston | + 27 87 805 9023
                    </Text>
                    <Flex gap="2rem" justifyContent="flex-end">
                        <Link>
                            <FaFacebookF fontSize="1.25rem"/>  
                        </Link>
                        <Link>
                            <FaInstagram fontSize="1.25rem"/>  
                        </Link>
                        <Link>
                            <FaTwitter fontSize="1.25rem"/>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </GridItem>
    </Grid>
   </>
  )
}

export default Contact