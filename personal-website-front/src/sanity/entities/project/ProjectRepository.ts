import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID ?? "",
    dataset: "production",
    apiVersion: "2023-05-17",
    useCdn: true,
  });

  const fetchData = client.fetch(
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

  return fetchData;
}
