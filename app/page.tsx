import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import  HeroSection from "./components/HeroSection";
import FeaturedCollection from "./components/Feature";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <>
  
      <Hero/>
      <Products />
        <Feature/>
        <HeroSection/>
      <FeaturedCollection />
      <Testimonials />

    </>
  );
}