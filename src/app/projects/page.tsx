import { allProjects, Project } from "contentlayer/generated";
import ProjectsHeading from "@/components/projects/heading";
import ProjectCard from "@/components/projects/project-card";
import ProjectCardWrapper from "@/components/projects/project-card-wrapper";
import compareDesc from "date-fns/compareDesc";

export default async function Projects() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div>
      <ProjectsHeading />
      <ProjectCardWrapper>
        {projects.map((project: Project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            date={project.date}
            href={project.url}
            description={project.description}
            mainTag={project.tags[0]}
          />
        ))}
      </ProjectCardWrapper>
    </div>
  );
}
