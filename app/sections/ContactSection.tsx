import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactSection() {
  return (
    <footer
      id="contact"
      className="max-w-[75%] w-[30%] mx-auto mt-[5rem] mb-[5rem] text-center"
    >
      <h1 className="mb-5 text-3xl font-bold">Contact</h1>

      <hr className="my-4 border-space-gray" />

      <h3 className="text-2xl font-semibold">Find Me On</h3>

      <div className="pt-[2rem] flex flex-row justify-center items-center">
        <a href="mailto:nh98.programmer@gmail.com" target="_blank">
          <FontAwesomeIcon
            icon={faEnvelope}
            height={35}
            width={35}
            className="text-yellow-500"
          />
        </a>
        <a href="https://github.com/NiajulHoque" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            height={35}
            width={35}
            className="mx-10 text-yellow-500"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/niajul-hoque-a20b48276/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            height={35}
            width={35}
            className="text-yellow-500"
          />
        </a>
      </div>
    </footer>
  );
}

export default ContactSection;
