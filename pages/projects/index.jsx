import Layout from "components/layout";
import { Grid } from "components/grid";
import Link from "next/link";
import {Card} from "components/cards";
import {HighlightHeader} from  "components/header"
import Section,{ SectionTitle } from "components/sections";

export default function Projects({ projects }) {
    return (
        <Layout pageTitle="Projects">
            {/* <div className="py-10 " /> */}
            <HighlightHeader title={"Projects"}/>
            <SectionTitle title="Projects" subtitle="FEYReP Projects"/>
            <Section>
            <Grid className="container py-20 container justify-center lg:px-10 grid-cols-1 content-center  md:grid-cols-2 lg:grid-cols-3 md:gap-7 gap-y-4 lg:mx-auto w-full">
               
            </Grid>
            </Section>
        </Layout>
    )
}
