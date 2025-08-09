import { Film, Camera, Calendar } from "lucide-react";
export const ServicesSection = () => {
  const services = [
    {
      icon: <Film size={32} />,
      title: "Story Films",
      description:
        "One‑minute videos that show the heart behind your brand.",
    },
    {
      icon: <Camera size={32} />,
      title: "Social Refresh",
      description:
        "Fresh photos & Reels every week so you stay in the conversation.",
    },
    {
      icon: <Calendar size={32} />,
      title: "Event Memories",
      description:
        "Pop‑ups, launches, events, filmed today, shared tomorrow.",
    },
  ];
  return (
    <section id="services" className="w-full bg-black py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            We combine strategic thinking with cutting-edge execution to deliver
            exceptional results for our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 hover:bg-zinc-800 transition-colors">
              <div className="mb-5 text-white">{service.icon}</div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
