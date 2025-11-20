import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { chefimage } from "../../assets/assets";
import Gallery from "../Gallery/Gallery";

export default function MultiCardCarousel() {
  const [active, setActive] = useState(2);
  const autoplayRef = useRef(null);

  // Sample data - replace with your API data
  const clients = [
    { id: 1, name: "Face 1", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "Face 2", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "Face 3", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, name: "Face 4", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, name: "Face 5", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" },
  ];

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActive((a) => (a + 1) % clients.length);
    }, 3500);
    return () => clearInterval(autoplayRef.current);
  }, [clients.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function prev() {
    setActive((a) => (a - 1 + clients.length) % clients.length);
    resetAutoplay();
  }

  function next() {
    setActive((a) => (a + 1) % clients.length);
    resetAutoplay();
  }

  function resetAutoplay() {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setActive((a) => (a + 1) % clients.length);
    }, 3500);
  }

  // Calculate position and style for each card
  const getCardStyle = (index) => {
    const offset = index - active;
    const absOffset = Math.abs(offset);
    
    // Position calculation
    let translateX = offset * 180; // Base spacing
    let scale = 1;
    let zIndex = 10;
    let opacity = 0.4;
    let blur = 2;
    
    if (offset === 0) {
      // Center card - largest and prominent
      scale = 1.15;
      zIndex = 50;
      opacity = 1;
      blur = 0;
      translateX = 0;
    } else if (absOffset === 1) {
      // Adjacent cards
      scale = 0.85;
      zIndex = 30;
      opacity = 0.7;
      blur = 0;
      translateX = offset * 220;
    } else if (absOffset === 2) {
      // Second-level cards
      scale = 0.65;
      zIndex = 20;
      opacity = 0.5;
      blur = 1;
      translateX = offset * 240;
    } else {
      // Hidden cards
      scale = 0.5;
      zIndex = 10;
      opacity = 0;
      blur = 2;
      translateX = offset * 260;
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      opacity,
      filter: `blur(${blur}px)`,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          <div className="w-full md:w-96">
            <img
              src={
                   chefimage
              }
              alt={'/'}
              className="w-full rounded-xl  shadow-none"
              style={{ aspectRatio: "4/5" }}
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6">
              About Gocool
            </h1>

            <p className="text-[#2B2B2B] text-base leading-relaxed mb-10">
            Classically trained Chef and Culinary Professional with 16+ years of
dedicated service experience.  Proven leaderskilled in building high-
performing teams, committed to exceptional customer service, am
supervising operations, delivering culinary excellence, and dedicated
to food safety and quality food service.Has the ability to drive sales,
reduce costs, and increase profits. Monitored food quality consiste
Inspired and supported team members in decision-making in charg
of catering for various events.Improved food and labor cost within 3 
months by restructuring recipe and labor processes re-developed t
entire menu in 2019.
            </p>

            <Link
              to="/contact"
              className="inline-block text-white px-8 py-3 rounded-xl font-semibold text-lg"
              style={{
                background: "linear-gradient(93.5deg, #FFFFFF -44.21%, #EC984B 21.38%, #E6750D 106.46%)",
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>
        {/* Famous Faces Carousel Section */}
        <section className="mt-20 mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-3">
            Famous Faces We've <span className="text-orange-500">Worked</span> With
          </h2>
          <p className="text-center text-gray-600 text-sm md:text-base mb-12 max-w-3xl mx-auto">
            Welcome to CutsCoffeeStudio, where your creative ideas come to life! My team and I offer comprehensive video editing services, including shooting, and I also provide courses designed to help you become a better video editor.
          </p>

          <div className="relative h-96 flex items-center justify-center overflow-hidden">
            {/* Cards */}
            <div className="relative w-full h-full flex items-center justify-center">
              {clients.map((client, index) => (
                <button
                  key={client.id}
                  onClick={() => {
                    setActive(index);
                    resetAutoplay();
                  }}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={getCardStyle(index)}
                  aria-label={`View ${client.name}`}
                >
                  <div className="relative w-64 h-80 rounded-3xl overflow-hidden bg-white shadow-2xl border-4 border-white">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-8 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-8 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActive(index);
                  resetAutoplay();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active 
                    ? "w-8 bg-orange-500" 
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
<Gallery/>
      </div>
    </div>
  );
}