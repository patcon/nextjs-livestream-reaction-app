import { useContext } from 'react';
import { VideoPlayerContext } from '@/contexts/VideoPlayerContext';

export default function useVideoPlayer() {
  return useContext(VideoPlayerContext);
}