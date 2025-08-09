import { Star } from "lucide-react";
import bucksLogo from "../assets/logos/bucks.svg";
import brewersLogo from "../assets/logos/brewers.svg";
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
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
              <p className="text-gray-300 text-base md:text-lg mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="text-lg md:text-xl font-light text-white">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm md:text-base">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap justify-center items-center gap-10 md:gap-16">
          <div className="h-24 w-24 flex items-center justify-center">
            <img src={bucksLogo} alt="Milwaukee Bucks" className="h-full w-full object-contain opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          <div className="h-24 w-24 flex items-center justify-center">
            <img src={brewersLogo} alt="Milwaukee Brewers" className="h-full w-full object-contain opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};
