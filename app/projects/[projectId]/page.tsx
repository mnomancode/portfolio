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




  return <div className=" justify items-center justify-center px-10">
         

          
          <div className=" prose">
            {selectedProject && <MDXContent code={selectedProject.body} />}
          </div>
        
          <br />
          
          

            

         
      </div>
}