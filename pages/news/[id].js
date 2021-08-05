import Section from 'components/sections'
import Markdown from 'markdown-to-jsx';
import { NewsHeader } from 'components/header';
import { SectionTitle } from 'components/sections';
import Layout from 'components/layout';


const NewsItem = function ({ data }) {
    const news = data;
    return (
        <Layout pageTitle={`News|${news && news.title}`} navlink="news">
            <Section className="container">

                {/* <SectionTitle subtitle={news && news.title} title="News" />
                <NewsHeader img={{ src: "https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/assets/" + news.cover_image, alt: news.title }} />
                {
                    news && (
                        <Markdown>
                            {news.contents}
                        </Markdown>
                    )
                }
 */}

            </Section>
        </Layout>
    )
}


// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url);
//     return response.json(); // parses JSON response into native JavaScript objects
// }
// export async function getStaticPaths() {

//     const res = await fetch("https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/items/news");
//     const posts = await res.json();

//     const paths = posts.data.map((post) => ({
//         params: { id: post.id.toString() },
//     }));
//     return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
//     const res = await fetch(`https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/items/news/${params.id}`);
//     const data = await res.json();

//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             data: data.data
//         }
//     }
// }


export default NewsItem