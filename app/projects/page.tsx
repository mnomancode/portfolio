import Link from "next/link";
import React from "react";
import {allProjects} from  "../lib/utils";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { getSortedProjectData } from "../lib/mdx";




export const revalidate = 60;
export default async function ProjectsPage() {


  const appP =getSortedProjectData();

 
  
  return (
    

    appP.map((p) =>(

      <Card>
      <Link 
      href={`/projects/${p.id}`} >
      
          <h1 className="text-3xl font-bold">{`${p.title}`}</h1>
          <p className="text-lg">
            {/* {p.description} */}
          </p>
        </Link>
      </Card>
      
    ))


    // <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
    //   <Navigation />
    //   <div className="flex flex-wrap justify-center gap-4">
       

    //   <Card>
    //   <Link href={`/projects/hello`}>
    //       <h1 className="text-3xl font-bold">Projects</h1>
    //       <p className="text-lg">
    //         Here are some of the projects I've worked on.
    //       </p>
    //     </Link>
    //     </Card>
    //     <Card>
    //     {/* <Link href={`/projects/${hello}`}> */}
    //     <Link href={`/projects/hello`}>
    //       <h1 className="text-3xl font-bold">Projects</h1>
    //       <p className="text-lg">
    //         Here are some of the projects I've worked on.
    //       </p>
    //       </Link>
    //     </Card><Card>
    //       <h1 className="text-3xl font-bold">Projects</h1>
    //       <p className="text-lg">
    //         Here are some of the projects I've worked on.
    //       </p>
    //     </Card><Card>
    //       <h1 className="text-3xl font-bold">Projects</h1>
    //       <p className="text-lg">
    //         Here are some of the projects I've worked on.
    //       </p>
    //     </Card>
    //     {/* {allPs.map((project) => (
    //       <Card key={project.id} project={project} />
    //     ))} */}
    //   </div>
    // </div>
  );
}