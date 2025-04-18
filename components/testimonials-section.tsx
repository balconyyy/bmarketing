import React from "react"
import TestimonialCard from "./testimonial-card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "/testimonial-avatar1.jpg",
      name: "Sarah Johnson",
      company: "CEO, TechSolutions Inc.",
      quote: "BeMarketing transformed our digital presence and tripled our leads within just 3 months. Their strategies are innovative and results-driven.",
      rating: 5
    },
    {
      image: "/testimonial-avatar2.jpg",
      name: "David Chen",
      company: "Marketing Director, GrowFast",
      quote: "The ROI we've seen since working with BeMarketing has been remarkable. They truly understand our industry and deliver exceptional results.",
      rating: 5
    },
    {
      image: "/testimonial-avatar3.jpg",
      name: "Emma Rodriguez",
      company: "Founder, StyleShop",
      quote: "What sets BeMarketing apart is their personalized approach. They took the time to understand our brand and created strategies that aligned perfectly with our goals.",
      rating: 4
    },
    {
      image: "/testimonial-avatar4.jpg",
      name: "Michael Taylor",
      company: "COO, InnovateTech",
      quote: "The team at BeMarketing exceeded our expectations. Their data-driven approach helped us identify opportunities we hadn't considered before.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-[#f1f1f1]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#04063E]">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              company={testimonial.company}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 