"use client";

import { useEffect, useState } from "react";

export default function OurMissionSection() {
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

    const section = document.getElementById("our-mission");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="our-mission"
      className="bg-white py-16 px-6 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-red-500 opacity-20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-red-500 opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 border border-red-500 opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-8 h-8 bg-black opacity-10 transform rotate-45 animate-ping"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-black rounded-full animate-bounce opacity-60 delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-30 delay-700"></div>
        <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-black rounded-full animate-pulse opacity-50 delay-1000"></div>

        {/* Abstract lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-10 animate-pulse"></div>
        <div className="absolute left-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-black to-transparent opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Glowing effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-32 w-40 h-40 bg-red-500 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-48 h-48 bg-black rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated heading */}
        <div className="relative mb-12">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Our Mission
          </h2>

          {/* Decorative elements around title */}
          <div
            className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 delay-300 transform ${
              isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div className="w-12 h-px bg-red-500"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-12 h-px bg-red-500"></div>
          </div>
        </div>

        {/* Mission statement with enhanced styling */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Background card */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden">
              {/* Card background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-8 h-8 border border-red-500 rotate-45"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-red-500 rounded-full"></div>
              </div>

             
              <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-red-500 shadow-sm">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  As experienced Amazon sellers ourselves, we understand the
                  importance of clear communication, precise packaging, and
                  timely service in every step of the process. Our goal is to
                  provide peace of mind by ensuring your products meet
                  Amazon&apos;s standards, and your shipments reach their
                  destinations accurately and efficiently.{" "}
                  <span className="text-red-600 font-semibold">
                    Matthew is committed to helping you grow your business with
                    confidence.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission highlights */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="group">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors duration-300">
                <div className="w-6 h-6 bg-red-500 rounded group-hover:bg-white transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Efficient
              </h3>
              <p className="text-gray-600 text-sm">
                Streamlined processes for maximum efficiency
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors duration-300">
                <div className="w-6 h-6 bg-red-500 rounded group-hover:bg-white transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Cost-Effective
              </h3>
              <p className="text-gray-600 text-sm">
                Maximize savings with competitive rates
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors duration-300">
                <div className="w-6 h-6 bg-red-500 rounded group-hover:bg-white transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Reliable
              </h3>
              <p className="text-gray-600 text-sm">
                Consistent quality and timely delivery
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors duration-300">
                <div className="w-6 h-6 bg-red-500 rounded group-hover:bg-white transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Experienced
              </h3>
              <p className="text-gray-600 text-sm">
                Amazon sellers helping Amazon sellers
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div
          className={`mt-12 transition-all duration-1000 delay-900 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="group relative px-8 py-4 bg-red-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
            <span className="relative z-10">Start Your Journey With Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
    </section>
  );
}
