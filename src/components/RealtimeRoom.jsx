import { useEffect, useState } from 'react'
import { RoomProvider, useErrorListener } from '../../liveblocks.config'
import { ClientSideSuspense } from '@liveblocks/react'
import { LiveList } from '@liveblocks/client';
import { camelize } from '@/lib/utils';
import { REACTION_MAP } from '@/lib/constants';
import { redirect } from 'next/navigation';

const OverLimitRedirect = ({ roomId }) => {
  const [isFull, setIsFull] = useState(false)
  useErrorListener((error) => {
    console.log(error)
    switch (error.code) {
      case 4005:
        console.log('Room is full')
        setIsFull(true)
    }
  })

  useEffect(() => {
    if (isFull) redirect(`/livestream/${roomId}?reactions=disabled`)
  }, [isFull, roomId])

  return <div>Loading…</div>
}

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
      <ClientSideSuspense fallback={<OverLimitRedirect roomId={roomId} />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default RealtimeRoom