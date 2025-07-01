import { Truck, DollarSign, Package } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What sets us{" "}
            <span className="text-red-600 relative">
              apart
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the advantages that make us the preferred choice for Amazon
            FBA prep services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Quick shipping */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-red-500/10 transition-colors duration-300"></div>

            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-red-500/25 group-hover:scale-110 transition-all duration-300">
                <Package className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors duration-300">
                  Quick shipping and turnaround time
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Upon receiving your inventory it goes out within 48 hours
                </p>
              </div>
            </div>
          </div>

          {/* Tax FREE state */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-red-500/10 transition-colors duration-300"></div>

            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-red-500/25 group-hover:scale-110 transition-all duration-300">
                <div className="text-white font-bold text-lg">OR</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors duration-300">
                  Tax FREE state
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We are located in Oregon which is a tax free state
                </p>
              </div>
            </div>
          </div>

          {/* Loading docks */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-red-500/10 transition-colors duration-300"></div>

            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-red-500/25 group-hover:scale-110 transition-all duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors duration-300">
                  Loading docks
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For LTL and FTL shipments we have loading docks available
                </p>
              </div>
            </div>
          </div>

          {/* Competitively priced */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-red-500/10 transition-colors duration-300"></div>

            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-red-500/25 group-hover:scale-110 transition-all duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors duration-300">
                  Competitively priced
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We are by far the most competitively priced prep center in the
                  space
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-red-500/20 rounded-full blur-2xl -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl translate-x-16 translate-y-16"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to experience the{" "}
                <span className="text-red-500">Matthew difference</span>?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied sellers who trust us with their
                Amazon FBA prep needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                  <span className="text-red-400 font-semibold">
                    ✓ 48-hour turnaround
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                  <span className="text-red-400 font-semibold">
                    ✓ Tax-free location
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                  <span className="text-red-400 font-semibold">
                    ✓ Best pricing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
