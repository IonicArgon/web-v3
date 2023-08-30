import { allBlogs, Blog } from "contentlayer/generated";
import BlogHeading from "@/components/blog/heading";
import BlogCard from "@/components/blog/blog-card";
import BlogCardWrapper from "@/components/blog/blog-card-wrapper";
import compareDesc from "date-fns/compareDesc";

export default async function Blog() {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div>
      <BlogHeading />
      <BlogCardWrapper>
        {blogs.map((blog: Blog) => (
          <BlogCard
            key={blog.slug}
            title={blog.title}
            date={blog.date}
            href={blog.url}
            description={blog.description}
            mainTag={blog.tags[0]}
          />
        ))}
      </BlogCardWrapper>
    </div>
  );
}
