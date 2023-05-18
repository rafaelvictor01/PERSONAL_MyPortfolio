import { createClient, groq } from "next-sanity";
import IProject from "./IProject";
import ClientConfig from "@/sanity/common/config/ClientConfig";

export async function getProject(slug: string): Promise<IProject> {
  return createClient(ClientConfig).fetch(
    groq`
      *[_type == "project-schema" && slug.current == $slug[0]]{
        _id,
        _createdAt,
        name,
        "slug": slug.current, 
        "image": image.asset->url,
        content
      }
    `,
    { slug }
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
