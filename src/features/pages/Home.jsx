
import HomeAbout from "../components/HomeAbout"
import UpcomingEventsSwiper from "../components/UpcomingEventsSwiper"
import HomeServices from "../components/HomeServices"
import UpcomingEventsTile from "../components/UpcomingEventsTile"



const Home = () => {

  return (
    <>
      <UpcomingEventsSwiper/>
      <UpcomingEventsTile/>
      <HomeAbout/>
      <HomeServices/>
    </>
  )
}

export default Home