
import HomeAbout from "../components/HomeAbout"
import UpcomingEventsSwiper from "../components/UpcomingEventsSwiper"
import HomeServices from "../components/HomeServices"
import UpcomingEventsTile from "../components/UpcomingEventsTile"
import { Box } from "@chakra-ui/react"



const Home = () => {

  return (
    <>
      <Box maxWidth="100%">
        <UpcomingEventsSwiper/>
        <UpcomingEventsTile/>
        <HomeAbout/>
        <HomeServices/>
      </Box>
    </>
  )
}

export default Home