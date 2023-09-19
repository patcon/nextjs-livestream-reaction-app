import React from 'react'
import ReactionButton from './ReactionButton'

export default {
  title: 'ReactionButton',
  component: ReactionButton,
}

const Template = (args) => (
  <div className="pt-40 px-10">
    <ReactionButton {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'fire',
  emoji: '🔥',
}