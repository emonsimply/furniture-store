import Hero from "@/components/Hero/Hero";
import BestSellingProducts from "@/components/Home/BestSellingProducts";
import FeaturedCategories from "@/components/Home/FeaturedCategories";
import NewArrivals from "@/components/Home/NewArrivals";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCategories />
      <BestSellingProducts />

      <NewArrivals />
      <Testimonials />
    </main>
  );
}
