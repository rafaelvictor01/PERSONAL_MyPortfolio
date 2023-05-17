export interface IBaseSanitySchema {
  name: string;
  title: string;
  type: "document";
  fields: Array<IBaseSanitySchemaFields>;
}

export interface IBaseSanitySchemaFields {
  name: string;
  title: string;
  type: "string" | "slug" | "image" | "url" | "array";
  options?: Array<any>;
  fields?: Array<any>;
  of?: Array<any>;
}
