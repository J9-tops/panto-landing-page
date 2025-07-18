import { ArrowRight } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Luxury facilities",
    description:
      "The advantage of renting a workspace with us is that gives you comfortable service and all-around facilities.",
  },
  {
    id: 2,
    title: "Affordable Price",
    description:
      "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
  },
  {
    id: 3,
    title: "Many Choices",
    description:
      "We provide many unique work space choices so that you can choose the workspace to your liking.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="font-ibm-plex mt-80 bg-transparent px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4">
          {/* Title Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl leading-tight font-bold text-gray-900">
              Why <br className="hidden lg:block" />
              Choose us
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:col-span-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="rounded-lg border border-solid border-white bg-white p-6 shadow-sm hover:border-gray-400 hover:shadow-none"
              >
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
                <button className="flex cursor-pointer items-center text-sm font-medium text-orange-500 transition-colors hover:text-orange-600">
                  More Info
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
