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



export default NewsItem