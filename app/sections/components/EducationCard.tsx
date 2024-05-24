import React from "react";

import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  instituteName: string;
  fieldOfStudy: string;
  date: string;
  topics: string[];
};

function EducationCard({ instituteName, fieldOfStudy, date, topics }: Props) {
  return (
    <div className="flex flex-col w-full my-3 p-3 text-left border border-solid border-yellow-500 rounded-md">
      <h3 className="font-semibold">{instituteName}</h3>
      <p className="my-1 text-sm">{fieldOfStudy}</p>
      <p className="text-sm mb-3 italic">{date}</p>

      <p className="my-1 font-semibold">Topics:</p>
      <div>
        {topics.map((topic: string, index: number) => (
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
            <li className="my-1">{topic}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default EducationCard;
