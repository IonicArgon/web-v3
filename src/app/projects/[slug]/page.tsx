import { allProjects } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import ProjectHeader from "@/components/projects/project-header";
import ProjectContentWrapper from "@/components/projects/project-content-wrapper";

interface Params {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Params) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const Content = getMDXComponent(project.body.code);

  return (
    <article>
      <ProjectHeader title={project.title} date={project.date} />
      <ProjectContentWrapper>
        <Content />
      </ProjectContentWrapper>
    </article>
  );
}
