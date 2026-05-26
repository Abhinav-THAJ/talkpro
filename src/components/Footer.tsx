import React from "react";
import Logo from "./Logo";
import { Camera, Briefcase, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-12 sm:pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">

          <div className="sm:col-span-2">
            <Logo className="items-start mb-4 sm:mb-6" />
            <p className="text-slate-400 max-w-sm mt-4 text-sm sm:text-base">
              Premium spoken English and communication academy. We don&apos;t just teach English, we build confidence.
            </p>
            <div className="flex gap-4 mt-5 sm:mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-500 transition-all">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Briefcase size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-400 transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
            <ul className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
              <li><a href="#home" className="text-slate-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-slate-400 hover:text-yellow-400 transition-colors">Courses</a></li>
              <li><a href="#success" className="text-slate-400 hover:text-yellow-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Contact</h4>
            <ul className="flex flex-col gap-2 sm:gap-3 text-slate-400 text-sm sm:text-base">
              <li>info@englishtalk.com</li>
              <li>+91 98765 43210</li>
              <li>New Delhi, India</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 gap-3 sm:gap-0">
          <p>&copy; {new Date().getFullYear()} English Talk Academy. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
