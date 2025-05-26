"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Define brand logos with their file paths and names
const brandLogos = [
  { id: 1, name: "Analog Devices", path: "/lovable-uploads/e3acba0e-7b68-401e-b201-44063fdbc72f.png" },
  { id: 2, name: "Bosch", path: "/lovable-uploads/62f85d65-d690-4c32-8360-8480630ef942.png" },
  { id: 3, name: "Onsemi", path: "/lovable-uploads/58eb0ab1-4ff5-4eb3-830c-11e2abf04c6d.png" },
  { id: 4, name: "ST", path: "/lovable-uploads/38164ad4-cfc9-4f71-be66-95218d10e1d2.png" },
  { id: 5, name: "Vishay", path: "/lovable-uploads/97b0cf85-8e87-439c-aaf1-8d08bde18eac.png" },
];

export default function BrandShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="fade-in-section py-8 md:py-12 bg-white border-y border-gray-200 overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-0">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-orange-600 tracking-wider font-ubuntu">
            FEATURED MANUFACTURERS
          </h2>
        </div>

        <div className="brand-slider w-full overflow-hidden">
          <div className="brand-track flex items-center animate-scroll hover:pause-animation">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, index) => (
              <div 
                key={index} 
                className="min-w-[200px] h-20 flex items-center justify-center mx-4 transition-transform hover:scale-110 duration-300"
              >
                <div className="h-full flex items-center justify-center p-3">
                  <Image 
                    src={brand.path} 
                    alt={brand.name} 
                    width={150}
                    height={50}
                    className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
