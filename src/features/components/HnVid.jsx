import YouTube, { YouTubeProps } from 'react-youtube';


const HnVid = () => {
    
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '700px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    return <YouTube videoId="jvhGJKcwgTc" opts={opts} onReady={onPlayerReady} />;
}

export default HnVid