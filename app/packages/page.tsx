import Link from "next/link"
import Header from "@/components/header"
import ProductPricingCard from "@/components/product-pricing-card"

export default function Packages() {
  return (
    <main className="min-h-screen bg-[#f9f7f7]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-[#f9f7f7] opacity-90"></div>
          <div className="absolute bottom-0 left-0 w-3/4 h-full rounded-full bg-[#f1f1f1] -translate-x-1/4"></div>
        </div>

        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#FF0054] bg-white rounded-full shadow-sm mb-6">
            <span className="mr-2">BEMARKETING</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#04063E] leading-tight mb-16">
            Choose the right <br />
            package <span className="text-[#FF0054]">for you</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductPricingCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-product-pic6-z3nzOqD7zf2u0CBoPoh6RFOK6olOQi.webp"
              title="Marketing Systems"
              rating={5}
              originalPrice={419.0}
              discountedPrice={339.0}
              discountPercentage={19}
            />

            <ProductPricingCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-product-pic5-f4iqyevR1v9XoXpSPTl33nc5V4geu1.webp"
              title="Company Profit"
              rating={4}
              originalPrice={344.99}
              discountedPrice={344.99}
            />

            <ProductPricingCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-product-pic4-TIP0WGn9H9lHUbbQyb8P3YpvNf7Rd7.webp"
              title="SEO Optimization"
              rating={5}
              originalPrice={449.0}
              discountedPrice={399.0}
              discountPercentage={11}
            />

            <ProductPricingCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-product-pic3-500x500-4rM3r4iFpbKSG3qWQSWlZqx6JlKjs1.webp"
              title="Marketing Outsourcing"
              rating={5}
              originalPrice={299.0}
              discountedPrice={299.0}
            />

            <ProductPricingCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-product-pic2-500x500-vLmr6arTQMqyKD7rupmSFnh9FtIrd9.webp"
              title="Marketing Strategy"
              rating={4}
              originalPrice={349.0}
              discountedPrice={299.0}
              discountPercentage={14}
            />

            <ProductPricingCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-product-pic1-500x500-t7uOr7hppqA5xHp1BwZpfObslh21l0.webp"
              title="Marketing Audit"
              rating={5}
              originalPrice={249.0}
              discountedPrice={199.0}
              discountPercentage={20}
            />
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
  )
}
