"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Transformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const scrollWidth = scrollRef.current?.scrollWidth || 0;
        return -(scrollWidth - window.innerWidth + 100);
      };

      gsap.to(scrollRef.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: () => `+=${scrollRef.current?.scrollWidth || 2000}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          paddingBottom: 120,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-10 bg-[#0a0f24]">
      <div className="px-6 lg:px-8 mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-heading font-bold text-white mb-4">
          From Fear to <span className="text-gradient">Fluency</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl">
          Witness the journey of our students. Real stories of hesitation turning into unshakeable confidence.
        </p>
      </div>

      <div className="pl-6 lg:pl-8 pb-10">
        <div ref={scrollRef} className="flex gap-6 w-[250vw] sm:w-[150vw] lg:w-[120vw]">
          
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[380px]" style={{ height: "min(420px, 55vh)" }}>
              <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden group">
                <Image 
                  src={`/images/transform.png`} 
                  alt="Transformation Story" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/60 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-red-500/20 text-red-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-red-500/30">Before: Nervous</span>
                    <span className="bg-green-500/20 text-green-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">After: Confident</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Priya&apos;s Journey</h3>
                  <p className="text-slate-300 text-xs md:text-sm line-clamp-2">
                    &quot;I used to tremble before interviews. English Talk didn&apos;t just teach me English; they gave me a voice. I recently cracked a senior role at an MNC.&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
