import React from 'react';
import { useStorage } from '../../liveblocks.config';

const Stats = () => {
  const thumbsUpReactions = useStorage((root) => root.thumbsUpReactions.length);
  const thumbsDownReactions = useStorage((root) => root.thumbsDownReactions.length);
  const laughingReactions = useStorage((root) => root.laughingReactions.length);
  const surprisedReactions = useStorage((root) => root.surprisedReactions.length);

  return (
    <div className="text-neutral-300">
      <h1 className="text-4xl font-bold">Stats</h1>
      <div>👍 {thumbsUpReactions}</div>
      <div>👎 {thumbsDownReactions}</div>
      <div>😂 {laughingReactions}</div>
      <div>😮 {surprisedReactions}</div>
    </div>
  )
}

export default Stats