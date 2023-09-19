import React from 'react'
import YouTube from 'react-youtube'

import './YouTubeEmbed.css'

const YouTubeEmbed = ({ videoId }) => {
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
  return <YouTube
      videoId={videoId}
      opts={opts}
      className={"youtubeContainer"}
      onStateChange={onStateChange}
  />
}

export default YouTubeEmbed
