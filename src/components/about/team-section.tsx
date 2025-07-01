"use client";

import { Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import member1 from "@/assets/download1.jpg";
import member2 from "@/assets/download2.jpg";
import member3 from "@/assets/owner3.jpg";
import member4 from "@/assets/download3.avif";

export default function MeetOurTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Marco",
      role: "HexPrep Owner",
      image: member1,
    },
    {
      id: 2,
      name: "Eric",
      role: "HexPrep Owner",
      image: member2,
    },
    {
      id: 3,
      name: "Khai",
      role: "HexPrep Owner",
      image: member3,
    },
    {
      id: 4,
      name: "Luis",
      role: "HexPrep Co-Owner",
      image: member4,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
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
    <section
      ref={sectionRef}
      id="meet-our-team"
      className="relative bg-gray-50 py-20 px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-black/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-red-400/8 rounded-full blur-2xl animate-float"></div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 left-32 w-12 h-12 border-2 border-red-500 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 right-32 w-8 h-8 border border-black rotate-12 animate-spin-reverse"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Meet our{" "}
            <span className="relative">
              <span className="text-red-600">team</span>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the skilled team dedicated to delivering seamless and reliable
            FBA prep services for your business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* First card - comes from LEFT */}
          <div
            className={`group transition-all duration-1000 ${
              isVisible
                ? "animate-slide-from-left"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ animationDelay: isVisible ? "200ms" : "0ms" }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:bg-red-500/10 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={teamMembers[0].image || "/placeholder.svg"}
                    alt={teamMembers[0].name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    width={300}
                    height={400}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-4 right-4 flex gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                      <Twitter className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {teamMembers[0].name}
                  </h3>
                  <p className="text-red-600 font-semibold text-lg">
                    {teamMembers[0].role}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1 mt-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 text-sm font-medium">
                      Leadership Team
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second card - comes from TOP */}
          <div
            className={`group transition-all duration-1000 ${
              isVisible
                ? "animate-slide-from-top"
                : "opacity-0 -translate-y-full"
            }`}
            style={{ animationDelay: isVisible ? "400ms" : "0ms" }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:bg-red-500/10 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={teamMembers[1].image || "/placeholder.svg"}
                    alt={teamMembers[1].name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    width={300}
                    height={400}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-4 right-4 flex gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                      <Twitter className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {teamMembers[1].name}
                  </h3>
                  <p className="text-red-600 font-semibold text-lg">
                    {teamMembers[1].role}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1 mt-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 text-sm font-medium">
                      Leadership Team
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third card - comes from RIGHT */}
          <div
            className={`group transition-all duration-1000 ${
              isVisible
                ? "animate-slide-from-right"
                : "opacity-0 translate-x-full"
            }`}
            style={{ animationDelay: isVisible ? "600ms" : "0ms" }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:bg-red-500/10 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={teamMembers[2].image || "/placeholder.svg"}
                    alt={teamMembers[2].name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    width={300}
                    height={400}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-4 right-4 flex gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                      <Twitter className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {teamMembers[2].name}
                  </h3>
                  <p className="text-red-600 font-semibold text-lg">
                    {teamMembers[2].role}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1 mt-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 text-sm font-medium">
                      Leadership Team
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth card - comes from BOTTOM */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm md:max-w-none md:w-80 lg:w-96">
            <div
              className={`group transition-all duration-1000 ${
                isVisible
                  ? "animate-slide-from-bottom"
                  : "opacity-0 translate-y-full"
              }`}
              style={{ animationDelay: isVisible ? "800ms" : "0ms" }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:bg-red-500/10 transition-colors duration-300"></div>

                <div className="relative z-10">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={teamMembers[3].image || "/placeholder.svg"}
                      alt={teamMembers[3].name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      width={300}
                      height={400}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute bottom-4 right-4 flex gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                        <Twitter className="w-4 h-4" />
                      </div>
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-200">
                        <Mail className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {teamMembers[3].name}
                    </h3>
                    <p className="text-red-600 font-semibold text-lg">
                      {teamMembers[3].role}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1 mt-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-red-600 text-sm font-medium">
                        Leadership Team
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
