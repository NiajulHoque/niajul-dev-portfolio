import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

function Home() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default Home;
