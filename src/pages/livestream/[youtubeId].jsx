import { useRouter } from 'next/router'
import YouTubeEmbed from '@/components/YouTubeEmbed';
import ReactionsDock from '@/components/ReactionsDock';
import ReactionButton from '@/components/ReactionButton';

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <main className="pt-5 px-5">
        <div id="outer-frame" className="w-3/4 bg-neutral-950 p-5 pt-20 rounded-3xl" style={{boxShadow: "inset 0 0 10px #333333"}}>
          <div id="inner-frame">
            <YouTubeEmbed videoId={router.query.youtubeId} />
          </div>
        </div>
        <div className="-mt-10">
          <ReactionsDock>
            <ReactionButton emoji="👍" label="thumbs up" />
            <ReactionButton emoji="👎" label="thumbs down" />
            <ReactionButton emoji="😂" label="laughing" />
            <ReactionButton emoji="😮" label="surprised" />
          </ReactionsDock>
        </div>
      </main>
    </div>
  )
}