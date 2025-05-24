import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Dishes from "./components/Dishes";
import AboutUs from "./components/AboutUs";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Review from "./components/Review";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <HeroSection />
      <Dishes />
      <AboutUs />
      <Mission />
      <Expertise />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
