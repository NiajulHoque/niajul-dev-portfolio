import React from "react";
import EducationCard from "./components/EducationCard";

type Education = {
  instituteName: string;
  fieldOfStudy: string;
  date: string;
  topics: string[];
};

function EducationSection() {
  const education: Education[] = [
    {
      instituteName:
        "HyperionDev Bootcamp - (Backed by the Department of Education - United Kingdom)",
      fieldOfStudy: "Front-End Web Development",
      date: "December 2021 - March 2022",
      topics: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NodeJS",
        "Debugging",
        "Error Handling",
        "Async Programming",
        "DOM Manipulation",
        "Event Handling",
        "Functional Programming",
        "Object Oriented Programming",
        "String Manipulation",
        "Responsive Web Design",
      ],
    },
  ];

  return (
    <section id="education" className="w-full mt-[5rem] text-center">
      <h1 className="mb-5 text-3xl font-bold">Education</h1>

      <hr className="my-4 border-space-gray" />

      <div className="flex flex-col justify-center items-center py-2">
        {education.map((education: Education, index: number) => (
          <EducationCard
            key={index}
            instituteName={education.instituteName}
            fieldOfStudy={education.fieldOfStudy}
            date={education.date}
            topics={education.topics}
          />
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
