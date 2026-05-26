"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Wifi, MapPin, CheckCircle } from "lucide-react";

export default function Classes() {
  return (
    <section className="py-16 sm:py-24 bg-[#070b1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6">
            Learn <span className="text-gradient">Anywhere</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Choose the mode of learning that fits your lifestyle perfectly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-3xl overflow-hidden relative group"
          >
            <div className="h-48 sm:h-64 relative">
              <Image src="/images/online.png" alt="Online Classes" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
              <div className="absolute top-4 right-4 bg-blue-500/80 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full flex items-center gap-2 text-white text-xs sm:text-sm font-bold">
                <Wifi size={14} /> Online
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Virtual Live Classes</h3>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-slate-300 text-sm sm:text-base">
                <li className="flex gap-3 items-center"><CheckCircle size={16} className="text-blue-400 shrink-0" /> Interactive Zoom sessions</li>
                <li className="flex gap-3 items-center"><CheckCircle size={16} className="text-blue-400 shrink-0" /> Global peer interaction</li>
                <li className="flex gap-3 items-center"><CheckCircle size={16} className="text-blue-400 shrink-0" /> Flexible scheduling</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors font-semibold text-sm sm:text-base">
                Explore Online Options
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-3xl overflow-hidden relative group"
          >
            <div className="h-48 sm:h-64 relative">
              <Image src="/images/process.png" alt="Offline Classes" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
              <div className="absolute top-4 right-4 bg-yellow-500/80 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                <MapPin size={14} /> Offline Campus
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">In-Person Training</h3>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-slate-300 text-sm sm:text-base">
                <li className="flex gap-3 items-center"><CheckCircle size={16} className="text-yellow-400 shrink-0" /> Immersive academy environment</li>
                <li className="flex gap-3 items-center"><CheckCircle size={16} className="text-yellow-400 shrink-0" /> Face-to-face mentorship</li>
                <li className="flex gap-3 items-center"><CheckCircle size={16} className="text-yellow-400 shrink-0" /> Physical public speaking practice</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-yellow-400 text-slate-900 hover:bg-yellow-300 transition-colors font-semibold shadow-lg text-sm sm:text-base">
                Visit Our Center
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
