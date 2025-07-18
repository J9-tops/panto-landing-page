import BestSellingProducts from "./components/BestSellingProducts";
import ExperiencesSection from "./components/ExperiencesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MaterialsSection from "./components/MaterialsSection";
import Navbar from "./components/Navbar";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <BestSellingProducts />
      <ExperiencesSection />
      <MaterialsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default App;
