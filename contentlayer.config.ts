import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `content/projects/*.md`,
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
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const split = doc._raw.flattenedPath.split("/");
        return split[split.length - 1];
      },
    }
  },
}));

const Blog = defineDocumentType(() => ({
  name: "Blog",
}));

const config = makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Blog],
});

export default config;
