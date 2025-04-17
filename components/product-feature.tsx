import type React from "react"

interface ProductFeatureProps {
  icon: React.ReactNode
  text: string
}

export default function ProductFeature({ icon, text }: ProductFeatureProps) {
  return (
    <div className="flex items-center">
      <div className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-[#FF0054] mr-2 md:mr-3">{icon}</div>
      <span className="text-gray-700 text-sm md:text-base">{text}</span>
    </div>
  )
}
