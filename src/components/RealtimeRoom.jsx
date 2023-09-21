import { RoomProvider } from '../../liveblocks.config'
import { ClientSideSuspense } from '@liveblocks/react'
import { LiveList } from '@liveblocks/client';
import { camelize } from '@/lib/utils';

export function RealtimeRoom({ children, roomId, reactionMap }) {
  const emptyReactionLists = reactionMap.reduce((acc, reaction) => ({
    ...acc,
    [`${camelize(reaction.label)}Reactions`]: new LiveList([]),
  }), {})

  return (
    <RoomProvider
      id={roomId}
      initialPresence={{}}
      initialStorage={{ ...emptyReactionLists, mode: 'active' }}
    >
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}