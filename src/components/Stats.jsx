import React from 'react';
import { useStorage } from '../../liveblocks.config';
import { REACTION_MAP } from '@/lib/constants';
import { camelize } from '@/lib/utils';

const StatLine = ({ label }) => {
  const [reaction] = REACTION_MAP.filter((r) => r.label === label);
  const count = useStorage((root) => root[`${camelize(reaction.label)}Reactions`].length);
  return (
    <div>{reaction.emoji} {count}</div>
  )
}

const Stats = () => {
  return (
    <div className="text-neutral-300">
      <h1 className="text-4xl font-bold">Stats</h1>
      {REACTION_MAP.map(({ label }) => (
        <StatLine key={label} label={label} />
      ))}
    </div>
  )
}

export default Stats