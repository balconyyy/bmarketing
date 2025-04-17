interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-[#f1e0e4] rounded-full flex items-center justify-center mb-4">
        <span className="text-[#FF0054] font-bold">{number}</span>
      </div>
      <h3 className="text-xl font-semibold text-[#04063E] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
