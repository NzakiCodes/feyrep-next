import Navbar from "components/navbar";
import Head from "next/head";
import { CoverHeader } from "../../components/header";
import Link from "next/link";
import Layout from "components/layout";

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data
        }
    }
}

export default function News({ data }) {

    return (
        <Layout>
            <Head>
                <title>FeyRep|News</title>
            </Head>
            <main>
                <Navbar activeBtn="news" />
                <div className="p-10" />
                <CoverHeader title="News" />
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
            </main>
        </Layout>
    )
}