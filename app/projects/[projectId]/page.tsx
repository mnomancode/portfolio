// "use client";
// import { usePathname } from "next/navigation";
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

          <p  className="justify-center items-center flex h-11   bg-purple-600 hover:bg-primary">Post: {project.id} </p>
          <br />
          <br />
             <p  className="justify-center items-center flex h-11   bg-purple-600 hover:bg-primary">Title: {project.title} </p>
          <br />
          

             <p  className="justify-center items-center flex h-11   bg-purple-600 hover:bg-primary">Description: {project.description} </p>
         
      </div>
}