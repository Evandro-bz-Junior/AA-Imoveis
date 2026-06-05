export const dynamic = "force-dynamic";


import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Properties from "@/components/home/Properties";

export default function Home() {
  return (
    <main>
      <Hero />
      <Properties />
      <About />
      <Contact />
    </main>
  );
}
