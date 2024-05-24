import AboutMeSection from "./components/AboutMeSection";
import EducationSection from "./components/EducationSection";
import DashboardSection from "./components/DashboardSection";
import ProjectsSection from "./components/ProjectsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";

function Home() {
  return (
    <div>
      <DashboardSection />
      <AboutMeSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
}

export default Home;
