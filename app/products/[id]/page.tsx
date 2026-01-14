import { Button } from "@/components/ui/button";

interface PageProps {
  params: {
    id: string;
  };
}

const ProductDetailsPage = ({ params }: PageProps) => {
  const { id } = params;

  // Temporary fake data (later API / DB)
  const product = {
    id: "bs-002",
    name: "Luxury CEO Boss Table",
    category: "Office Furniture",
    type: "Boss Table",
    price: 62000,
    oldPrice: 68000,
    currency: "BDT",
    rating: 4.9,
    reviews: 98,
    stock: 8,
    isBestSeller: true,
    image:
      "https://bongofurniture.com/cdn/shop/collections/CEO-DESK_c48434fc-0ff6-4c3d-ab89-3a01af0192ee.jpg?v=1750056664",
    gallery: [
      "https://bongofurniture.com/cdn/shop/collections/CEO-DESK_c48434fc-0ff6-4c3d-ab89-3a01af0192ee.jpg?v=1750056664",
      "https://bongofurniture.com/cdn/shop/collections/CEO-DESK_c48434fc-0ff6-4c3d-ab89-3a01af0192ee.jpg?v=1750056664",
    ],
    features: [
      "Solid wood finish",
      "Soft-close drawers",
      "Premium executive design",
    ],
    dimensions: {
      width: "200cm",
      depth: "90cm",
      height: "75cm",
    },
  };

  return (
     <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image Section */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover"
          />

          {/* Gallery */}
          <div className="flex gap-3 mt-4">
            {product.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name}-${index}`}
                className="w-20 h-20 object-cover border cursor-pointer hover:border-black"
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-sm text-gray-500 mt-1">
            {product.category} • {product.type}
          </p>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-semibold">
              ৳ {product.price.toLocaleString()}
            </span>

            {product.oldPrice && (
              <span className="line-through text-gray-400">
                ৳ {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Rating */}
          <p className="mt-2 text-sm text-gray-600">
            ⭐ {product.rating} ({product.reviews} reviews)
          </p>

          {/* Stock */}
          <p className="mt-2 text-sm">
            {product.stock > 0 ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>

          {/* Description */}
          <p className="mt-5 text-gray-600">
            {product.description}
          </p>

          {/* Features */}
          <ul className="mt-5 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-700">
                ✔ {feature}
              </li>
            ))}
          </ul>

          {/* Dimensions */}
          <div className="mt-6 text-sm text-gray-700">
            <p><strong>Width:</strong> {product.dimensions.width}</p>
            <p><strong>Depth:</strong> {product.dimensions.depth}</p>
            <p><strong>Height:</strong> {product.dimensions.height}</p>
          </div>

          {/* CTA */}
          
          <Button className="rounded-none w-full">buy Now</Button>
          <Button variant="outline" className="rounded-none w-full mt-2">Add to Cart</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
