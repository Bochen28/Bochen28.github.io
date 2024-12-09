import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
