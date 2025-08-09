export const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-zinc-900 py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8">
              Why Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center mx-auto mb-6 rounded-full">
                <span className="text-xl font-light text-white">01</span>
              </div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-4">
                We Care
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                Your story comes first; the camera is second.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center mx-auto mb-6 rounded-full">
                <span className="text-xl font-light text-white">02</span>
              </div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-4">
                We're Quick
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                One‑week turnaround, because momentum matters.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center mx-auto mb-6 rounded-full">
                <span className="text-xl font-light text-white">03</span>
              </div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-4">
                We're Human
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                Friendly crew, clear talk, easy to work with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
