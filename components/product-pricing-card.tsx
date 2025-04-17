import Image from "next/image"
import Link from "next/link"

interface ProductPricingCardProps {
  image: string
  title: string
  rating: number
  originalPrice: number
  discountedPrice: number
  discountPercentage?: number
}

export default function ProductPricingCard({
  image,
  title,
  rating,
  originalPrice,
  discountedPrice,
  discountPercentage,
}: ProductPricingCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
      {discountPercentage && (
        <div className="absolute top-4 left-4 bg-[#FF0054] text-white text-xs font-bold px-2 py-1 rounded-md">
          -{discountPercentage}%
        </div>
      )}
      <Link href="#" className="block">
        <div className="relative h-[300px] w-full p-6">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-[#04063E] mb-2">{title}</h3>
          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={i < rating ? "#FF0054" : "none"}
                stroke={i < rating ? "#FF0054" : "#ccc"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-0.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-2">
            {originalPrice !== discountedPrice && (
              <span className="text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
            )}
            <span className="text-[#FF0054] font-bold text-xl">${discountedPrice.toFixed(2)}</span>
          </div>
        </div>
      </Link>
      <div className="p-4 border-t border-gray-100">
        <Link
          href="#"
          className="block w-full py-2 bg-[#04063E] text-white text-center rounded-md hover:bg-[#02031f] transition-colors"
        >
          Add to Cart
        </Link>
      </div>
    </div>
  )
}
