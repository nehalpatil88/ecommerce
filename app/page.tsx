import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products"
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Feature from "./components/Feature"
import HeroSection from "./components/HeroSection"
import FeaturedCollection from "./components/FeaturedCollection";
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