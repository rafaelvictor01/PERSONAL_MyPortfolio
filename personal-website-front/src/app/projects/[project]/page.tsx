import { getProject } from "@/sanity/entities/project/ProjectRepository";

interface IProjectPage {
  params: {
    project: string;
  };
}

export default async function ProjectPage(
  props: IProjectPage
): Promise<JSX.Element> {
  const projectSlug = props.params.project;
  const project = await getProject(projectSlug);

  return <>ProjectPage</>;
}
