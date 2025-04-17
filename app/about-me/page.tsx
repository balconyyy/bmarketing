import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"

export default function AboutMe() {
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
                Morbi mauris aliquet quam sapien <span className="text-[#FF0054]">ornare</span>
              </h1>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Marketing expert meditating"
                  width={400}
                  height={400}
                  className="mx-auto"
                  priority
                />
              </div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Light bulb"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#FF0054] bg-white rounded-full shadow-sm mb-6">
              <span className="mr-2">BEMARKETING</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#04063E] mb-8">
              Netus turpis ultrices gravida placerat massa urna id. Aliquet ipsum, vitae egestas nulla odio cursus. Et
              pulvinar
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <p>
                Suspendisse potenti. Nunc iaculis risus vel odio pharetra tempor. Aenean vehicula magna et suscipit
                volutpat. Ut interdum neque ac pede. Curabitur in libero justo, a facilisis leo. Quisque metus enim,
                venenatis fermentum, mollis in, porta et, nibh. Duis vulputate elit in elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-[#f9f7f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04063E]">My Experience</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Over 10 years of experience in digital marketing and business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#f1e0e4] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#FF0054] font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-[#04063E] mb-4">Digital Strategy</h3>
              <p className="text-gray-600">
                Developing comprehensive digital marketing strategies tailored to business goals and target audiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#f1e0e4] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#FF0054] font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-[#04063E] mb-4">Content Marketing</h3>
              <p className="text-gray-600">
                Creating engaging content that resonates with your audience and drives conversions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#f1e0e4] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#FF0054] font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-[#04063E] mb-4">Analytics & Optimization</h3>
              <p className="text-gray-600">
                Using data-driven insights to continuously improve marketing performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#04063E] mb-6">My Skills</h2>
              <p className="text-gray-600 mb-8">
                I specialize in a range of marketing disciplines to help businesses grow their online presence and
                increase revenue.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#04063E]">SEO & Content Marketing</span>
                    <span className="text-[#FF0054]">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FF0054] h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#04063E]">Social Media Marketing</span>
                    <span className="text-[#FF0054]">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FF0054] h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#04063E]">Email Marketing</span>
                    <span className="text-[#FF0054]">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FF0054] h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#04063E]">PPC & Paid Advertising</span>
                    <span className="text-[#FF0054]">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FF0054] h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Marketing skills"
                width={400}
                height={400}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#04063E] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help your business grow with tailored marketing strategies
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#FF0054] text-white rounded-md hover:bg-[#d10046] transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-[#04063E]">
                  <span className="text-[#FF0054]">be</span>marketing
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
              <Link href="/" className="text-gray-600 hover:text-[#FF0054]">
                Home
              </Link>
              <Link href="/about-me" className="text-[#FF0054] font-medium">
                About Me
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF0054]">
                Packages
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF0054]">
                How I Work
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF0054]">
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} bemarketing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
