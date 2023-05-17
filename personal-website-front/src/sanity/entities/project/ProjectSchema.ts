import {
  IBaseSanitySchema,
  IBaseSanitySchemaFields,
} from "@/sanity/common/interfaces/IBaseSanitySchema";

const ProjectFields: Array<IBaseSanitySchemaFields> = [
  {
    name: "name",
    title: "Name",
    type: "string",
  },
  {
    name: "slug",
    title: "Slug",
    type: "slug",
    options: [{ source: "name" }],
  },
  {
    name: "image",
    title: "Image",
    type: "image",
    options: [{ hostpot: true }],
    fields: [
      {
        name: "alt",
        title: "Alt",
        type: "string",
      },
    ],
  },
  {
    name: "url",
    title: "Url",
    type: "url",
  },
  {
    name: "content",
    title: "Content",
    type: "array",
    of: [
      {
        type: "block",
      },
    ],
  },
];

const ProjectSchema: IBaseSanitySchema = {
  name: "project-schema",
  title: "Projects",
  type: "document",
  fields: ProjectFields,
};

export default ProjectSchema;
