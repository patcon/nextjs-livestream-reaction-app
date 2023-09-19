import React from 'react'
import YouTubeEmbed from './YouTubeEmbed'

export default {
  title: 'YouTubeEmbed',
  component: YouTubeEmbed,
}

const Template = (args) => {
  return (
    <YouTubeEmbed {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  videoId: "CLdVG-ddJOA",
}