import { allProjects } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

interface Params {
  params: {
    slug: string
  }
}

export default function ProjectPage( { params }: Params ) {
  const project = allProjects.find( ( p ) => p.slug === params.slug )

  if ( !project ) {
    return <div>Project not found</div>
  }

  const Content = getMDXComponent(project.body.code)

  return (
    <div>
      <h1>{project.title}</h1>
      <Content />
    </div>
  )
}
