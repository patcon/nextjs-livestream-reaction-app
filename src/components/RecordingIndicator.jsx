import React from 'react'

const RecordingIndicator = ({ isLive = true }) => (
  <div className={`${isLive ? "text-neutral-200" : "text-neutral-500"} flex w-fit font-mono bg-black border border-neutral-700 rounded-full px-3 mb-5`}>
    <div>
      <span className={`${isLive ? "animate-recording " : ""}mt-1 mb-2 mr-3 align-middle`}
        style={{
          height: 10,
          width: 10,
          backgroundColor: "red",
          opacity: isLive ? 1 : 0.3,
          borderColor: "darkRed",
          borderWidth: 1,
          borderRadius: "50%",
          display: "inline-block"
        }} />
    </div>
    <div>
      <span>LIVE</span>
    </div>
  </div>
)

export default RecordingIndicator