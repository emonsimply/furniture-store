import React from 'react';
import products from '../../public/bestSellingProducts.json';
import ProductCard from '../products/ProductCard';
import { Product } from "@/types/product";
import Title from '../ui/Title';

const BestSellingProducts = () => {
  return (
    <section className="max-w-7xl mx-auto my-12 px-4">
      <Title title="Best Selling Products" />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
        {(products as Product[]).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;