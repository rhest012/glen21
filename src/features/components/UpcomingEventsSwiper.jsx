import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import TamiaBackground from "./../../assets/Tamia_Cover.jpg";
import InkabiHeader from "../../assets/Inkabi_Header.jpg";
import BiiMenBackground from "./../../assets/Boyz2Men_Header.jpg";
import HeyNeighbour from "../../assets/Hey_Neighbour_Header.jpg";
import "swiper/swiper-bundle.min.css";
import "swiper/css/autoplay";
import "../../styles/index.css";
import "swiper/css/autoplay";

// import required modules
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { motion } from "framer-motion";

const UpcomingEventsSwiper = () => {
  const sliderContainer = {
    height: { base: "25vh", sm: "33vh", md: "53vh", lg: "90vh", xl: "88vh" },
    width: "100vw",
    bgSize: "cover",
    bgPosition: "center",
    bgRepeat: "no-repeat",
    padding: "2rem",
  };

  const linkContainer = {
    marginRight: {
      base: "1rem",
      sm: "2rem",
      md: "2rem",
      lg: "6rem",
      xl: "6rem",
    },
    marginLeft: { base: "0.5rem", sm: "3rem", md: "3rem", lg: "0", xl: "0" },
    fontSize: { base: "0.65rem", sm: "0.75rem", md: "0.85rem" },
    marginBottom: { sm: "0.5rem", md: "0.5rem", lg: "0", xl: "0" },
    textAlign: "center",
    fontWeight: "600",
    variant: "btn",
    paddingY: "0.5rem",
    width: { base: "100px", sm: "20%", md: "20%", lg: "40%", xl: "40%" },
    borderRadius: "2rem",
    border: "1px solid #fff",
    background: "transparent",
    color: "#fff",
    textTransform: "uppercase",
    _hover: {
      background: "#fff",
      color: "#161629",
    },
  };

  // Framer Motion
  const MotionBox = motion(Box);
  const headerVariants = {
    hidden: {
      y: -1440,
      transition: { delay: 1, duration: 1.2 },
    },
    visible: {
      y: 0,
      transition: { delay: 1, duration: 1.2 },
    },
    exit: {
      y: -1440,
      transition: { delay: 1, duration: 1.2 },
    },
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        className="Upcoming-events-swiper"
      >
        <SwiperSlide>
          <MotionBox
            sx={sliderContainer}
            backgroundImage={InkabiHeader}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Flex
              width="100%"
              height="100%"
              flexDirection="column"
              justifyContent="flex-end"
              alignItems={{
                sm: "flex-start",
                md: "flex-start",
                lg: "flex-end",
                xl: "flex-end",
              }}
            >
              <Link
                sx={linkContainer}
                _hover={{
                  background: "#fff",
                  color: "#161629",
                }}
                as={ReachLink}
                to="/inkabi"
              >
                Explore
              </Link>
            </Flex>
          </MotionBox>
        </SwiperSlide>
        <SwiperSlide>
          <MotionBox
            backgroundImage={BiiMenBackground}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            sx={sliderContainer}
          >
            <Flex
              width="100%"
              height="100%"
              flexDirection="column"
              justifyContent="flex-end"
              alignItems={{
                sm: "flex-start",
                md: "flex-start",
                lg: "flex-end",
                xl: "flex-end",
              }}
            >
              <Link sx={linkContainer} as={ReachLink} to="/boys">
                Explore
              </Link>
            </Flex>
          </MotionBox>
        </SwiperSlide>

        <SwiperSlide>
          <MotionBox
            backgroundImage={HeyNeighbour}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            sx={sliderContainer}
          >
            <Flex
              width="100%"
              height="100%"
              flexDirection="column"
              justifyContent="flex-end"
              alignItems={{
                sm: "flex-start",
                md: "flex-start",
                lg: "flex-end",
                xl: "flex-end",
              }}
            >
              <Link sx={linkContainer} as={ReachLink} to="/hey-neighbour">
                Explore
              </Link>
            </Flex>
          </MotionBox>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default UpcomingEventsSwiper;
