import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}