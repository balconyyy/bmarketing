import Image from "next/image"

export default function WorkSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#04063E] mb-6">How We Work</h2>
            <p className="text-gray-600 mb-8">
              Our data-driven approach ensures that your marketing strategy is optimized for maximum results. We analyze
              your business needs and create customized solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f1e0e4] flex items-center justify-center mr-4">
                  <span className="text-[#FF0054] font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#04063E] mb-2">Analysis</h3>
                  <p className="text-gray-600">
                    We analyze your current marketing strategy and identify areas for improvement.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f1e0e4] flex items-center justify-center mr-4">
                  <span className="text-[#FF0054] font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#04063E] mb-2">Strategy</h3>
                  <p className="text-gray-600">
                    We develop a customized marketing strategy tailored to your business goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f1e0e4] flex items-center justify-center mr-4">
                  <span className="text-[#FF0054] font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#04063E] mb-2">Implementation</h3>
                  <p className="text-gray-600">We implement the strategy and continuously monitor its performance.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f1e0e4] flex items-center justify-center mr-4">
                  <span className="text-[#FF0054] font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#04063E] mb-2">Optimization</h3>
                  <p className="text-gray-600">We optimize the strategy based on data and results to maximize ROI.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-work-pic1-CzO1Dqoujjg5zLOcbeZgbX7a6tRFa4.webp"
              alt="Marketing dashboard"
              width={600}
              height={600}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
