import { Star, Quote } from "lucide-react";

export default function ReviewSection() {
  const reviews = [
    {
      id: 1,
      name: "Eleanor Richards",
      location: "London, UK",
      rating: 5,
      date: "October 2025",
      text: "An absolute slice of paradise. The attention to detail in the room design and the impeccable service made our anniversary trip unforgettable. The infinity pool at sunset is mesmerizing.",
      initials: "ER"
    },
    {
      id: 2,
      name: "Marcus Chen",
      location: "Singapore",
      rating: 5,
      date: "September 2025",
      text: "From the fine dining experience to the tranquil spa treatments, everything was flawless. The staff anticipates your needs before you even realize them. We will definitely be returning.",
      initials: "MC"
    },
    {
      id: 3,
      name: "Sophia Martinez",
      location: "Madrid, Spain",
      rating: 5,
      date: "August 2025",
      text: "The perfect balance of luxury and nature. Waking up to the sound of the forest and enjoying world-class amenities was exactly the reset we needed. Highly recommend the canopy walk!",
      initials: "SM"
    }
  ];

  return (
    <section className="w-full  bg-[#FCFAF5] py-20 md:py-28 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-[#BE9447] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
            Guest Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0f2c23] leading-tight">
            Words From Our Guests
          </h2>
          <div className="w-16 h-0.5 bg-[#BE9447] opacity-60 mt-6"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="relative bg-[#FCFAF5] p-8 md:p-10 rounded-2xl border border-[#E8E2D2] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
            >
              {/* Decorative Background Quote */}
              <div className="absolute top-6 right-8 text-[#E8E2D2] opacity-50 group-hover:text-[#BE9447] group-hover:opacity-10 transition-colors duration-300">
                <Quote size={80} strokeWidth={0.5} className="fill-current" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className="fill-[#BE9447] text-[#BE9447]" 
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="grow text-gray-600 leading-relaxed text-base mb-8 relative z-10 italic">
                "{review.text}"
              </blockquote>

              {/* Guest Info */}
              <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-gray-200">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-[#0f2c23] flex items-center justify-center text-[#BE9447] font-serif font-medium text-lg">
                  {review.initials}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[#0f2c23] font-serif font-medium">
                    {review.name}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{review.location}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{review.date}</span>
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