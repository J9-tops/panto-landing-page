import React from "react";

const ExperiencesSection: React.FC = () => {
  return (
    <section className="mb-10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
              alt="Modern living room with dark wall and teal sofa"
              className="h-96 w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 space-y-6 lg:order-2">
            <div className="text-xs font-bold tracking-wider text-orange-500 uppercase">
              EXPERIENCES
            </div>

            <h2 className="text-4xl leading-tight font-bold text-gray-800 lg:text-5xl">
              We Provide You The Best Experience
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              You don't have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and luxurious style and with premium quality
              materials.
            </p>

            <button className="inline-flex items-center font-semibold text-orange-500 transition-colors hover:text-orange-600">
              More Info
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
