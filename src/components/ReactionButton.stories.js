import React from 'react'
import ReactionButton from './ReactionButton'

export default {
  title: 'ReactionButton',
  component: ReactionButton,
}

const Template = (args) => (
  <aside
    className="flex items-center justify-center w-full h-full gap-2 text-4xl mt-40"
    role="group"
    aria-label="Live stream reactions"
  >
    <ReactionButton {...args} />
  </aside>
)

export const Default = Template.bind({})
Default.args = {
  label: 'fire',
  emoji: '🔥',
}