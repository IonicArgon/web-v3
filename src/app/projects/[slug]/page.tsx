import { allProjects } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import ProjectHeader from "@/components/projects/project-header";
import mdxComponents from "@/components/mdx-components";
import { notFound } from "next/navigation";

interface Params {
  params: {
    slug: string;
  };
}

function formatDate(date: string) {
  const dateToday = new Date();
  // this is such a hacky way to get the date to work god i hate js
  const parsedDate = date.replace(/-/g, "/").replace(/T00:00:00.000Z/g, "");
  const datePublished = new Date(parsedDate);

  const yearsAgo = dateToday.getFullYear() - datePublished.getFullYear();
  const monthsAgo = dateToday.getMonth() - datePublished.getMonth();
  const daysAgo = dateToday.getDate() - datePublished.getDate();

  let dateAgo = "";
  if (yearsAgo > 0) {
    dateAgo = `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  } else if (monthsAgo > 0) {
    dateAgo = `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  } else if (daysAgo > 0) {
    dateAgo = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else {
    dateAgo = "today";
  }

  const fullDate = datePublished.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `${fullDate} (${dateAgo})`;
}

export default function ProjectPage({ params }: Params) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  const MDXContent = useMDXComponent(project.body.code);

  return (
    <article>
      <ProjectHeader
        title={project.title}
        date={formatDate(project.date)}
        tags={project.tags}
      />
      <MDXContent components={mdxComponents} />
    </article>
  );
}
