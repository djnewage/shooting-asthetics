import React, { useState } from "react";
import { ArrowRightIcon, PlayCircle } from "lucide-react";
import { VideoModal } from "./VideoModal";

export const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<{
    vimeoUrl: string;
    title: string;
  } | null>(null);

  const filters = ["All", "Branding", "Digital", "Strategy", "Campaign"];

  const projects = [
    {
      title: "UL x Brewers Campaign",
      category: "Campaign",
      image: "/images/DSCF5017.JPG",
      vimeoUrl: "https://player.vimeo.com/video/1108700816?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      title: "Milwaukee Campaign (Ike)",
      category: "Campaign",
      image: "/images/ike.jpg",
      vimeoUrl: "https://player.vimeo.com/video/1108700586?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      title: "UL x BR Reel",
      category: "Digital",
      image: "/images/DSCF2734.jpg",
      vimeoUrl: "https://player.vimeo.com/video/1108700803?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      title: "Screen Print Process",
      category: "Branding",
      image: "/images/DSCF3497.jpg",
      vimeoUrl: "https://player.vimeo.com/video/1108700681?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      title: "Milwaukee Campaign (Jon)",
      category: "Campaign",
      image: "/images/3-25-25 Johnny Milwaukee-2.jpg",
      vimeoUrl: "https://player.vimeo.com/video/1108700595?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      title: "August - Brand Story",
      category: "Strategy",
      image: "/images/Rob-2.JPG",
      vimeoUrl: "https://player.vimeo.com/video/1108700494?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleViewProject = (vimeoUrl: string, title: string) => {
    setSelectedVideo({ vimeoUrl, title });
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section id="work" className="w-full bg-black py-20 md:py-28 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
              Our Work
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-8">
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
              <div
                key={index}
                className="group relative overflow-hidden cursor-pointer"
                onClick={() =>
                  handleViewProject(project.vimeoUrl, project.title)
                }>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[480px] md:h-[540px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Always visible gradient overlay on mobile, hover-only on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl md:text-3xl font-light mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg mb-4">
                    {project.category}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewProject(project.vimeoUrl, project.title);
                    }}
                    className="inline-flex items-center text-white gap-2 hover:text-gray-300 transition-colors">
                    <PlayCircle size={20} />
                    Play Video
                  </button>
                </div>
                {/* Play icon - always visible on mobile, hover on desktop */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-sm rounded-full p-4 border-2 border-white/80">
                    <PlayCircle size={40} className="text-white fill-white" />
                  </div>
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

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={handleCloseModal}
          vimeoUrl={selectedVideo.vimeoUrl}
          title={selectedVideo.title}
        />
      )}
    </>
  );
};
