"use client";
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
      role: "Rapid Flow Fulfillment Owner",
      image: member1,
    },
    {
      id: 2,
      name: "Eric",
      role: "Leader",
      image: member2,
    },
    {
      id: 3,
      name: "Khai",
      role: "Assistant Leader",
      image: member3,
    },
    {
      id: 4,
      name: "Luis",
      role: "Employee",
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
        threshold: 0.3,
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
      className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6 overflow-hidden min-h-screen"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-red-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 left-32 w-12 h-12 border-2 border-red-500 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 right-32 w-8 h-8 border border-white rotate-12 animate-spin-reverse"></div>
          <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-ping"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex items-center min-h-screen">
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left Side - Team Info */}
          <div className="space-y-12">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="inline-block bg-red-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-red-500/20 mb-8">
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Our Leadership
                </span>
              </div>

              <h2 className="text-6xl lg:text-8xl font-black text-white leading-none mb-8">
                Meet
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Our Team
                </span>
              </h2>

              <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                The skilled professionals dedicated to delivering seamless and
                reliable FBA prep services for your business.
              </p>

              <button className="group relative px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25">
                <span className="relative z-10">Meet The Team</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Team Members in Creative Layout */}
          <div className="relative">
            <div
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* Overlapping Cards Layout */}
              <div className="relative w-full h-[600px]">
                {/* Card 1 - Top Left */}
                <div className="absolute top-0 left-0 w-64 h-80 transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-50 z-40">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl h-full">
                    <div className="relative mb-4 overflow-hidden rounded-xl h-48">
                      <Image
                        src={teamMembers[0].image || "/placeholder.svg"}
                        alt={teamMembers[0].name}
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-black text-white mb-1">
                        {teamMembers[0].name}
                      </h3>
                      <p className="text-red-400 font-bold text-sm">
                        {teamMembers[0].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Top Right */}
                <div className="absolute top-8 right-0 w-64 h-80 transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-50 z-30">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl h-full">
                    <div className="relative mb-4 overflow-hidden rounded-xl h-48">
                      <Image
                        src={teamMembers[1].image || "/placeholder.svg"}
                        alt={teamMembers[1].name}
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-black text-white mb-1">
                        {teamMembers[1].name}
                      </h3>
                      <p className="text-red-400 font-bold text-sm">
                        {teamMembers[1].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Bottom Left */}
                <div className="absolute bottom-0 left-16 w-64 h-80 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-50 z-20">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl h-full">
                    <div className="relative mb-4 overflow-hidden rounded-xl h-48">
                      <Image
                        src={teamMembers[2].image || "/placeholder.svg"}
                        alt={teamMembers[2].name}
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-black text-white mb-1">
                        {teamMembers[2].name}
                      </h3>
                      <p className="text-red-400 font-bold text-sm">
                        {teamMembers[2].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Bottom Right */}
                <div className="absolute bottom-8 right-16 w-64 h-80 transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-50 z-10">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl h-full">
                    <div className="relative mb-4 overflow-hidden rounded-xl h-48">
                      <Image
                        src={teamMembers[3].image || "/placeholder.svg"}
                        alt={teamMembers[3].name}
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-black text-white mb-1">
                        {teamMembers[3].name}
                      </h3>
                      <p className="text-red-400 font-bold text-sm">
                        {teamMembers[3].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Central Connection Lines */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse z-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-red-500/30 rounded-full animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
