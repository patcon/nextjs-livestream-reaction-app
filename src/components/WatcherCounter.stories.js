import React from 'react'
import WatcherCount from './WatcherCounter'

export default {
  title: 'WatcherCount',
  component: WatcherCount,
}

const Template = (args) => {
  return (
    <WatcherCount {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  watcherCount: 23,
}