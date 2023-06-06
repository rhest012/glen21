
import HomeAbout from "../components/HomeAbout"
import UpcomingEventsSwiper from "../components/UpcomingEventsSwiper"
import HomeServices from "../components/HomeServices"
import UpcomingEventsTile from "../components/UpcomingEventsTile"
import { Box } from "@chakra-ui/react"
import HnVid from "../components/HnVid"



const Home = () => {

  return (
    <>
      <Box data-scroll-section>
        <UpcomingEventsSwiper/>
        <UpcomingEventsTile/>
        <HomeAbout/>
        <HomeServices/>
      </Box>
    </>
  )
}

export default Home