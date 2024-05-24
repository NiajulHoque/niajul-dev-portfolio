"use client";

import React from "react";
import { useTypewriter } from "react-simple-typewriter";

function DashboardSection() {
  const [text] = useTypewriter({
    words: ["NIAJUL HOQUE", "WEB DEVELOPER"],
    loop: 0,
  });

  return (
    <header className="h-full max-w-[75%] w-[60%] py-56 m-auto flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl h-14 text-yellow-500">{text}</h1>
      <p className="my-5 font-semibold">
        I BUILD WEBSITES WHICH ENHANCE YOUR BRAND&apos;S ONLINE PRESENCE FURTHER
      </p>
      <p className="">
        I&apos;m a Web Developer who enjoys creating websites and landing pages
        for businesses using industry standard technologies to optimise your
        website, improve SEO and improve security and reliability.
      </p>
    </header>
  );
}

export default DashboardSection;
