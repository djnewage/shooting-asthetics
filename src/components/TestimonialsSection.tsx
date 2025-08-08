import React from "react";
import { Star } from "lucide-react";
export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechVision",
      content:
        "Working with this agency transformed our digital presence. Their strategic approach and creative solutions helped us achieve a 40% increase in customer engagement within three months.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      position: "Marketing Director, Elevate",
      content:
        "The team's attention to detail and commitment to our brand's success has made them an invaluable partner. They consistently deliver work that exceeds our expectations.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      position: "Founder, Bloom",
      content:
        "Their ability to understand our vision and translate it into a compelling brand identity was remarkable. We've received countless compliments on our new look.",
      rating: 5,
    },
  ];
  return (
    <section
      id="testimonials"
      className="w-full bg-zinc-900 py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400">
            Don't take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-800 p-8 border border-zinc-700">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#fff" color="#fff" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-light text-white">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-10 md:gap-16">
          <div className="h-12 w-32 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <span className="text-gray-500 font-light">Client Logo</span>
          </div>
          <div className="h-12 w-32 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <span className="text-gray-500 font-light">Client Logo</span>
          </div>
          <div className="h-12 w-32 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <span className="text-gray-500 font-light">Client Logo</span>
          </div>
          <div className="h-12 w-32 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <span className="text-gray-500 font-light">Client Logo</span>
          </div>
          <div className="h-12 w-32 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <span className="text-gray-500 font-light">Client Logo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
