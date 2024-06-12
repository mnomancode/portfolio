// "use client";
// import { usePathname } from "next/navigation";
import Image from "next/image";

import { getPostData } from "../../lib/mdx";

type Props = {
  params: {
    projectId: string;
    
  };
};


export default async function ProjectDetails({ params }: Props) {
  const ProjectId = params?.projectId;




var project = await getPostData(ProjectId);






  return <div className="">



          <p  className="justify-center items-center flex h-11   bg-purple-zinc hover:bg-primary">Post: {project.id} </p>
          <br />
          <Image
          src={project.mainImage}
          alt={project.title}
          width={900}
          height={500}
            
          />

          <br />
             <p  className="justify-center items-center flex h-11   bg-purple-600 hover:bg-primary">Title: {project.title} </p>
          <br />
          

             <p  className="justify-center items-center flex h-11   bg-purple-600 hover:bg-primary">Description: {project.description} </p>


         
      </div>
}