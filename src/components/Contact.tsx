"use client";
import React from "react";
import { Send, MapPin, Camera, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 sm:gap-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 sm:mb-4">
                Ready to <span className="text-gradient">Transform?</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-400">
                Book a free demo session today and take the first step towards fluent communication.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all shrink-0">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div className="text-slate-400 text-xs sm:text-sm">Chat on WhatsApp</div>
                  <div className="text-white font-semibold text-base sm:text-lg">+91 98765 43210</div>
                </div>
              </a>

              <a href="https://www.instagram.com/talkproenglishacademy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all shrink-0">
                  <Camera size={22} />
                </div>
                <div>
                  <div className="text-slate-400 text-xs sm:text-sm">Follow on Instagram</div>
                  <div className="text-white font-semibold text-base sm:text-lg">@englishtalkacademy</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-slate-400 text-xs sm:text-sm">Visit Us</div>
                  <div className="text-white font-semibold text-base sm:text-lg">New Delhi, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 rounded-3xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6">Book Your Free Demo</h3>
            <form className="flex flex-col gap-3 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full bg-[#020817] border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base focus:outline-none focus:border-yellow-400 transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-[#020817] border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base focus:outline-none focus:border-yellow-400 transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-[#020817] border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base focus:outline-none focus:border-yellow-400 transition-colors" />
              <textarea rows={4} placeholder="Your Goal (e.g. Interview Prep)" className="w-full bg-[#020817] border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base focus:outline-none focus:border-yellow-400 transition-colors resize-none"></textarea>
              <button className="bg-yellow-400 text-slate-900 font-bold py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors mt-2 shadow-lg text-sm sm:text-base">
                Submit Request <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
