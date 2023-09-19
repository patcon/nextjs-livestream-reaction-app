import React from 'react'

const WatcherCounter = ({ watcherCount }) => {
  return (
    <div className="flex w-fit text-neutral-400 font-medium pt-2 text-lg">
      <div>
        <span className="mt-1 mb-2 mr-2 align-middle"
          style={{
            height: 8,
            width: 8,
            backgroundColor: "rgb(42,111, 233)",
            borderColor: "lightGray",
            borderWidth: 1,
            borderRadius: "50%",
            display: "inline-block"
          }} />
      </div>
      <div>
        <span>{watcherCount} watching</span>
      </div>
    </div>
  )
}

export default WatcherCounter