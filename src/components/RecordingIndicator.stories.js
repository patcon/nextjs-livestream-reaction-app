import React from 'react'
import RecordingIndicator from './RecordingIndicator'

export default {
  title: 'RecordingIndicator',
  component: RecordingIndicator,
}

const Template = (args) => {
  return (
    <RecordingIndicator {...args} />
  )
}

export const Default = Template.bind({})

export const Live = Template.bind({})
Live.args = {
  isLive: true,
}

export const NotLive = Template.bind({})
NotLive.args = {
  isLive: false,
}