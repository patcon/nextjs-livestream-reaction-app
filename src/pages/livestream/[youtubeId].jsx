import { useRouter } from 'next/router'
import YouTubeEmbed from '@/components/YouTubeEmbed';
import ReactionsDock from '@/components/ReactionsDock';
import ReactionButton from '@/components/ReactionButton';
import RecordingIndicator from '@/components/RecordingIndicator';
import WatcherCounter from '@/components/WatcherCounter';

export default function Page() {
  const router = useRouter()
  return (
    <div className="flex justify-center">
      <main className="pt-5 px-5 w-3/4">
        <div className="flex">
          <div id="outer-frame" className="w-full bg-neutral-950 p-5 rounded-3xl" style={{boxShadow: "inset 0 0 10px #333333"}}>
            <div id="top-frame-header" className="flex justify-end">
              <RecordingIndicator />
            </div>
            <div id="inner-frame">
              <YouTubeEmbed videoId={router.query.youtubeId} />
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
            <WatcherCounter watcherCount={23} />
          </div>
        </div>
      </main>
    </div>
  )
}