import Section from 'components/sections'
import Markdown from 'markdown-to-jsx';
import Image from "next/image";
import { NewsHeader } from 'components/header';
import { SectionTitle } from 'components/sections';
import Layout from 'components/layout';

const Projects = function ({ project }) {
    
    return (
        <Layout pageTitle={`Project|${project && project.title}`} navlink="projects">
            <Section className="container px-10 mt-10" fullWidth>

                <SectionTitle subtitle={project && project.title} title="Project" />
                <Image
                    src={"https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/assets/" + project.featured_image}
                    width={700}
                    height={400}
                    priority
                    layout="responsive"
                />
                <br/>
               {
                    project && (
                        <Markdown>
                            {project.content}
                        </Markdown>
                    )
                }


            </Section>
        </Layout>
    )
}

export async function getStaticPaths() {

    const res = await fetch("https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/items/projects");
    const posts = await res.json();

    const paths = posts.data.map((post) => ({
        params: { id: post.id.toString() },
    }));
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/items/projects/${params.id}`);
    const {data} = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            project: data
        }
    }
}


export default Projects