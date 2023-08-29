import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `content/projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const split = doc._raw.flattenedPath.split("/");
        return split[split.length - 1];
      },
    },
  },
}));

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `content/blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const split = doc._raw.flattenedPath.split("/");
        return split[split.length - 1];
      },
    },
  },
}));

const config = makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Blog],
});

export default config;
