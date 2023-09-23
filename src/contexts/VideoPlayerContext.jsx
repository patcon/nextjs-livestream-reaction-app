import { createContext, useState } from "react";

export const VideoPlayerContext = createContext();

export const VideoPlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);

  return (
    <VideoPlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </VideoPlayerContext.Provider>
  );
};