import React from 'react'
import {
  generateRandomId,
  getRandomAngle,
  getRandomAnimationCurve,
} from "../lib/utils";
import { useInterval } from "usehooks-ts";

/** In milliseconds. */
const ANIMATION_DURATION = 2000;

const useReactions = () => {
  const [localReactions, setLocalReactions] = React.useState([])
  const [remoteReactions, setRemoteReactions] = React.useState([])

  // Remove stale reactions.
  useInterval(() => {
    const now = new Date().getTime();

    const cleanup = (reactions) =>
      reactions.filter((reaction) => {
        const timePassed = now - reaction.timestamp;

        return timePassed < ANIMATION_DURATION;
      });

    setLocalReactions(cleanup);
  }, ANIMATION_DURATION);

  const makeOnClickHandler = (label) => () => {
    console.log(`Reacted with ${label} emoji`)
    const newReaction = {
      id: generateRandomId(),
      label,
      timestamp: new Date().getTime(),
      curve: getRandomAnimationCurve(),
      startingAngle: getRandomAngle(),
    };
    setLocalReactions((reactions) => [...reactions, newReaction])
  }

  return {
    makeOnClickHandler,
    localReactions,
    remoteReactions,
  }
}

const ReactionButton = ({ emoji, label }) => {
  const { makeOnClickHandler, localReactions, remoteReactions } = useReactions()
  const onClickHandler = makeOnClickHandler(label)

  return (
    <button
      aria-label={`${label} reaction`}
      className="relative w-10 h-10 text-4xl"
      onClick={onClickHandler}
    >
      <span className="relative z-10">{emoji}</span>
      <div aria-live="polite" role="log" aria-atomic>
        <div className="sr-only">
          {localReactions.length} {label}{" "}
          reactions
        </div>
        <div aria-hidden className="absolute inset-0">
          {localReactions.map((reaction) => {
            return (
              <div
                key={reaction.id}
                className="absolute animate-reaction"
                style={{
                  // Sets transform: rotate();
                  "--starting-angle": `${reaction.startingAngle}deg`,
                  animationTimingFunction: reaction.curve,
                }}
              >
                {emoji}
              </div>
            )
          })}
        </div>
      </div>
    </button>
  )
}

export default ReactionButton