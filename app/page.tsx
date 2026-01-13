import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import Hero from "@/components/Hero/Hero";
import FeaturedCategories from "@/components/Home/FeaturedCategories";

export default function Home() {
  return (
    <main className="">
      <div>
        <nav className="max-w-7xl mx-auto">
          <Navbar />
        </nav>
        <div className="min-h-screen">
          <Hero />
          <FeaturedCategories />
        </div>

        <Footer />
      </div>
    </main>
  );
}
