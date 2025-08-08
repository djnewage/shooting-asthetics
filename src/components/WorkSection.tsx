import React, { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
export const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Branding", "Digital", "Strategy", "UX Design"];
  const projects = [
    {
      title: "Novo Rebrand",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Elara Digital Platform",
      category: "Digital",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Vertex Growth Campaign",
      category: "Strategy",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pulse App Redesign",
      category: "UX Design",
      image:
        "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Horizon Website",
      category: "Digital",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Spark Identity",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1634586829111-50c5a5aa3e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
  ];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  return (
    <section id="work" className="w-full bg-black py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
            Our Work
          </h2>
          <p className="text-gray-400 mb-8">
            A selection of our recent projects showcasing our expertise and
            creative capabilities.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 transition-colors ${
                  activeFilter === filter
                    ? "bg-white text-black"
                    : "bg-zinc-900 text-white/80 border border-zinc-800 hover:border-zinc-700"
                }`}>
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-light mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.category}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-white gap-2">
                  View Project <ArrowRightIcon size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white hover:bg-white/10 transition-colors">
            Start Your Project <ArrowRightIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
