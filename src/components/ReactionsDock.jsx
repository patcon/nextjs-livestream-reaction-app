import React from 'react'

const ReactionsDock = ({ children }) => {
  return (
    <aside
      className="flex items-center justify-center w-full h-full gap-2 text-4xl"
      role="group"
      aria-label="Live stream reactions"
    >
      <div className="bg-gray-950 rounded-full py-3 px-6 space-x-6 border border-gray-800">
        {children}
      </div>
    </aside>
  )
}

export default ReactionsDock