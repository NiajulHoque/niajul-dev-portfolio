import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  title: string;
  date: string;
  companyLink?: string;
  responsibilities: string[];
};

function WorkExperienceCard({
  title,
  date,
  companyLink,
  responsibilities,
}: Props) {
  return (
    <div className="flex flex-col my-3 p-3 text-left border border-solid border-yellow-500 rounded-md">
      <h3 className="font-semibold">{title}</h3>
      <p className="my-1 text-sm italic">{date}</p>
      <p className="text-sm mb-3">{companyLink}</p>

      <p className="my-1 font-semibold">Responsibilities:</p>
      <div>
        {responsibilities.map((responsibility: string, index: number) => (
          <ul
            key={index}
            className="flex flex-row justify-start items-center my-1"
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              height={20}
              width={20}
              className="mr-2 text-yellow-500"
            />
            <li className="my-1">{responsibility}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default WorkExperienceCard;
