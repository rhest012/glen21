import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import TamiaBackground from './../../assets/Tamia_Cover.jpg'
import BiiMenBackground from './../../assets/Boyz2Men_Header.jpg'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/autoplay'
import '../../styles/index.css'

// import required modules
import { Box, Flex, Link} from '@chakra-ui/react';
import { Link as ReachLink} from 'react-router-dom'
import { motion } from 'framer-motion'

const UpcomingEventsSwiper = () => {
    const sliderContainer = {
        height:"88vh",
        width:"100vw",
        bgSize:"cover",
        bgPosition:"center",
        bgRepeat:"no-repeat",
        padding:"2rem",
    }
    
    // Framer Motion
    const MotionBox = motion(Box);
    const headerVariants = {
        hidden: {
            y: -1440,
            transition: {delay: 1, duration: 1.2}
          },
          visible: {
            y: 0,
            transition: {delay: 1, duration: 1.2}
          },
          exit: {
            y: -1440,
            transition: {delay: 1, duration: 1.2}
          } 
        }

  return (
    <>
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{
            clickable: true,
            }}
            className="Upcoming-events-swiper"
      >
        <SwiperSlide
        
        >
            <MotionBox
                sx={sliderContainer}
                backgroundImage={TamiaBackground}
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                exit= 'exit'

            >
                <Flex width="100%" height="100%" flexDirection="column" justifyContent="flex-end" alignItems="flex-end" >
                    <Link 
                        marginRight="6rem"
                        marginTop="1rem"
                        textAlign="center"
                        fontWeight="600"
                        variant="btn" 
                        paddingY="0.5rem"
                        width="40%" 
                        borderRadius="2rem"
                        border="1px solid #fff"
                        background="transparent"
                        color="#fff"
                        textTransform="uppercase"
                        _hover = {{
                            background: "#fff",
                            color : "#161629"
                        }}
                        as={ReachLink} to="/tamia"
                    >
                        Explore
                    </Link>
                   
                </Flex>
            </MotionBox>
        </SwiperSlide>
        <SwiperSlide>
        <Box
            height="88vh"
            width="100vw"
            backgroundImage={BiiMenBackground}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            padding="2rem"
        >
            <Flex width="100%" height="100%" flexDirection="column" justifyContent="flex-end" alignItems="flex-end" >
                <Link 
                    marginRight="6rem"
                    marginTop="1rem"
                    textAlign="center"
                    fontWeight="600"
                    variant="btn" 
                    paddingY="0.5rem"
                    width="40%" 
                    borderRadius="2rem"
                    border="1px solid #fff"
                    background="transparent"
                    color="#fff"
                    textTransform="uppercase"
                    _hover = {{
                        background: "#fff",
                        color : "#161629"
                    }}
                    as={ReachLink} to="/boys"
                >
                    Explore
                </Link>
            </Flex>
        </Box>

        </SwiperSlide>
        </Swiper>
    </>
  )
}

export default UpcomingEventsSwiper