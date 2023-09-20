import { RoomProvider } from '../../liveblocks.config'
import { ClientSideSuspense } from '@liveblocks/react'

export function RealtimeRoom({ children, roomId }) {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}