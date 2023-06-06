import { Box } from '@chakra-ui/react'
import Header from '../components/Header'
import PrevShowsGallery from '../components/prevShowsGallery'


const PreviousShows = () => {

  return (
    <> 
      <Box data-scroll-section>
        <Header />
        <PrevShowsGallery/>
      </Box>
    </>
  )
}

export default PreviousShows