import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <Navigation />
      <main className="w-full">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
