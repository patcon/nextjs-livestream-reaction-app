import React from 'react'

const ReactionsDock = ({ children }) => {
  return (
    <aside
      className="inline-flex gap-6 max-w-full items-center justify-center bg-gray-950 rounded-full py-3 px-6 border border-gray-800"
      role="group"
      aria-label="Live stream reactions"
    >
      {children}
    </aside>
  )
}

export default ReactionsDock