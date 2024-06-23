// "use client";
// import { usePathname } from "next/navigation";
import Image from "next/image";

// import { getPostData } from "../../lib/mdx";
import { MDXRemote } from 'next-mdx-remote'
import {projects} from "../../../.velite/index"
import { MDXContent } from '../../components/mdx-components';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next'
import { TracingBeam } from "@/app/components/tracing-beam";
import { Spotlight } from "@/app/components/Spotlight";
import { Navigation } from "@/app/components/nav";


type Props = {
  params: {
    projectId: string;
    
  };
};
function getPostById(slug: string) {
  return projects.find(project => project.id === slug)
}


export function generateMetadata({ params }: Props): Metadata {
  const ProjectId = params?.projectId;
  const project = getPostById(ProjectId)
  if (project == null) return {}
  return { title: project.title, description: project.description }
}

export function generateStaticParams(): Props[] {
  return projects.map(project => ({ params: { projectId: project.id } }))
}



export default async function ProjectDetails({ params }: Props) {
  const ProjectId = params?.projectId;





const selectedProject = getPostById(ProjectId);

if (selectedProject == null) notFound();




  return <div className=" pt-0 pb-80 px-10">
     <Navigation />

         
         {/* <Image  
                src="/projects/enjoy-tv/et1.png"
                alt={"Enjoy TV"}
                width={120}
                height={100}
                
                className="aspect-[9/16] hover:aspect-square rounded-xl" 

               /> */}

         {/* <Spotlight/> */}
         <TracingBeam className="px-10 pt-20 hidden sm:block">
          <div className=" prose">
            {selectedProject && <MDXContent code={selectedProject.body} />}
          </div>
        
          </TracingBeam>
          <div className=" prose block sm:hidden pt-20 ">
            {selectedProject && <MDXContent code={selectedProject.body} />}
          </div>
          

          <div className="pb-80 " />
          {/* <div className="py-11" /> */}
          {/* <div className="py-11" /> */}

        
          
          

            

         
     </div>
}