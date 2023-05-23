import { createClient, groq } from "next-sanity";
import IProject from "./IProject";
import ClientConfig from "@/sanity/common/config/ClientConfig";

export async function getProject(projectId: string): Promise<IProject> {
  return createClient(ClientConfig).fetch(
    groq`
      *[_type == "project-schema" && _id == $projectId]{
        _id,
        _createdAt,
        name,
        "slug": slug.current, 
        "image": image.asset->url,
        content
      }
    `,
    { projectId }
  );
}

export async function getProjects(): Promise<IProject[]> {
  return createClient(ClientConfig).fetch(
    groq`
      *[_type == "project-schema"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current, 
        "image": image.asset->url,
        content
      }
    `
  );
}
