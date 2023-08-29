import { allBlogs, Blog } from "contentlayer/generated";
import BlogCard from "./blog/blog-card";
import BlogCardWrapper from "./blog/blog-card-wrapper";
import compareDesc from "date-fns/compareDesc";

function getLatestBlogs(blogs: Blog[]) {
  return blogs
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);
}

export default function BlogHighlight() {
  const blogs = getLatestBlogs(allBlogs);

  return (
    <div>
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