import AboutMeSection from "./components/AboutMeSection";
import EducationSection from "./components/EducationSection";
import DashboardSection from "./components/DashboardSection";
import ProjectsSection from "./components/ProjectsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";

function Home() {
  return (
    <div className="max-w-[75%] mx-auto flex flex-col justify-center items-center">
      <DashboardSection />
      <AboutMeSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
}

export default Home;
