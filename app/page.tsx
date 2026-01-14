import Hero from "@/components/Hero/Hero";
import BestSellingProducts from "@/components/Home/BestSellingProducts";
import FeaturedCategories from "@/components/Home/FeaturedCategories";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCategories />
      <BestSellingProducts />
    </main>
  );
}
