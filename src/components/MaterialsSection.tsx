import React from "react";

const MaterialsSection: React.FC = () => {
  return (
    <section className="mb-10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="text-xs font-bold tracking-wider text-orange-500 uppercase">
              MATERIALS
            </div>

            <h2 className="text-4xl leading-tight font-bold text-gray-800 lg:text-5xl">
              Very Serious Materials For Making Furniture
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=200&fit=crop"
                alt="Modern chair design"
                className="h-40 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=250&fit=crop"
                alt="Minimalist sofa"
                className="h-52 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>

            <div className="pt-8">
              <img
                src="https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=400&fit=crop"
                alt="Wooden dining chairs"
                className="h-80 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
