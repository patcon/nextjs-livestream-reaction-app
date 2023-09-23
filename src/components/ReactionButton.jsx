import React from 'react'
import {
  generateRandomId,
  getRandomAngle,
  getRandomAnimationCurve,
  camelize,
} from "../lib/utils";
import { useInterval } from "usehooks-ts";
import { useBroadcastEvent, useEventListener, useMutation, useStorage } from '../../liveblocks.config';
import useUuid from '@/hooks/use-uuid';

/** In milliseconds. */
const ANIMATION_DURATION = 2000;

const useReactions = () => {
  const [localReactions, setLocalReactions] = React.useState([])
  const [remoteReactions, setRemoteReactions] = React.useState([])
  const broadcast = useBroadcastEvent();
  const { uuid } = useUuid();

  // This useStorage isn't actually used, but is required for
  // connection so that useMutation doesn't error on first render.
  const mode = useStorage((root) => root.mode);

  const updateCount = useMutation(({ storage }, type) => {
    const key = `${camelize(type)}Reactions`;
    storage.get(key).push({
      uid: uuid,
      at: new Date().getTime().toString(),
    });
  }, []);

  useEventListener(({ event }) => {
    setRemoteReactions((prev) => [
      ...prev,
      {
        id: generateRandomId(),
        label: event.emoji,
        timestamp: new Date().getTime(),
        curve: getRandomAnimationCurve(),
        startingAngle: getRandomAngle(),
      },
    ]);
  });


  // Remove stale reactions.
  useInterval(() => {
    const now = new Date().getTime();

    const cleanup = (reactions) =>
      reactions.filter((reaction) => {
        const timePassed = now - reaction.timestamp;

        return timePassed < ANIMATION_DURATION;
      });

    setLocalReactions(cleanup);
    setRemoteReactions(cleanup);
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
    updateCount(label)
    broadcast({
      type: "reaction",
      emoji: label,
    });
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

  const allReactions = [
    ...localReactions,
    ...remoteReactions
  ].filter((reaction) => reaction.label === label)

  return (
    <button
      aria-label={`${label} reaction`}
      className="relative w-10 h-10 text-4xl"
      onClick={onClickHandler}
    >
      <span className="relative z-10">{emoji}</span>
      <div aria-live="polite" role="log" aria-atomic>
        <div className="sr-only">
          {`${allReactions.length} {label} reactions`}
          reactions
        </div>
        <div aria-hidden className="absolute inset-0">
          {allReactions
            .map((reaction) => {
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