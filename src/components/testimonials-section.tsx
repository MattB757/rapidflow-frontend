import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Pallet went in and out in one day with HexPrep's Chicago warehouse! Phenomenal rates and Khai was able to quickly report issues with how the supplier sent the goods. Will continue to work with these gentlemen for the foreseeable future.",
      name: "Morgan",
      title: "FBA & FBM | HexPrep Member",
    },
    {
      id: 2,
      text: "So far the staff at Hex-Prep have been beyond helpful and friendly! They're quick to respond to any of my questions or concerns about my orders and the turnaround time for my FBM shipments is crazy fast. Their owners are very knowledgeable and kind! If you go with hex prep you won't ever need another prep center again!",
      name: "Quinn",
      title: "FBA | HexPrep Member",
    },
    {
      id: 3,
      text: "Great communication and fast turnaround time. One of the best smaller prep centers I've worked with! I had no issues and will continue working with these guys again!",
      name: "Brody",
      title: "FBA & FBM | HexPrep Member",
    },
    {
      id: 4,
      text: "HexPrep has been a game changer for my Amazon business. Their clear communication keeps me informed every step of the way. I highly recommend HexPrep to any seller looking for reliable and efficient prep services!",
      name: "Hector",
      title: "FBM | HexPrep Member",
    },
    {
      id: 5,
      text: "Started using Hexprep about 2 months ago, the team has super quick communication and always makes a effort to make sure orders go out on time! Super helpful this Q4 pushing out all my orders. Prices are reasonable and the Oregon warehouse being tax free is a huge bonus!",
      name: "Henry",
      title: "FBA & FBM | HexPrep Member",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-medium text-purple-600 text-center mb-12">
          What our customers are saying
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First row - 3 testimonials */}
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg p-6 relative"
            >
              <Quote className="w-8 h-8 text-purple-600 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-600 rounded-sm flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-purple-600">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 2 testimonials centered */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg p-6 relative"
            >
              <Quote className="w-8 h-8 text-purple-600 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-600 rounded-sm flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-purple-600">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
