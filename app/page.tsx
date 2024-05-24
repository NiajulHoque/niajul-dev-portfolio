import AboutMeSection from "./sections/AboutMeSection";
import EducationSection from "./sections/EducationSection";
import DashboardSection from "./sections/DashboardSection";
import ProjectsSection from "./sections/ProjectsSection";
import WorkExperienceSection from "./sections/WorkExperienceSection";

function Home() {
  return (
    <div className="max-w-[75%] mx-auto flex flex-col justify-center items-center">
      <DashboardSection />
      <AboutMeSection />
      <WorkExperienceSection />
      {/* <ProjectsSection /> */}
      <EducationSection />
    </div>
  );
}

export default Home;
