"use client";
import { AnimatedPin } from "./animated-pin";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { Github, View } from "lucide-react";
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
    <div className="relative items-center justify-center w-screen h-10 p-40  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
         Let's collaborate and build something awesome together.
      </p>
      <TypewriterEffectSmooth words={words}  />
      
    </div>
  );
}
