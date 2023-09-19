import { useRouter } from 'next/router'
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function Page() {
  const router = useRouter()
  return <YouTubeEmbed videoId={router.query.youtubeId} />
}