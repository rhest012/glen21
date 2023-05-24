import React from 'react'
import {useRef, useEffect, useState} from 'react'
import { motion } from 'framer-motion';
import useFetch from '../../actions/usefetch';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Box, Flex, Heading } from '@chakra-ui/react'
import ToniBraxton from '../../assets/previousShows/Glen21_ToniBraxton.jpg'

const PrevShowsGallery = ({prevShows}) => {
    
    const imageContainerStyle = {
        justifyContent:"center",
        alignItems:"center",
        marginX:"2rem",
        height:"533px",
        minWidth:"800px",
        position:"relative",
        borderRadius:"1rem",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        pointerEvents: "none"
    }
    
    // Fetch Data
   

    // Framer Motion
    const MotionHeading = motion(Heading);
    const MotionBox = motion(Box);

    // const [width, setWidth] = useState(0);
    // const carousel = useRef()

    
    // Gsap
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    console.log(triggerRef)
    console.log(sectionRef)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
          const pin = gsap.fromTo(
            sectionRef.current,
            {
              translateX: 0,
            },
            {
              translateX: "-90vw",
              ease: "none",
              duration: 1,
              scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 1,
                pin: true,
              },
            }
          );
          return () => {
            pin.kill();
          };
      }, []);

  return (
    <> 
    
        <>
          <Box>
            <MotionBox 
              overflow="hidden"
              ref={triggerRef}
              
          >
            <MotionBox 
              marginY="6rem" 

              display="flex"
              ref={sectionRef}
              >
                  <>
                    <Flex
                      sx={imageContainerStyle}
                    
                      backgroundImage= {ToniBraxton}
                      width="100px"
                    >
                    <Heading variant="h2" color="white" position="absolute">
                      Toni Braxton
                    </Heading>
                    </Flex>
                    <Flex
                      sx={imageContainerStyle}
                    
                      backgroundImage= {ToniBraxton}
                      width="100px"
                    >
                    <Heading variant="h2" color="white" position="absolute">
                      Toni Braxton
                    </Heading>
                    </Flex>
                    <Flex
                      sx={imageContainerStyle}
                      backgroundImage= {ToniBraxton}
                      width="100px"
                    >
                    <Heading variant="h2" color="white" position="absolute">
                      Toni Braxton
                    </Heading>
                    </Flex>
                  </>
              </MotionBox>
            </MotionBox>
          </Box>
        </>
     
    </>
  )
}

export default PrevShowsGallery