import React from "react";
import { Phone, FileText, Camera, Download } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Phone size={32} />,
      title: "Idea Call",
      description: "30 min to swap references and set a budget.",
    },
    {
      icon: <FileText size={32} />,
      title: "Plan Sheet",
      description: "1‑page mood board in your inbox.",
    },
    {
      icon: <Camera size={32} />,
      title: "Shoot Day",
      description: "Small pro crew shows up, directs talent, keeps things on time.",
    },
    {
      icon: <Download size={32} />,
      title: "Files Delivered",
      description: "ready to post in 7 days (faster if you need).",
    },
  ];

  return (
    <section className="w-full bg-zinc-900 py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400">
            4 easy steps from idea to final delivery
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="bg-white text-black p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <div className="mb-2">
                <span className="text-gray-400 text-sm font-medium">
                  STEP {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-light text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};