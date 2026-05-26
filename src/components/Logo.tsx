import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 260 80"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[160px] sm:w-[200px] h-auto"
        aria-label="TalkPro English Academy"
      >
        {/* Speech Bubble Icon */}
        <g>
          <rect x="2" y="4" width="34" height="28" rx="8" ry="8"
            fill="none" stroke="#facc15" strokeWidth="2.5" />
          {/* Tail of speech bubble */}
          <path d="M8 32 L4 42 L18 34" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        </g>

        {/* "Talk" - White text */}
        <text
          x="44"
          y="36"
          fontFamily="'Outfit', 'Inter', sans-serif"
          fontWeight="700"
          fontSize="32"
          fill="#ffffff"
          letterSpacing="-0.5"
        >
          Talk
        </text>

        {/* "Pro" - Yellow text */}
        <text
          x="130"
          y="36"
          fontFamily="'Outfit', 'Inter', sans-serif"
          fontWeight="700"
          fontSize="32"
          fill="#facc15"
          letterSpacing="-0.5"
        >
          Pro
        </text>

        {/* Leaf sprouts on top of the "o" in Pro */}
        {/* Left leaf */}
        <path
          d="M207 8 C205 4, 201 2, 200 6 C201 9, 205 10, 207 8 Z"
          fill="#facc15"
        />
        {/* Right leaf */}
        <path
          d="M213 5 C215 1, 219 2, 218 6 C216 9, 212 8, 213 5 Z"
          fill="#facc15"
        />
        {/* Small stem connecting leaves */}
        <line x1="210" y1="10" x2="210" y2="14" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" />

        {/* Tagline */}
        <text
          x="44"
          y="56"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="9"
          fill="#94a3b8"
          letterSpacing="0.2"
        >
          Speak with Purpose · Learn with TalkPro
        </text>
      </svg>
    </div>
  );
}
