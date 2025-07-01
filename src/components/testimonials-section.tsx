import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Pallet went in and out in one day with HexPrep's Chicago warehouse! Phenomenal rates and Khai was able to quickly report issues with how the supplier sent the goods. Will continue to work with these gentlemen for the foreseeable future.",
      name: "Morgan",
      title: "FBA & FBM | HexPrep Member",
      rating: 5,
    },
    {
      id: 2,
      text: "So far the staff at Hex-Prep have been beyond helpful and friendly! They're quick to respond to any of my questions or concerns about my orders and the turnaround time for my FBM shipments is crazy fast. Their owners are very knowledgeable and kind! If you go with hex prep you won't ever need another prep center again!",
      name: "Quinn",
      title: "FBA | HexPrep Member",
      rating: 5,
    },
    {
      id: 3,
      text: "Great communication and fast turnaround time. One of the best smaller prep centers I've worked with! I had no issues and will continue working with these guys again!",
      name: "Brody",
      title: "FBA & FBM | HexPrep Member",
      rating: 5,
    },
    {
      id: 4,
      text: "HexPrep has been a game changer for my Amazon business. Their clear communication keeps me informed every step of the way. I highly recommend HexPrep to any seller looking for reliable and efficient prep services!",
      name: "Hector",
      title: "FBM | HexPrep Member",
      rating: 5,
    },
    {
      id: 5,
      text: "Started using Hexprep about 2 months ago, the team has super quick communication and always makes a effort to make sure orders go out on time! Super helpful this Q4 pushing out all my orders. Prices are reasonable and the Oregon warehouse being tax free is a huge bonus!",
      name: "Henry",
      title: "FBA & FBM | HexPrep Member",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/5 rounded-full blur-3xl -translate-x-36 translate-y-36"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What our{" "}
            <span className="text-red-600 relative">
              customers
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </span>{" "}
            are saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            clients
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-red-500 text-red-500" />
              ))}
            </div>
            <div className="text-2xl font-bold text-black">5.0</div>
            <div className="text-gray-600">from 50+ reviews</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First row - 3 testimonials */}
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full -translate-y-12 translate-x-12 group-hover:bg-red-500/10 transition-colors duration-300"></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-red-500 text-red-500"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-black group-hover:text-red-600 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 2 testimonials centered */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full -translate-y-12 translate-x-12 group-hover:bg-red-500/10 transition-colors duration-300"></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-red-500 text-red-500"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-black group-hover:text-red-600 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                5.0★
              </div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                48hrs
              </div>
              <div className="text-gray-600 font-medium">
                Average Turnaround
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
