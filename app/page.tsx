import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import FeatureCard from "@/components/feature-card"
import ProductCard from "@/components/product-card"
import WorkSection from "@/components/work-section"



export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f7f7]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-[#f9f7f7] opacity-90"></div>
          <div className="absolute top-0 left-0 w-3/4 h-full rounded-full bg-[#f1f1f1] -translate-x-1/4"></div>
        </div>

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#FF0054] bg-white rounded-full shadow-sm">
                <span className="mr-2">BEMARKETING</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#04063E] leading-tight">
                We will increase your <br />
                sales
                <span className="inline-block bg-[#FF0054] text-white px-4 py-1 ml-2 rounded-md">threefold*</span>
              </h1>

              <div className="pt-4">
                <Link
                  href="/how-i-work"
                  className="inline-flex items-center px-6 py-3 border border-[#FF0054] text-[#FF0054] rounded-md hover:bg-[#FF0054] hover:text-white transition-colors"
                >
                  <span className="mr-2">Show me how</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <p className="text-sm text-gray-600 pt-8">
                <span className="text-[#FF0054] mr-1">*</span>
                Tristique diam laoreet felis volutpat. Lobortis quis lorem.
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-slider-pic1-tOIfUUDYi5CVsNRwVV7Yp3P888DBpb.webp"
                  alt="Marketing illustration"
                  width={500}
                  height={600}
                  className="mx-auto"
                  priority
                />
              </div>

              <div className="absolute top-1/4 right-0 z-20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-slider-pic2-YxYoghnNgWAIabh71iVbwaQeCGnH7s.svg"
                  alt="Growth chart"
                  width={300}
                  height={200}
                  className="transform rotate-12"
                />
              </div>
              

              <div className="absolute top-10 right-10 z-20 bg-[#FF6B6B] p-3 rounded-lg shadow-lg">
                <Image src="/placeholder.svg?height=40&width=40" alt="Icon" width={40} height={40} />
              </div>

              <div className="absolute bottom-20 left-0 z-20 bg-[#4ECDC4] p-3 rounded-lg shadow-lg">
                <Image src="/placeholder.svg?height=40&width=40" alt="Icon" width={40} height={40} />
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04063E]">Our Features</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We provide the best marketing solutions to help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-home-icon1-hG7A2MMukcHDl9Mqzy5euGj69ZQ8de.svg"
              title="Smart Analytics"
              description="Track your performance with our advanced analytics tools"
            />

            <FeatureCard
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-home-icon2-aY9vEdL5MVhh4VD4rsQZXkk7BJCcG8.svg"
              title="Profit Growth"
              description="Increase your revenue with our proven strategies"
            />

            <FeatureCard
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-home-icon3-GNF2zJDUKeAQkhJAkGPce7qlVDIM5G.svg"
              title="Creative Solutions"
              description="Innovative approaches to solve your marketing challenges"
            />

            <FeatureCard
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-home-icon4-PKoaGHSpz946YYPomvVV4vcIWg7ptz.svg"
              title="Team Collaboration"
              description="Work together efficiently with our collaborative tools"
            />
          </div>
        </div>
      </section>

      

      {/* Work Section */}
      <WorkSection />

      <section className="py-16 bg-[#f9f7f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04063E]">I will help you increase</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#04063E]">your knowledge with</h2>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-product-pic5-hkcdODIjLsVn3scUh6NxhG6s9D34Hj.webp"
              title="Company Profit"
              description="Cum nunc morbi tellus adipiscing pellentesque"
              author="Michael Brents"
            />

            <ProductCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-product-pic6-6kNGH8BbTVPMDeEFwuAzzGFVx7ctoa.webp"
              title="Marketing Systems"
              description="Cum nunc morbi tellus adipiscing pellentesque"
              author="Michael Brents"
            />

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#04063E] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their marketing strategy
          </p>
          <Link
            href="/product/marketing-outsourcing"
            className="inline-flex items-center px-8 py-4 bg-[#FF0054] text-white rounded-md hover:bg-[#d10046] transition-colors font-medium"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Products Section */}
      

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
