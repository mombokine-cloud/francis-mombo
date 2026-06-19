import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import SportPro from "./components/SportPro";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SportPro />
        <Experience />
        <Testimonials />
        <Locations />
        <FAQ />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
