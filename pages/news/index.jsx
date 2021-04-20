import { Card } from "components/cards";
import { Grid } from "components/grid"
import Link from "next/link";
import Layout from "components/layout";
import Header from "components/header";
import { HighlightHeader } from "components/header"
import Section, { SectionTitle } from "components/sections";

export async function getStaticProps() {
    const res = await fetch("https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/items/news");
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: data.data
        }
    }
}

export default function News({ data }) {

    return (
        <Layout pageTitle="News" >

            <HighlightHeader title={"News"} />
            <SectionTitle title="News" subtitle="FEYReP News" />
            <Section>
                <Grid className="container py-20 container justify-center lg:px-10 grid-cols-1 content-center  md:grid-cols-2 lg:grid-cols-3 md:gap-7 gap-y-4 lg:mx-auto w-full">
                    {
                        data && data.map((news_item) => {
                            const { id, title, cover_image, contents } = news_item;

                            return (
                                <Link href={`/news/${id}`} key={id}>
                                    <a>
                                        <Card border news link={`/news/${id}`} img={{ src: "https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/assets/" + cover_image, alt: title }} title={title} description={contents.slice(0, 100)} />
                                    </a>
                                </Link>

                            )
                        }

                        )
                    }
                </Grid>
            </Section>
        </Layout>
    )
}
