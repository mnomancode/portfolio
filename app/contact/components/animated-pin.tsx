"use client";
import React from "react";
import { PinContainer } from "./3d-pin";

interface AnimatedPinProps {
  href: string;
  title: string;
  description: string;

}


export function AnimatedPin(
  { href, title, description }: AnimatedPinProps


) {
  return (
    <div className="h-[15rem] sm:h-[20rem] ">
      <PinContainer
        title={title}
        href={href}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[10rem] h-[10rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> 
        </div> 
      </PinContainer>
    </div>
  );
}
