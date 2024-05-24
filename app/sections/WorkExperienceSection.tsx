import React from "react";
import WorkExperienceCard from "./components/WorkExperienceCard";

type WorkExperience = {
  title: string;
  date: string;
  companyLink?: string;
  responsibilities: string[];
};

function WorkExperienceSection() {
  const workExperiences: WorkExperience[] = [
    {
      title: "Junior Front-End Web Developer @ Wilayah Matrimonials",
      date: "2023 - Present",
      companyLink: "https://www.wilayah-matrimonials.com",
      responsibilities: [
        "Working under a project manager and senior developer to ensure quality code is written and best coding practices are being followed",
        "Collaborating with fellow developers to build the most competitive matrimonial platform online",
        "Responsible for creating components for a React based applicaton using custom CSS libraries",
        "Working with deadlines and timelines to ensure that tickets are completed on time",
        "Following project documentation and setup guidelines",
        "Troubleshooting and fixing bugs in the codebase",
        "Offering new ideas and solutions for new and upcoming features",
        "Regular communication with the team via standups to ensure every member of the team is up to date with my task and any potential blockers or issues",
      ],
    },
  ];

  return (
    <section id="work-experience" className="w-full mt-[5rem] text-center">
      <h1 className="mb-5 text-3xl font-bold">Work Experience</h1>

      <hr className="my-4 border-space-gray" />

      <div className="flex flex-col justify-center items-center py-2">
        {workExperiences.map(
          (workExperience: WorkExperience, index: number) => (
            <WorkExperienceCard
              key={index}
              title={workExperience.title}
              date={workExperience.date}
              companyLink={workExperience.companyLink}
              responsibilities={workExperience.responsibilities}
            />
          )
        )}
      </div>
    </section>
  );
}

export default WorkExperienceSection;
