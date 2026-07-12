import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';


const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Clients /> */}
      {/* <WorkExperience /> */}
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
