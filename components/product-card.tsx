import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  title: string
  description: string
  author: string
}

export default function ProductCard({ image, title, description, author }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link href="#">
        <div className="relative h-[300px] w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#04063E] mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 overflow-hidden">
              <Image src="/placeholder.svg?height=32&width=32" alt={author} width={32} height={32} />
            </div>
            <span className="text-sm font-medium">{author}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
