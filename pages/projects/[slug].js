import { getProjectData, getProjectRoutes } from "../../lib/projects";
import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq'
import { NextSeo } from 'next-seo'
import Layout from "../../components/Layout";
import RenderSections from "../../components/RenderSections";
import client from "../../client";

const pageFragment = groq`
...,
content[] {
  ...,
  cta {
    ...,
    route->
  },
  ctas[] {
    ...,
    route->
  }
}`
export const getServerSideProps = async ({ params }) => {
  const projectData = await getProjectData(params.slug)
  
    return {
      props: projectData || {},
    }
}

const builder = imageUrlBuilder(client)

const ProjectPage = (props) => {
  const {
    title = 'Missing title',
    description,
    disallowRobots,
    openGraphImage,
    content = [],
    config = {},
    slug,
  } = props

  const openGraphImages = openGraphImage
    ? [
        {
          url: builder.image(openGraphImage).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: title,
        },
        {
          // Facebook recommended size
          url: builder.image(openGraphImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          // Square 1:1
          url: builder.image(openGraphImage).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: title,
        },
      ]
    : []

    return (
      <Layout config={config}>
        <NextSeo
          title={title}
          
          description={description}
          canonical={config.url && `${config.url}/${slug}`}
          openGraph={{
            images: openGraphImages,
          }}
          noindex={disallowRobots}
        />
        {content && <RenderSections sections={content} />}
      </Layout>
    )

}



/*
export async function getStaticProps({ params }) {
    
  const project = await getProjectData(params.slug);
  console.log(project)
    return {
        props: {
        project,
        },
    };
  }

export async function getStaticPaths() {
  // Return a list of possible value for id
    const paths = await getProjectRoutes();
    return {
      paths,
      fallback: false,
    };   
} */
export default ProjectPage
