"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/common/ContactModal";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black py-12 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-2xl -translate-x-32 -translate-y-32"></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="mb-12">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Streamline Your{" "}
            <span className="text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
              Amazon Business
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful sellers who trust HexPrep for their FBA
            prep needs
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-4 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/25 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>

          <Button
            variant="outline"
            className="bg-transparent border-2 border-white/20 hover:border-red-500 text-white hover:text-red-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
          >
            View Pricing
          </Button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
