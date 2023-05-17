import ProjectSchema from "@/sanity/entities/project/ProjectSchema";
import { SchemaPluginOptions } from "sanity";

export const GroupedSchemas: SchemaPluginOptions = {
  types: [ProjectSchema],
};
