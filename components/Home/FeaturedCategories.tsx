import { div } from "motion/react-client";
import React from "react";
import Title from "../ui/Title";

const categories = [
  {
    title: "Living Room",
    image:
      "https://cdn.sanity.io/images/k55su7ch/production2/d9e35a73891d43ccb0bc665bf2e0d5d9d6f1ea2b-4200x2363.jpg?w=1920&q=75&auto=format",
  },
  {
    title: "Living Room",
    image:
      "https://cdn.sanity.io/images/k55su7ch/production2/d9e35a73891d43ccb0bc665bf2e0d5d9d6f1ea2b-4200x2363.jpg?w=1920&q=75&auto=format",
  },
  {
    title: "Living Room",
    image:
      "https://cdn.sanity.io/images/k55su7ch/production2/d9e35a73891d43ccb0bc665bf2e0d5d9d6f1ea2b-4200x2363.jpg?w=1920&q=75&auto=format",
  },
  {
    title: "Living Room",
    image:
      "https://cdn.sanity.io/images/k55su7ch/production2/d9e35a73891d43ccb0bc665bf2e0d5d9d6f1ea2b-4200x2363.jpg?w=1920&q=75&auto=format",
  },
  {
    title: "Living Room",
    image:
      "https://cdn.sanity.io/images/k55su7ch/production2/d9e35a73891d43ccb0bc665bf2e0d5d9d6f1ea2b-4200x2363.jpg?w=1920&q=75&auto=format",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="max-w-7xl mx-auto my-12 px-4">
      <Title title="Explore Our Popular Furniture Categories" center={false} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Large Card */}
        <div className="relative lg:col-span-2 h-105 overflow-hidden group">
          <img className="object-cover group-hover:scale-105 transition duration-500" src={categories[0].image} alt={categories[0].title} />

          <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">
            {categories[0].title}
          </span>
        </div>

    

        

        {/* Right Small Cards */}
        <div className="grid grid-cols-2 gap-4">

             {categories.slice(1).map((item, index) => (
            <div
              key={index}
              className="relative h-50 overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
