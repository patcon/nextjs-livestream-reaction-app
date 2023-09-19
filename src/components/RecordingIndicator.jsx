import React from 'react'

const RecordingIndicator = () => (
  <div className="flex w-fit text-neutral-200 font-mono bg-black border border-neutral-700 rounded-full px-3 mb-5">
    <div>
      <span className="animate-pulse mt-1 mb-2 mr-3 align-middle"
        style={{
          height: 10,
          width: 10,
          backgroundColor: "red",
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