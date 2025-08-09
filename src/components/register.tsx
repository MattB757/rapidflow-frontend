/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useState } from "react";
import { useGetQuoteLeftQuery } from "@/redux/api/quoteleftApi";
import { useSendQuoteMutation } from "@/redux/api/sendQuoteApi";
import LeftContent from "./ragister-left";
import RightForm from "./register-right";


export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    serviceType: "",
    customService: "",
    budget: "",
  });

  const { isLoading, data, isSuccess } = useGetQuoteLeftQuery({});
  const [sendQuote] = useSendQuoteMutation();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/20 via-transparent to-red-500/20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-500/15 via-transparent to-red-600/15 animate-pulse delay-1000"></div>
        </div>

        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-600/15 to-red-500/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-red-400/10 to-red-500/10 rounded-full blur-2xl animate-float delay-500"></div>

        <div className="absolute inset-0">
          <div className="absolute top-32 left-32 w-24 h-24 border border-red-500/20 rotate-12 animate-spin-slow">
            <div className="w-full h-full border border-red-400/10 rotate-45"></div>
          </div>
          <div className="absolute bottom-40 right-40 w-32 h-32 border border-white/10 rotate-45 animate-spin-reverse">
            <div className="w-full h-full border border-red-500/15 rotate-12"></div>
          </div>
        </div>

        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <path
              d="M0,300 Q250,100 500,300 T1000,300"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,700 Q250,500 500,700 T1000,700"
              stroke="url(#gradient2)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse delay-500"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
                <stop offset="50%" stopColor="rgba(239, 68, 68, 0.3)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.2)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto md:px-4 px-1 md:py-8 py-4 relative z-10 mt-14">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <LeftContent 
              isLoading={isLoading}
              isSuccess={isSuccess}
              data={data}
            />
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2">
            <RightForm 
              formData={formData}
              handleInputChange={handleInputChange}
              isSubmitting={isSubmitting}
              setIsSubmitting={setIsSubmitting}
              sendQuote={sendQuote}
              setFormData={setFormData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}