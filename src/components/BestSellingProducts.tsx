import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

const categories = ["Chair", "Beds", "Sofa", "Lamp"];

const products = [
  {
    id: 1,
    name: "Sakarias Armchair",
    category: "Chair",
    price: 392,
    rating: 5,
    image: "/images/sakarias.png",
  },
  {
    id: 2,
    name: "Baltsar Chair",
    category: "Chair",
    price: 299,
    rating: 5,
    image: "/images/baltsar.png",
  },
  {
    id: 3,
    name: "Anjay Chair",
    category: "Chair",
    price: 519,
    rating: 5,
    image: "/images/anjay.png",
  },
  {
    id: 4,
    name: "Nyantuy Chair",
    category: "Chair",
    price: 921,
    rating: 5,
    image: "/images/nya.png",
  },
];

const BestSellingProducts = () => {
  const [activeCategory, setActiveCategory] = useState("Chair");

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Best Selling Product
          </h2>

          <div className="mb-12 flex justify-center space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer text-lg font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "border-b-2 border-orange-400 pb-1 text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-fit">
          <button className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-x-4 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-md transition-shadow hover:shadow-lg">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <button className="absolute top-1/2 right-0 z-10 flex h-10 w-10 translate-x-4 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-md transition-shadow hover:shadow-lg">
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-lg bg-transparent transition-shadow duration-200 hover:shadow-md"
              >
                <div className="bg-[#FAFAFA] md:h-64">
                  <img
                    src={product.image}
                    alt={`${product.name} chair`}
                    className="h-full w-full scale-70"
                  />
                </div>

                <div className="bg-white p-4">
                  <p className="mb-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <div className="mb-3 flex items-center">
                    {renderStars(product.rating)}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-white transition-colors hover:bg-blue-800">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center font-medium text-orange-500 transition-colors hover:text-orange-600">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
