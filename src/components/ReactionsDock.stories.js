import React from 'react'
import ReactionButton from './ReactionButton'
import ReactionsDock from './ReactionsDock'

export default {
  title: 'ReactionsDock',
  component: ReactionsDock,
}

const DockWithButtons = () => {
  return (
    <div className="mt-40">
      <ReactionsDock>
        <ReactionButton label="fire" emoji="🔥" />
        <ReactionButton label="thumbs up" emoji="👍" />
        <ReactionButton label="thumbs down" emoji="👎" />
        <ReactionButton label="clap" emoji="👏" />
      </ReactionsDock>
    </div>
  )
}

export const Default = {
  render: () => <DockWithButtons />,
}