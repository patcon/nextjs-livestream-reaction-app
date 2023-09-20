import { useRouter } from 'next/router'
import YouTubeEmbed from '@/components/YouTubeEmbed';
import ReactionsDock from '@/components/ReactionsDock';
import ReactionButton from '@/components/ReactionButton';
import RecordingIndicator from '@/components/RecordingIndicator';
import WatcherCounter from '@/components/WatcherCounter';
import { RealtimeRoom } from '@/components/RealtimeRoom';
import { useOthers } from '../../../liveblocks.config';

export default function Page() {
  const router = useRouter()
  const videoId = router.query.youtubeId

  return (
    router.isReady && <RealtimeRoom roomId={videoId}>
      <App videoId={videoId} />
    </RealtimeRoom>
  )
}

function App({ videoId }) {
  const others = useOthers()
  const watcherCount = others.length + 1

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
              <ReactionButton emoji="👍" label="thumbs up" />
              <ReactionButton emoji="👎" label="thumbs down" />
              <ReactionButton emoji="😂" label="laughing" />
              <ReactionButton emoji="😮" label="surprised" />
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