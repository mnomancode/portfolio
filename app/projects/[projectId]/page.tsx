// "use client";
// import { usePathname } from "next/navigation";
import Image from "next/image";

// import { getPostData } from "../../lib/mdx";
import { MDXRemote } from 'next-mdx-remote'
import {projects} from "../../../.velite/index"
import { MDXContent } from '../../components/mdx-components';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next'

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




  return <div className="">
          <p  className="justify-center items-center flex h-11   bg-purple-zinc hover:bg-primary">Post: {selectedProject.title} </p>
          <br />
         

          <br />
          <div className="wrapper">
            
          </div>
             {/* <p  className="justify-center items-center flex h-11   bg-purple-600 hover:bg-primary">Title: {project.title} </p> */}
          <br />
          
          <div className="wrapper">
            {selectedProject && <MDXContent code={selectedProject.body} />}
          </div>
        
          <br />
          
          

            

         
      </div>
}