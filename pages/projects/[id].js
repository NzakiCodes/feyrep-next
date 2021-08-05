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


            </Section>
        </Layout>
    )
}


export default Projects