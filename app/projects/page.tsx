// "use client";
import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
// import { getSortedProjectData } from "../lib/mdx";

import Image from "next/image";
import { Eye } from "lucide-react";
import { Article } from "./article";
import {projects} from "../../.velite/index";
import { BentoGrid, BentoGridItem } from "../components/bento-grid";






export default async function ProjectsPage() {

  
  
  // const allProjects =getSortedProjectData();
  // const featured = allProjects.find((project) => project.id === "enjoytv")!;
  // const top2 = allProjects.find((project) => project.id === "digital-cash")!;
  // const top3 = allProjects.find((project) => project.id === "yoku")!;

  // const remainingProjects = allProjects.filter(
  //   (project) => project.id !== "enjoytv" && project.id !== "digital-cash" && project.id !== "yoku",
  // ) .sort(
  //   (a, b) =>
  //     new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
  //     new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
  
  // );


  const projectsList = projects.sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
      ).map((project) => (
        
    <Card key={project.id}>
      <Link
      key={project.id}
      href={project.permalink} >
        <Article project={project} views={0} />
          </Link>
          </Card>
    ));

    const bentoGrid = projects.map((project) => (
     
        <Link
        key={project.id}
        href={project.permalink} >
        <BentoGridItem
        key={project.id}
        title={project.title}
        description={project.description!.slice(0, 40)}

        header={
          

          <div className="relative   min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Image 
        src={project.mainImage ?? "/images/placeholder.png"}
        alt={project.title}
        layout="fill" // required
        objectFit="cover" // change as you like
        className="rounded-xl" // you can use other classes here too
        />
        </div>
        
        
      }
        icon={<Eye className="w-4 h-4  m-2"  color="white"/>}
      
        className={project.featured == true ? "md:col-span-2" : ""}
        />
        </Link>
        
    ));

   

 

  return (
    <div className="relative pb-16">
       <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <BentoGrid className="max-w-4xl mx-auto gap-10 ">
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
