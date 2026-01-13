import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <nav className="max-w-7xl mx-auto">
          <Navbar />
        </nav>

        <h2>Furniture Store</h2>
        <Footer />
      </div>
    </main>
  );
}
