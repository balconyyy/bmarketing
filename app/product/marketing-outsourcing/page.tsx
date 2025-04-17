"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus } from "lucide-react"
import Header from "@/components/header"
import ProductFeature from "@/components/product-feature"
import CourseSection from "@/components/course-section"
import { useEffect } from 'react'; // Import useEffect

export default function MarketingOutsourcingProduct() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <main className="min-h-screen bg-[#f9f7f7]">
      <Header />

      {/* Product Detail Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-[#f9f7f7] opacity-90"></div>
          <div className="absolute top-0 right-0 w-3/4 h-full rounded-full bg-[#f1f1f1] translate-x-1/4"></div>
        </div>

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative max-w-md">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Marketing Outsourcing"
                  width={400}
                  height={500}
                  className="mx-auto"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#04063E]">Marketing Outsourcing</h1>

              <div className="text-xl md:text-2xl font-bold text-[#04063E]">$229.00</div>

              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FF0054"
                      stroke="#FF0054"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 ml-2 text-sm md:text-base">(1 customer review)</span>
              </div>

              <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                <ProductFeature
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 8-6 4 6 4V8Z" />
                      <rect x="2" y="6" width="14" height="12" rx="2" />
                    </svg>
                  }
                  text="9 hours of video"
                />
                <ProductFeature
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                  }
                  text="1 article"
                />
                <ProductFeature
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m4.93 4.93 14.14 14.14" />
                    </svg>
                  }
                  text="Total lifetime access"
                />
                <ProductFeature
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  }
                  text="Access on mobile devices and TVs"
                />
                <ProductFeature
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 7h-9" />
                      <path d="M14 17H5" />
                      <circle cx="17" cy="17" r="3" />
                      <circle cx="7" cy="7" r="3" />
                    </svg>
                  }
                  text="Certificate of completion"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <div className="flex items-center border border-gray-300 rounded-md w-full sm:w-auto">
                  <button className="px-3 py-2 text-gray-500 hover:text-[#FF0054]">
                    <Minus size={16} />
                  </button>
                  <span className="px-3 py-2">1</span>
                  <button className="px-3 py-2 text-gray-500 hover:text-[#FF0054]">
                    <Plus size={16} />
                  </button>
                </div>
                <button className="w-full sm:flex-1 px-6 py-3 bg-[#FF0054] text-white text-center rounded-md hover:bg-[#d10046] transition-colors">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#04063E] mb-6 md:mb-8">What can you learn</h2>

            <div className="space-y-4">
              <CourseSection title="Introduction to the course" isOpen={false} />

              <CourseSection title="Theoretical part" isOpen={false} />

              <CourseSection title="Practical part" isOpen={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div></div> {/* Empty div to balance the space on the left in md and larger screens */}
            <p className="text-center md:text-left">© {new Date().getFullYear()} bemarketing. All rights reserved.</p>
            <div></div> {/* Empty div to balance the space on the right in md and larger screens */}
          </div>
        </div>
      </footer>
    </main>
  );
}
