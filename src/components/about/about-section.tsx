"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-section"
      className="bg-black py-16 px-6 relative overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ef4444' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large hexagons */}
        <div className="absolute -top-20 -left-20 w-40 h-40 opacity-10">
          <div className="w-full h-full bg-red-500 transform rotate-45 animate-spin-slow rounded-lg"></div>
        </div>
        <div className="absolute -top-10 right-20 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-red-500 transform rotate-12 animate-pulse rounded-full"></div>
        </div>
        <div className="absolute bottom-20 -right-20 w-48 h-48 opacity-10">
          <div className="w-full h-full bg-red-500 transform -rotate-45 animate-spin-slow rounded-lg"></div>
        </div>
        <div className="absolute bottom-40 -left-10 w-36 h-36 opacity-10">
          <div className="w-full h-full bg-red-500 transform rotate-90 animate-bounce rounded-full"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-80 delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-bounce opacity-40 delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-70 delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-50 delay-500"></div>
        <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-red-400 rounded-full animate-bounce opacity-60 delay-1200"></div>

        {/* Animated lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-20 animate-pulse delay-500"></div>
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full opacity-5 blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-red-600 rounded-full opacity-5 blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500 rounded-full opacity-3 blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Circuit-like pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <path
            d="M50 50 L150 50 L150 150 L250 150 L250 250 L350 250"
            stroke="#ef4444"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1000;1000,0;0,1000"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M350 50 L250 50 L250 150 L150 150 L150 250 L50 250"
            stroke="#ef4444"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="stroke-dasharray"
              values="1000,0;0,1000;1000,0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <circle cx="150" cy="150" r="3" fill="#ef4444" opacity="0.5">
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="250" cy="150" r="3" fill="#ef4444" opacity="0.5">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center md:mt-20 relative z-10">
        {/* Animated heading */}
        <div className="relative mb-8">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            About Us
          </h2>
          {/* Red accent line */}
          <div
            className={`w-24 h-1 bg-red-500 mx-auto transition-all duration-1000 delay-300 transform ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* Animated paragraph */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-gray-800/50">
            At{" "}
            <span className="text-red-500 font-semibold hover:text-red-400 transition-colors duration-300 cursor-default">
              Matthew
            </span>
            , we pride ourselves on being a reliable and efficient partner for
            Amazon FBA sellers, resellers, and businesses in need of shipping
            support. We offer quick turnaround times, excellent communication,
            and competitive rates to ensure your products are prepped and
            shipped seamlessly. Whether you&apos;re looking to streamline your
            FBA prep or need assistance with shipping logistics,{" "}
            <span className="text-red-500 font-semibold hover:text-red-400 transition-colors duration-300 cursor-default">
              Matthew
            </span>{" "}
            is here to help your business succeed.
          </p>
        </div>

        {/* Animated call-to-action button */}
        <div
          className={`mt-12 transition-all duration-1000 delay-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="group relative px-8 py-4 bg-red-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
            <span className="relative z-10">Learn More About Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Floating stats */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-900 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="group cursor-default">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-800/80">
              <div className="text-2xl font-bold text-red-500 mb-2 group-hover:animate-pulse">
                Fast
              </div>
              <div className="text-gray-300 text-sm">Quick Turnaround</div>
            </div>
          </div>
          <div className="group cursor-default">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-800/80">
              <div className="text-2xl font-bold text-red-500 mb-2 group-hover:animate-pulse">
                Reliable
              </div>
              <div className="text-gray-300 text-sm">
                Excellent Communication
              </div>
            </div>
          </div>
          <div className="group cursor-default">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-800/80">
              <div className="text-2xl font-bold text-red-500 mb-2 group-hover:animate-pulse">
                Affordable
              </div>
              <div className="text-gray-300 text-sm">Competitive Rates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
    </section>
  );
}
