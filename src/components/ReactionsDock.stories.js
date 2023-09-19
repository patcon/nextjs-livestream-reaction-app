import React from 'react'
import ReactionButton from './ReactionButton'
import ReactionsDock from './ReactionsDock'

export default {
  title: 'ReactionsDock',
  component: ReactionsDock,
}

const Template = ({ reactionMap }) => {
  return (
    <div className="pt-40 px-10">
      <ReactionsDock>
        {reactionMap.map((reaction) => (
          <ReactionButton key={reaction.label} {...reaction} />
        ))}
      </ReactionsDock>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  reactionMap: [
    { emoji: '🔥', label: 'fire' },
    { emoji: '👍', label: 'thumbs up' },
    { emoji: '👎', label: 'thumbs down' },
    { emoji: '👏', label: 'clap' },
  ]
}