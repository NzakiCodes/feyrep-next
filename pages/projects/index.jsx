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
                {/* {
                    projects && projects.map((project) => {
                        const { id, title, featured_image, content } = project;

                        return (
                            <Link href={`/projects/${id}`} key={id}>
                                <a>
                                    <Card border news img={{ src: "https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/assets/" + featured_image, alt: title }} title={title} description={content.slice(0, 100)+"..."} />
                                </a>
                            </Link> 

                        )
                    }

                    )
                    // console.log(projects)
                } */}
            </Grid>
            </Section>
        </Layout>
    )
}

// export async function getStaticProps() {
//     const res = await fetch("https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/items/projects");
//     const { data } = await res.json();
//     // console.log(data); 

//     if (!data) {
//         return {
//             notFound: false,
//         }
//     }

//     return {
//         props: {
//             projects: data
//         }
//     }
// }