// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `content/projects/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    }
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
      }
    }
  }
}));
var Blog = defineDocumentType(() => ({
  name: "Blog"
}));
var config = makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Blog]
});
var contentlayer_config_default = config;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-D7S6YQVQ.mjs.map
