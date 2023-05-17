import IProject from "@/sanity/entities/project/IProject";
import { getProjects } from "@/sanity/entities/project/ProjectRepository";

export default async function HomePage() {
  const projects: IProject[] = await getProjects();

  return (
    <div>
      {projects.map((project: IProject) => (
        <div key={project._id}>
          <p>{project.name}</p>
          <p>{project.image}</p>
          <p>{project._createdAt}</p>
          <p>{project.slug}</p>
          <p>--------------------------------------</p>
        </div>
      ))}
    </div>
  );
}
