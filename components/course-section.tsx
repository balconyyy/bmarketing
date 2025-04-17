"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface CourseSectionProps {
  title: string
  isOpen?: boolean
}

export default function CourseSection({ title, isOpen = false }: CourseSectionProps) {
  const [expanded, setExpanded] = useState(isOpen)

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-3 md:p-4 bg-[#f9f7f7] hover:bg-gray-100 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-base md:text-lg font-medium text-[#04063E] text-left">{title}</h3>
        <div className="flex items-center">
          <span className="text-xs md:text-sm text-gray-500 mr-2">Show</span>
          {expanded ? (
            <ChevronUp size={16} className="md:w-5 md:h-5" />
          ) : (
            <ChevronDown size={16} className="md:w-5 md:h-5" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="p-3 md:p-4 bg-white">
          <p className="text-gray-600 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
            vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
          <ul className="mt-3 md:mt-4 space-y-2">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF0054"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 md:w-4 md:h-4"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-gray-700 text-sm md:text-base">
                Module 1: Introduction to Marketing Outsourcing
              </span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF0054"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 md:w-4 md:h-4"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-gray-700 text-sm md:text-base">Module 2: Benefits and Challenges</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF0054"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 md:w-4 md:h-4"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-gray-700 text-sm md:text-base">Module 3: Implementation Strategies</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
