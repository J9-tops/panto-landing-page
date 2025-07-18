import React, { useState } from "react";

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Bang Upin",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      review:
        "Terimakasih banyak, kini ruangan rumah saya menjadi lebih mewah dan terlihat mahal",
      rating: 5,
    },
    {
      id: 2,
      name: "Ibuk Sukijan",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      review:
        "Sangat terpukau dengan kualitas produk yang diberikan dan dengan harga yang cukup terjangkau",
      rating: 5,
    },
    {
      id: 3,
      name: "Mpok Ina",
      image:
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=400&h=300&fit=crop",
      review:
        "Sangat memuaskan, dan kualitas yang diberikan sangat memuaskan kami",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-2 text-xs font-bold tracking-wider text-orange-500 uppercase">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
            Our Client Reviews
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
          >
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
          >
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Desktop: Show all three cards */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-48 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Profile Circle */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 ring-4 ring-white">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pt-8 pb-6 text-center">
                    <h3 className="mb-2 text-lg font-bold text-gray-800">
                      {testimonial.name}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-gray-600 italic">
                      "{testimonial.review}"
                    </p>

                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="mx-auto max-w-sm">
                      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-48 w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                          {/* Profile Circle */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 ring-4 ring-white">
                              <svg
                                className="h-6 w-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="px-6 pt-8 pb-6 text-center">
                          <h3 className="mb-2 text-lg font-bold text-gray-800">
                            {testimonial.name}
                          </h3>

                          <p className="mb-4 text-sm leading-relaxed text-gray-600 italic">
                            "{testimonial.review}"
                          </p>

                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator - Mobile only */}
            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-orange-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
