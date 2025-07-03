"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"

export default function ProcessSection() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    { id: 1, text: "Receive the package" },
    { id: 2, text: "Inspect the package, ensuring everything is correct" },
    { id: 3, text: "Start prepping the units" },
    { id: 4, text: "Package the units" },
    {
      id: 5,
      text: "Notify the customer that everything is ready for shipment",
    },
    { id: 6, text: "We ship the package out" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= 7) {
          // reset to the first step
          return 1
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return "completed"
    if (stepId === currentStep) return "active"
    return "pending"
  }

  const getStepIcon = (stepId: number) => {
    const status = getStepStatus(stepId)

    if (status === "completed") {
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-500/50 animate-pulse">
          <Check className="w-10 h-10 text-white" />
        </div>
      )
    }

    if (status === "active") {
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-3xl flex items-center justify-center shadow-2xl shadow-black/50 animate-bounce">
          <span className="text-white font-bold text-2xl">{stepId}</span>
        </div>
      )
    }

    return (
      <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center shadow-xl shadow-gray-400/30">
        <span className="text-white font-bold text-2xl">{stepId}</span>
      </div>
    )
  }

  return (
    <section
      id="our-process"
      className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-red-500/15 to-red-600/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-black/8 to-gray-900/8 rounded-full blur-3xl animate-pulse"></div>

        {/* New floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-red-400/12 to-red-300/12 rounded-full blur-2xl animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-red-600/12 to-red-500/12 rounded-full blur-2xl animate-float delay-1000"></div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 left-32 w-16 h-16 border-4 border-red-500 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 right-32 w-12 h-12 border-2 border-black rotate-12 animate-spin-reverse"></div>
          <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-red-500 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-black rounded-full animate-ping delay-700"></div>
          <div className="absolute top-2/3 left-1/5 w-10 h-10 border border-red-600 rounded-full animate-pulse delay-900"></div>
          <div className="absolute bottom-1/5 right-1/5 w-4 h-4 bg-red-400 transform rotate-45 animate-bounce delay-1200"></div>
        </div>

        {/* Animated lines and connections */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <path d="M100 100 Q300 50 500 100 T900 100" stroke="url(#processGradient1)" strokeWidth="3" fill="none">
              <animate
                attributeName="stroke-dasharray"
                values="0,2000;2000,0;0,2000"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M100 500 Q300 450 500 500 T900 500" stroke="url(#processGradient2)" strokeWidth="2" fill="none">
              <animate
                attributeName="stroke-dasharray"
                values="2000,0;0,2000;2000,0"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M100 900 Q300 850 500 900 T900 900" stroke="url(#processGradient3)" strokeWidth="2" fill="none">
              <animate
                attributeName="stroke-dasharray"
                values="0,2000;2000,0;0,2000"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>

            {/* Vertical connecting lines */}
            <path d="M200 0 L200 1000" stroke="url(#processGradient4)" strokeWidth="1" opacity="0.3">
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0;0,1000"
                dur="6s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M800 0 L800 1000" stroke="url(#processGradient5)" strokeWidth="1" opacity="0.3">
              <animate
                attributeName="stroke-dasharray"
                values="1000,0;0,1000;1000,0"
                dur="6s"
                repeatCount="indefinite"
              />
            </path>

            {/* Connection nodes */}
            <circle cx="200" cy="200" r="5" fill="#ef4444" opacity="0.6">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              <animate attributeName="r" values="3;8;3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="500" cy="300" r="4" fill="#dc2626" opacity="0.7">
              <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="400" r="6" fill="#b91c1c" opacity="0.5">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
              <animate attributeName="r" values="4;9;4" dur="3s" repeatCount="indefinite" />
            </circle>

            <defs>
              <linearGradient id="processGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
                <stop offset="50%" stopColor="rgba(239, 68, 68, 0.8)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
              </linearGradient>
              <linearGradient id="processGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0)" />
                <stop offset="50%" stopColor="rgba(220, 38, 38, 0.6)" />
                <stop offset="100%" stopColor="rgba(220, 38, 38, 0)" />
              </linearGradient>
              <linearGradient id="processGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(185, 28, 28, 0)" />
                <stop offset="50%" stopColor="rgba(185, 28, 28, 0.5)" />
                <stop offset="100%" stopColor="rgba(185, 28, 28, 0)" />
              </linearGradient>
              <linearGradient id="processGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
                <stop offset="50%" stopColor="rgba(239, 68, 68, 0.4)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
              </linearGradient>
              <linearGradient id="processGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0)" />
                <stop offset="50%" stopColor="rgba(220, 38, 38, 0.4)" />
                <stop offset="100%" stopColor="rgba(220, 38, 38, 0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-400 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-red-500/15 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-red-500/30 mb-8 shadow-xl shadow-red-500/20">
            <span className="text-red-600 font-bold text-lg uppercase tracking-wider">How We Work</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 drop-shadow-lg">
              Process
            </span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A streamlined 6-step process designed to handle your packages with precision and care
          </p>
        </div>

        {/* Enhanced Process Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Enhanced Visual Progress */}
          <div className="relative">
            {/* Central Progress Circle with enhanced styling */}
            <div className="relative w-96 h-96 mx-auto">
              {/* Background Circle with glow */}
              <div className="absolute inset-0 rounded-full border-8 border-gray-200 shadow-2xl"></div>
              <div className="absolute -inset-4 rounded-full border-2 border-red-100 opacity-50 animate-pulse"></div>

              {/* Enhanced Progress Circle */}
              <div
                className="absolute inset-0 rounded-full border-8 border-red-500 transition-all duration-1000 shadow-2xl shadow-red-500/50"
                style={{
                  clipPath: `polygon(50% 50%, 50% 0%, ${
                    50 + 50 * Math.cos((((currentStep / steps.length) * 360 - 90) * Math.PI) / 180)
                  }% ${50 + 50 * Math.sin((((currentStep / steps.length) * 360 - 90) * Math.PI) / 180)}%, 50% 50%)`,
                }}
              ></div>

              {/* Enhanced Center Content */}
              <div className="absolute inset-10 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-white">
                <div className="text-5xl font-black text-gray-900 mb-3 drop-shadow-lg">Step</div>
                <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 drop-shadow-lg">
                  {currentStep > steps.length ? steps.length : currentStep}
                </div>
                <div className="text-lg text-gray-500 mt-3 font-semibold">of {steps.length}</div>
              </div>

              {/* Enhanced Step Indicators Around Circle */}
              {steps.map((step, index) => {
                const angle = (index / steps.length) * 360 - 90
                const x = 50 + 45 * Math.cos((angle * Math.PI) / 180)
                const y = 50 + 45 * Math.sin((angle * Math.PI) / 180)

                return (
                  <div
                    key={step.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {getStepIcon(step.id)}
                  </div>
                )
              })}

              {/* Connection lines between steps */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-200 animate-spin-slow opacity-30"></div>
            </div>
          </div>

          {/* Right Side - Enhanced Step Details */}
          <div className="space-y-8">
            {steps.map((step) => {
              const status = getStepStatus(step.id)

              return (
                <div
                  key={step.id}
                  className={`relative p-8 rounded-3xl transition-all duration-500 transform overflow-hidden ${
                    status === "active"
                      ? "bg-gradient-to-r from-red-50 to-red-100 border-4 border-red-300 scale-110 shadow-2xl shadow-red-500/30"
                      : status === "completed"
                        ? "bg-gradient-to-r from-green-50 to-green-100 border-4 border-green-300 shadow-xl shadow-green-500/20"
                        : "bg-gradient-to-r from-white to-gray-50 border-4 border-gray-200 shadow-lg hover:shadow-xl hover:scale-105"
                  }`}
                >
                  {/* Enhanced background effect */}
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
                      status === "active"
                        ? "bg-gradient-to-r from-red-500/10 via-red-400/5 to-red-500/10 opacity-100"
                        : status === "completed"
                          ? "bg-gradient-to-r from-green-500/10 via-green-400/5 to-green-500/10 opacity-100"
                          : ""
                    }`}
                  ></div>

                  {/* Enhanced Step Number Badge */}
                  <div className="relative flex items-center gap-6 mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl shadow-xl transition-all duration-300 ${
                        status === "active"
                          ? "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-red-500/50 animate-pulse"
                          : status === "completed"
                            ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/50"
                            : "bg-gradient-to-br from-gray-300 to-gray-400 text-white shadow-gray-400/30"
                      }`}
                    >
                      {status === "completed" ? <Check className="w-8 h-8" /> : step.id}
                    </div>

                    <div
                      className={`text-lg font-bold uppercase tracking-wider ${
                        status === "active"
                          ? "text-red-600"
                          : status === "completed"
                            ? "text-green-600"
                            : "text-gray-500"
                      }`}
                    >
                      {status === "active" ? "In Progress" : status === "completed" ? "Completed" : "Pending"}
                    </div>
                  </div>

                  {/* Enhanced Step Content */}
                  <p
                    className={`text-xl leading-relaxed relative ${
                      status === "active"
                        ? "text-red-900 font-bold"
                        : status === "completed"
                          ? "text-green-900 font-semibold"
                          : "text-gray-700 font-medium"
                    }`}
                  >
                    {step.text}
                  </p>

                  {/* Enhanced Active Step Indicator */}
                  {status === "active" && (
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-20 bg-gradient-to-b from-red-500 to-red-600 rounded-r-full shadow-lg shadow-red-500/50 animate-pulse"></div>
                  )}

                  {/* Completion indicator */}
                  {status === "completed" && (
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-20 bg-gradient-to-b from-green-500 to-green-600 rounded-r-full shadow-lg shadow-green-500/50"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Enhanced Bottom Progress Bar */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-10 shadow-2xl border-4 border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-gray-700">Overall Progress</span>
              <span className="text-2xl font-black text-red-600 bg-red-50 px-4 py-2 rounded-xl">
                {Math.round((currentStep / steps.length) * 100)}%
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
              <div
                className="bg-gradient-to-r from-red-500 to-red-600 h-6 rounded-full transition-all duration-1000 relative overflow-hidden shadow-lg"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/50 via-transparent to-red-400/50 animate-pulse delay-500"></div>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-between mt-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`text-sm font-semibold transition-all duration-300 ${
                    index < currentStep ? "text-red-600" : "text-gray-400"
                  }`}
                >
                  Step {step.id}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
