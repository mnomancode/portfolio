// "use client";
import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
// import { getSortedProjectData } from "../lib/mdx";

import Image from "next/image";
import { CalendarCheck2, Eye } from "lucide-react";
import { Article } from "./article";
import {projects} from "../../.velite/index";
import { BentoGrid, BentoGridItem } from "../components/bento-grid";






export default async function ProjectsPage() {

  
  


    const bentoGrid = projects.sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
        ).
    map((project) => (
     
       
        <BentoGridItem
        key={project.id}
        title={project.title}
        description={project.description!}
        link={project.permalink}

        header={
          <div className="relative  min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
          <Image 
                src={project.mainImage ?? "/images/placeholder.png"}
                alt={project.title}
                layout="fill"
                objectFit="cover" 
                className="rounded-xl  " 
               />
        </div>
        
        
      }
      bottom={
          <div className="flex justify-between">
            <time className="flex text-xs text-zinc-500 mt-4"
                dateTime={new Date(project.date).toISOString()}>
                   <CalendarCheck2 className="w-4 h-4  mr-2"  />
                   {Intl.DateTimeFormat(undefined, {dateStyle: "medium",})
                        .format(new Date(project.date))}
            </time>

            <span className="flex items-center gap-1 text-xs text-zinc-500 mt-4">
                <Eye className="w-4 h-4" />
                {Intl.NumberFormat("en-US", { notation: "compact" }).format(1200)}
            </span>
       

        
          </div>
         }
      
        className={project.featured == true ? "md:col-span-2" : " "}
        />
       
        
    ));

   

 

  return (
    <div className="relative pb-16">
       <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <span className="flex mt-4 items-center text-zinc-200 hover:text-zinc-300 w-auto">
            <p 
            className="text-md md:text-xl  font-bold mr-2"
            >Where Ideas Come to Life: </p>
          <p className=" text-md md:text-xl font-medium">
               My Project Highlights.
          </p>
          </span>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        

        <BentoGrid className="max-w-4xl mx-auto ">
      {bentoGrid}
   </BentoGrid>




       
 {/* <Card> */}
          
      
      {/* </Card> */}

        {/* {projectsList} */}
            </div>



       </div>



  );



}



// <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
// <Card>
//   <Link href={`/projects/${featured.id}`}>
//     <article className="relative w-full h-full p-4 md:p-8">
//       <div className="flex items-center justify-between gap-2">
//         <div className="text-xs text-zinc-100">
//           {featured.date ? (
//             <time dateTime={new Date(featured.date).toISOString()}>
//               {Intl.DateTimeFormat(undefined, {
//                 dateStyle: "medium",
//               }).format(new Date(featured.date))}
//             </time>
//           ) : (
//             <span>SOON</span>
//           )}
//         </div>
//         <span className="flex items-center gap-1 text-xs text-zinc-500">
//           <Eye className="w-4 h-4" />{" "}
//           {Intl.NumberFormat("en-US", { notation: "compact" }).format(
//              0,
//           )}
//         </span>
