import React from "react";
export const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-zinc-900 py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
              Why Choose Our Agency
            </h2>
            <p className="text-gray-400 mb-6">
              Since 2010, we've been partnering with forward-thinking brands to
              create digital experiences that drive real business growth. Our
              approach combines strategic thinking with flawless execution.
            </p>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center mr-4">
                  <span className="font-light text-white">01</span>
                </div>
                <div>
                  <h3 className="font-light text-white mb-2">
                    Strategic Approach
                  </h3>
                  <p className="text-gray-400">
                    We develop tailored strategies based on deep market insights
                    and your unique business goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center mr-4">
                  <span className="font-light text-white">02</span>
                </div>
                <div>
                  <h3 className="font-light text-white mb-2">
                    Creative Excellence
                  </h3>
                  <p className="text-gray-400">
                    Our award-winning creative team delivers innovative
                    solutions that captivate and convert.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center mr-4">
                  <span className="font-light text-white">03</span>
                </div>
                <div>
                  <h3 className="font-light text-white mb-2">
                    Measurable Results
                  </h3>
                  <p className="text-gray-400">
                    We focus on delivering tangible outcomes and continuous
                    improvement for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-zinc-800"></div>
            <div className="aspect-square bg-zinc-800"></div>
            <div className="aspect-square bg-zinc-800"></div>
            <div className="aspect-square bg-zinc-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
