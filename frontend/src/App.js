import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MenuSection } from "./components/MenuSection";
import { ServicesSection } from "./components/ServicesSection";
import { GallerySection } from "./components/GallerySection";
import { ReviewsSection } from "./components/ReviewsSection";
import { EnquiryForm } from "./components/EnquiryForm";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import AdminPage from "./pages/AdminPage";

const Home = () => (
  <div className="bg-[#140F0E] min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <MenuSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <EnquiryForm />
      <LocationSection />
    </main>
    <Footer />
    <Toaster position="top-center" richColors />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
