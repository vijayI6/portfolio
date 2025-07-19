import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </>
  );
}

export default App;