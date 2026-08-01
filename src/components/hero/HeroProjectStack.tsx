import React from "react";
import ScrollReveal from "../common/ScrollReveal";
import BrowserCard from "../ui/BrowserCard";

export default function HeroProjectStack() {
  return (
    <ScrollReveal delayMs={500}>
      <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[560px] z-30 -mb-40 sm:-mb-64 md:-mb-80 pointer-events-auto">
        {/* Card 1: Far Left */}
        <div className="absolute left-[2%] sm:left-[5%] md:left-[8%] bottom-6 sm:bottom-12 w-[190px] sm:w-[320px] md:w-[420px] z-10 transform -rotate-18 translate-y-8 sm:translate-y-12 hover:rotate-0 hover:scale-108 hover:z-50 transition-all duration-300">
          <BrowserCard
            imageSrc="/hero-img/hero-img (3).png"
            filename="project-showcase-3.png"
            alt="Web Showcase 3"
          />
        </div>

        {/* Card 2: Middle Left */}
        <div className="absolute left-[15%] sm:left-[18%] md:left-[22%] bottom-3 sm:bottom-6 w-[220px] sm:w-[380px] md:w-[480px] z-20 transform -rotate-9 translate-y-3 sm:translate-y-6 hover:rotate-0 hover:scale-108 hover:z-50 transition-all duration-300">
          <BrowserCard
            imageSrc="/hero-img/hero-img (1).png"
            filename="project-showcase-1.png"
            alt="Web Showcase 1"
          />
        </div>

        {/* Card 3: CENTER MAIN FEATURED CARD */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[260px] sm:w-[440px] md:w-[560px] lg:w-[620px] z-40 transform hover:scale-108 transition-all duration-300">
          <BrowserCard
            imageSrc="/hero-img/hero-img (2).png"
            filename="https://sangiara.digital"
            alt="Sangiara Digital Main Showcase"
            isMainFeatured={true}
          />
        </div>

        {/* Card 4: Middle Right */}
        <div className="absolute right-[15%] sm:right-[18%] md:right-[22%] bottom-3 sm:bottom-6 w-[220px] sm:w-[380px] md:w-[480px] z-20 transform rotate-9 translate-y-3 sm:translate-y-6 hover:rotate-0 hover:scale-108 hover:z-50 transition-all duration-300">
          <BrowserCard
            imageSrc="/hero-img/hero-img (4).png"
            filename="project-showcase-4.png"
            alt="Web Showcase 4"
          />
        </div>

        {/* Card 5: Far Right */}
        <div className="absolute right-[2%] sm:right-[5%] md:right-[8%] bottom-6 sm:bottom-12 w-[190px] sm:w-[320px] md:w-[420px] z-10 transform rotate-18 translate-y-8 sm:translate-y-12 hover:rotate-0 hover:scale-108 hover:z-50 transition-all duration-300">
          <BrowserCard
            imageSrc="/hero-img/hero-img (5).png"
            filename="project-showcase-5.png"
            alt="Web Showcase 5"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
