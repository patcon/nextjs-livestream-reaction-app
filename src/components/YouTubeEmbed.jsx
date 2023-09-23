import React from 'react'
import YouTube from 'react-youtube'
import useVideoPlayer from '@/hooks/use-video-player'

const YouTubeEmbed = ({ videoId }) => {
  const { setPlayer } = useVideoPlayer();

  const opts = {
    // Simplified UI and prevents user from being logged in for embed.
    // See: https://github.com/tjallingt/react-youtube/issues/185#issuecomment-470440627
    host: "https://www.youtube-nocookie.com",
    // See: https://developers.google.com/youtube/player_parameters
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      rel: 0,
    },
  }
  const onStateChange = (event) => {
    console.log(event.data)
  }
  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      // For some reason the core plugin doesn't work:
      // See: https://tailwindcss.com/docs/aspect-ratio
      // Using @tailwindcss/aspect-ratio instead:
      // See: https://github.com/tailwindlabs/tailwindcss-aspect-ratio
      className="aspect-w-16 aspect-h-9"
      iframeClassName="youtube-iframe"
      onStateChange={onStateChange}
      onReady={(event) => {
        setPlayer(event.target)
      }}
    />
  )
}

export default YouTubeEmbed
