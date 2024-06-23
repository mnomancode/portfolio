"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Noman.",
      className: "text-zinc-500 dark:text-secondary",
    },

  ];
  return (
    <div className="w-screen h-10 pt-40 px-6 ">
      <h1 className=" flex flex-row justify-start text-neutral-600 dark:text-neutral-200 text-base sm:text-base md:text-xl lg:text:3xl ">
         Let's collaborate and build something awesome together.
      </h1>
      
      <TypewriterEffectSmooth words={words} className=" flex flex-row justify-start " />

      
    </div>
  );
}
