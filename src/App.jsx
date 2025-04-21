import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const HeroSection = lazy(() => import("./components/HeroSection"));
const Dishes = lazy(() => import("./components/Dishes"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Mission = lazy(() => import("./components/Mission"));
const Expertise = lazy(() => import("./components/Expertise"));
const Review = lazy(() => import("./components/Review"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <Dishes />
        <AboutUs />
        <Mission />
        <Expertise />
        <Review />
        <Contact />
      </Suspense>

      <Footer />
    </main>
  );
}

export default App;
