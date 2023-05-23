import { getProject } from "@/sanity/entities/project/ProjectRepository";

interface IProjectPage {
  params: {
    projectId: string;
  };
}

export default async function ProjectPage(
  props: IProjectPage
): Promise<JSX.Element> {
  const project = await getProject(props.params.projectId);
  console.log("project: ", project);
  return (
    <div className="max-w-3x1 mx-auto py-20">
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 bg-clip-text text-transparent text-7xl font-extrabold drop-shadow">
          {project.name}
        </h1>

        <a
          href={project.url}
          target="_blank"
          title="View Project"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>
    </div>
  );
}
