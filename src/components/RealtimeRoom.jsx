import { RoomProvider } from '../../liveblocks.config'
import { ClientSideSuspense } from '@liveblocks/react'
import { LiveList } from '@liveblocks/client';
import { camelize } from '@/lib/utils';
import { REACTION_MAP } from '@/lib/constants';

const RealtimeRoom = ({ children, roomId }) => {
  const emptyReactionLists = REACTION_MAP.reduce((acc, reaction) => ({
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

export default RealtimeRoom