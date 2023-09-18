import React from 'react'

const ReactionsDock = ({ children }) => {
  return (
    <aside
      className="flex items-center justify-center w-full h-full gap-2 text-4xl"
      role="group"
      aria-label="Live stream reactions"
    >
      {children}
    </aside>
  )
}

export default ReactionsDock