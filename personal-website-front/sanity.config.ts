import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const sanityConfig = defineConfig({
  projectId: "0n7vfdax",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "17/05/2023",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default sanityConfig;
