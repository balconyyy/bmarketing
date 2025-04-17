import Image from "next/image"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="mb-4">
        <Image src={icon || "/placeholder.svg"} alt={title} width={64} height={64} className="mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-[#04063E] text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}
