import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import styles from "./page.module.css";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
