import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Team />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
