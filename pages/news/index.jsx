import Card from "components/cards"
import Link from "next/link";
import Layout from "components/layout";

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
        <Layout pageTitle="News">
            <div className="py-10"></div>
            {
                data && data.map((news_item) => {
                    const { id, title } = news_item;
                   
                    return (
                        <li key={id}>
                            <Link href={`/news/${id}`}>
                                <a>{title}</a>
                            </Link>
                        </li>
                    )
                }

                )
            }
        </Layout>
    )
}