import Image from "next/image";
import React from "react";
import { Product } from "../../types/product";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="bg-white border hover:shadow-md transition overflow-hidden group">
      
      {/* Image */}
      <div className="relative h-52 bg-gray-100">
        
          <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="
            w-full 
            h-full 
            object-cover 
            transition-transform 
            duration-300 
            ease-out
            group-hover:scale-105
          "
        />

        {product.isBestSeller && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">
            Best Seller
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-medium line-clamp-2 min-h-10">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold text-lg">
            ৳ {product.price.toLocaleString()}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ৳ {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        
      </div>
    </Link>
  );
};

export default ProductCard;
