"use client"

import { useState } from "react"

interface ApproachCardProps {
  title: string
  shortDescription: string
  description: string
}

export default function ApproachCard({
  title,
  shortDescription,
  description,
}: ApproachCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6 bg-white border rounded-xl">

      <h3 className="font-semibold mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        {shortDescription}
      </p>

      <button
        onClick={() => setOpen(!open)}
        className="text-sm underline"
      >
        {open ? "Minder lezen" : "Lees verder"}
      </button>

      {open && (
        <p className="mt-4 text-gray-700 leading-relaxed">
          {description}
        </p>
      )}

    </div>
  )
}