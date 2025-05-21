import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Internship from './pages/Internship';
import Training from './pages/Training';
import Certifications from './pages/Certifications';
import Workshops from './pages/Workshops';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import AreaOfInterest from './pages/AreaOfInterest';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Internship />
      <Training />
      <Certifications />
      <Workshops />
      <Projects />
      <Achievements />
      <AreaOfInterest />
      <Contact />
      <Footer/>
    </div>
  );
}