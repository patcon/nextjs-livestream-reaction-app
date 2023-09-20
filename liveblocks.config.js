import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const DEFAULT_LIVEBLOCKS_PUBLIC_API_KEY = "pk_dev_gzes2UM2EEtK7zVfozlZFp1TVyMtzSDXwtr8M_jzExAROw5kkFrrQ6rXSFgyC--J"

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY ?? DEFAULT_LIVEBLOCKS_PUBLIC_API_KEY,
  // authEndpoint: "/api/auth",
  // throttle: 100,
});

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
  }
} = createRoomContext(client);
