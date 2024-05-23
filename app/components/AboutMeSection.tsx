import React from "react";

function AboutMeSection() {
  const technologies: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Git",
    "GitHub",
    "Linux",
    "NodeJS",
    "Docker",
  ];

  return (
    <section
      id="about-me"
      className="section max-w-[75%] mx-auto mt-[5rem] py-5 text-center"
    >
      <h1 className="text-3xl mb-5">About Me</h1>

      <hr className="my-4 border-space-gray" />

      <p className="my-5">
        Hi, I'm Niajul. I appreciate you taking the time to check out my
        portfolio. I am a junior front-end web developer who enjoys building
        landing sites and creating visually appealing components for front-end
        development. I am currently learning back-end development and unit
        testing.
      </p>

      <p className="w-[90%] m-auto">
        My ultimate goal is to be a proficient full-stack software developer who
        can write clean code which can be tested and quality approved with
        automated scripts.
      </p>

      <p className="w-[90%] m-auto text-left my-5">
        Here is a list of technologies I have experience with or currently use:
      </p>

      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {technologies.map((technology: string, index: number) => (
          <p
            key={index}
            className="m-auto py-1 w-[10rem] text-yellow-500 rounded-md border border-solid border-yellow-500"
          >
            {technology}
          </p>
        ))}
      </div>
    </section>
  );
}

export default AboutMeSection;
