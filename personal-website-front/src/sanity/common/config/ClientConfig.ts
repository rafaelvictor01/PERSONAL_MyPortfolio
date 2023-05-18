const ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID ?? "",
  dataset: "production",
  apiVersion: "2023-05-17",
  useCdn: true,
};

export default ClientConfig;
