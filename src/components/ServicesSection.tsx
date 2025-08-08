import React from "react";
import { BrushIcon, GlobeIcon, TrendingUpIcon, UsersIcon } from "lucide-react";
export const ServicesSection = () => {
  const services = [
    {
      icon: <BrushIcon size={32} />,
      title: "Brand Design",
      description:
        "We craft distinctive brand identities that resonate with your audience and stand out in the market.",
    },
    {
      icon: <GlobeIcon size={32} />,
      title: "Digital Marketing",
      description:
        "Strategic campaigns that drive engagement, increase visibility, and generate measurable results.",
    },
    {
      icon: <TrendingUpIcon size={32} />,
      title: "Growth Strategy",
      description:
        "Data-driven approaches to scale your business and capture new market opportunities.",
    },
    {
      icon: <UsersIcon size={32} />,
      title: "User Experience",
      description:
        "Creating intuitive digital experiences that delight users and boost conversion rates.",
    },
  ];
  return (
    <section id="services" className="w-full bg-black py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400">
            We combine strategic thinking with cutting-edge execution to deliver
            exceptional results for our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 hover:bg-zinc-800 transition-colors">
              <div className="mb-5 text-white">{service.icon}</div>
              <h3 className="text-xl font-light text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
