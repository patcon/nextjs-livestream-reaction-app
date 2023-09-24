"use client";

import YouTubeEmbed from '@/components/YouTubeEmbed';
import ReactionsDock from '@/components/ReactionsDock';
import ReactionButton from '@/components/ReactionButton';
import RecordingIndicator from '@/components/RecordingIndicator';
import WatcherCounter from '@/components/WatcherCounter';
import RealtimeRoom from '@/components/RealtimeRoom';
import Stats from '@/components/Stats';
import { useOthers } from '../../../../liveblocks.config';
import { REACTION_MAP, MAX_CONNECTIONS } from '@/lib/constants';
import { UuidProvider } from '@/contexts/UuidContext';
import { VideoPlayerProvider } from '@/contexts/VideoPlayerContext';
import { useSearchParams } from 'next/navigation';

export default function Page({ params }) {
  const [ videoId, subpath ] = params.youtubeId || []
  const searchParams = useSearchParams()

  const reactionsEnabled = searchParams.get('reactions') !== "disabled"

  return (
    <UuidProvider>
      <VideoPlayerProvider>
        {reactionsEnabled ? (
          <RealtimeRoom roomId={videoId}>
            {subpath == 'stats' ? <Stats /> : <App videoId={videoId} />}
          </RealtimeRoom>
        ) : (
          <AppOverLimit videoId={videoId} />
        )}
      </VideoPlayerProvider>
    </UuidProvider>
  )
}

function Player({ videoId, watcherCount, isLiveblocks }) {
  return (
    <div className="flex justify-center">
      <main className="pt-5 px-5 w-3/4">
        <div className="flex">
          <div id="outer-frame" className="w-full bg-neutral-950 p-5 rounded-3xl" style={{boxShadow: "inset 0 0 10px #333333"}}>
            <div id="top-frame-header" className="flex justify-end">
              <RecordingIndicator />
            </div>
            <div id="inner-frame">
              <YouTubeEmbed videoId={videoId} />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="z-10 max-sm:absolute max-sm:bottom-0 max-sm:pb-10 -mt-10">
            <ReactionsDock>
              {REACTION_MAP.map(({ label, emoji }) => (
                <ReactionButton key={label} label={label} emoji={emoji} isLiveblocks={isLiveblocks} />
              ))}
            </ReactionsDock>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="">
            <WatcherCounter watcherCount={watcherCount} />
          </div>
        </div>
      </main>
    </div>
  )
}

function App({ videoId }) {
  const numOthers = useOthers((others) => others.length)
  const watcherCount = numOthers + 1

  return (
    <Player videoId={videoId}
      watcherCount={watcherCount === MAX_CONNECTIONS ? `${MAX_CONNECTIONS}+` : watcherCount}
      isLiveblocks
    />
  )
}

function AppOverLimit({ videoId }) {
  const watcherCount = `${MAX_CONNECTIONS}+`

  return (
    <Player videoId={videoId} watcherCount={watcherCount} />
  )
}
