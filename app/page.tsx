import AboutMeSection from "./components/AboutMeSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import DashboardSection from "./components/DashboardSection";
import ProjectsSection from "./components/ProjectsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import NavbarSection from "./components/core/NavbarSection";

function Home() {
  return (
    <div>
      <NavbarSection />
      <DashboardSection />
      <AboutMeSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}

export default Home;
