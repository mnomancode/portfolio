import Link from "next/link";
import React from "react";
import {allProjects} from  "../lib/utils";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { getSortedProjectData } from "../lib/mdx";




export const revalidate = 60;
export default async function ProjectsPage() {


  const appP =getSortedProjectData();

  const projectItems = appP.map((p) => (
    <Card>
      <Link href={`/projects/${p.id}`}>
        <h1>{p.title}</h1>
        <p>{p.description}</p>
      </Link>
    </Card>
  ));

 
  
  return ( 
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="flex flex-wrap justify-center gap-4">
       

        {projectItems}
      </div>
    </div>

    

    // appP.map((p) =>(

    //   <Card>
    //   <Link 
    //   href={`/projects/${p.id}`} >
      
    //       <h1 className="text-3xl font-bold">{`${p.title}`}</h1>
    //       <p className="text-lg">
    //         {/* {p.description} */}
    //       </p>
    //     </Link>
    //   </Card>
      
    // ))


    
  );
}