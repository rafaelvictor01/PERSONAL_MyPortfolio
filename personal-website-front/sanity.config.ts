import { GroupedSchemas } from "@/sanity/common/schemas/GroupedSchemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const sanityConfig = defineConfig({
  title: "Sanity Zone From My Personal Website",
  dataset: "production",
  basePath: "/admin",
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID ?? "",
  apiVersion: "2023-05-17",
  plugins: [deskTool()],
  schema: GroupedSchemas,
});

export default sanityConfig;
