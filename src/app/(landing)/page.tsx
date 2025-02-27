import { Hero } from "@/app/_components/landing/Hero";
import Quotes from "../_components/landing/Quotes";
import Services from "../_components/landing/Services";
import About from "../_components/landing/About";
import Gallery from "../_components/landing/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Quotes />
      <Services />
      <About />
      <Gallery />
    </div>
  );
}
