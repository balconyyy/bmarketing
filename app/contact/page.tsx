"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import { useEffect } from 'react'; // Import useEffect

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []); // Empty dependency array ensures this runs only once after the initial render

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
                Contact <span className="text-[#FF0054]">Me</span>
              </h1>

              <div className="pt-4">
                <p className="text-[#04063E] text-xl">
                  Level 13, 2 Elizabeth St,
                  <br />
                  Melbourne, Victoria 3000,
                  <br />
                  Australia
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-contact-pic1-IjLHFVesjxBWXSF54yJXdP0brNf33o.webp"
                  alt="Marketing consultant"
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

      {/* Contact Info Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="w-12 h-12 flex-shrink-0 bg-[#f1e0e4] rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF0054"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#04063E] font-semibold mb-1">Phone</h3>
                  <p className="text-[#FF0054] font-medium">+61 (0) 383 766 284</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 flex-shrink-0 bg-[#f1e0e4] rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF0054"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#04063E] font-semibold mb-1">Email</h3>
                  <p className="text-[#FF0054] font-medium">noreply@envato.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#f9f7f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#FF0054] bg-white rounded-full shadow-sm mb-6">
                <span className="mr-2">GET IN TOUCH</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#04063E] mb-6">
                Let's discuss your <span className="text-[#FF0054]">project</span>
              </h2>

              <p className="text-gray-600 mb-8">
                Fill out the form and I'll get back to you within 24 hours. Let me know how I can help you achieve your
                marketing goals and grow your business.
              </p>

              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing2-contact-pic2-jQDgtHEG6wIAcWGoiyXnyoDncawh8o.webp"
                  alt="Chat bubbles"
                  width={300}
                  height={200}
                  className="mx-auto md:mx-0"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#04063E]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Find Me</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Visit my office in Melbourne or contact me online</p>
          </div>

          <div className="h-[400px] bg-gray-700 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1618918793244!2d144.96185731531996!3d-37.81648797975177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b6af832249%3A0xe39e415e49a7c44e!2s2%20Elizabeth%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
