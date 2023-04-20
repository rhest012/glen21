import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import TamiaBackground from './../../assets/Tamia_Cover.jpg'
import BiiMenBackground from './../../assets/Boyz2Men_Header.jpg'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/autoplay'
import '../../styles/index.css'

// import required modules
import { Box, Button, Flex, Link} from '@chakra-ui/react';
import { Link as ReachLink} from 'react-router-dom'

const UpcomingEventsSwiper = () => {
  return (
    <>
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{
            clickable: true,
            }}
            scrollbar={{ draggable: true }}
            className="Upcoming-events-swiper"
      >
        <SwiperSlide
        
        >
            <Box
                height="91vh"
                width="100vw"
                backgroundImage={TamiaBackground}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                padding="2rem"
            >
                <Flex width="100%" height="100%" flexDirection="column" justifyContent="flex-end" alignItems="flex-end" >
                        <Link 
                            marginRight="6rem"
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
            </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box
            height="91vh"
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