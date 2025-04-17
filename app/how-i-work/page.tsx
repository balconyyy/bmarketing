import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import ProcessStep from "@/components/process-step"

export default function HowIWork() {
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
                A dapibus non pulvinar morbi <span className="text-[#FF0054]">lectus</span>
              </h1>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-work-pic2-ridVKw193pI1IbXdVL5rjg53L9yulK.webp"
                  alt="Marketing analytics"
                  width={500}
                  height={500}
                  className="mx-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-work-pic1-CHuVfr00ZolwWa3a0w2HSb6L3CuFKV.webp"
                alt="Marketing dashboard"
                width={600}
                height={500}
                className="mx-auto"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#FF0054] bg-white rounded-full shadow-sm mb-6">
                <span className="mr-2">BEMARKETING</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#04063E] mb-6">
                We focus on <span className="text-[#FF0054]">efficiency</span>
              </h2>

              <p className="text-gray-600 mb-8">
                Our data-driven approach ensures that your marketing strategy is optimized for maximum results. We
                analyze your business needs and create customized solutions that drive growth and increase your ROI.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f1e0e4] flex items-center justify-center mr-3 mt-1">
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
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-600">Comprehensive analysis of your current marketing performance</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f1e0e4] flex items-center justify-center mr-3 mt-1">
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
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-600">Identification of opportunities for growth and improvement</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f1e0e4] flex items-center justify-center mr-3 mt-1">
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
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-600">Implementation of targeted strategies to achieve your business goals</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f1e0e4] flex items-center justify-center mr-3 mt-1">
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
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-600">Continuous monitoring and optimization for sustainable growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#FF0054] bg-white rounded-full shadow-sm mb-6">
                <span className="mr-2">RESULTS</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#04063E] mb-6">
                Measurable <span className="text-[#FF0054]">outcomes</span> for your business
              </h2>

              <p className="text-gray-600 mb-8">
                My approach is focused on delivering tangible results that directly impact your bottom line. I provide
                detailed reporting and analytics to track progress and demonstrate ROI.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#f9f7f7] p-6 rounded-lg">
                  <div className="text-[#FF0054] font-bold text-3xl mb-2">+135%</div>
                  <p className="text-[#04063E] font-medium">Average increase in organic traffic</p>
                </div>

                <div className="bg-[#f9f7f7] p-6 rounded-lg">
                  <div className="text-[#FF0054] font-bold text-3xl mb-2">+89%</div>
                  <p className="text-[#04063E] font-medium">Average increase in conversion rate</p>
                </div>

                <div className="bg-[#f9f7f7] p-6 rounded-lg">
                  <div className="text-[#FF0054] font-bold text-3xl mb-2">+210%</div>
                  <p className="text-[#04063E] font-medium">Average increase in social engagement</p>
                </div>

                <div className="bg-[#f9f7f7] p-6 rounded-lg">
                  <div className="text-[#FF0054] font-bold text-3xl mb-2">+67%</div>
                  <p className="text-[#04063E] font-medium">Average increase in email open rates</p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-work-pic3-P5nPybxuPoBKoHUTswCVne8jQfIFtq.webp"
                alt="Marketing results"
                width={600}
                height={500}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#f9f7f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#FF0054] bg-white rounded-full shadow-sm mb-6 mx-auto">
              <span className="mr-2">MEET ME</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#04063E]">The Expert Behind Your Success</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              With years of experience in digital marketing, I'm dedicated to helping businesses grow
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 bg-[#FF0054] relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-about-pic2-xRlC1ZOC2Szij4zpmCSyNO0UpY0eRc.webp"
                alt="Michael Brents"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#04063E] mb-1">Michael Brents</h3>
              <p className="text-gray-500 mb-4">Marketing Strategist</p>
              <p className="text-gray-600 mb-6">
                With over 10 years of experience in digital marketing, I've helped hundreds of businesses achieve their
                growth goals through strategic marketing initiatives.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#FF0054]">
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FF0054]">
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
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FF0054]">
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#04063E] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your marketing?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let's work together to create a marketing strategy that drives real results for your business
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/packages"
              className="px-8 py-4 bg-[#FF0054] text-white rounded-md hover:bg-[#d10046] transition-colors font-medium"
            >
              View Packages
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-[#04063E] transition-colors font-medium"
            >
              Contact Me
            </Link>
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
