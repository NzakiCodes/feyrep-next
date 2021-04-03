import { useRouter } from 'next/router';
import Head  from 'next/head'

const NewsItem = function () {
    const { slug } = useRouter().query;
    return (
        <div>
            <Head>
                <title>News| {slug}</title>
            </Head>
            <div>{slug}</div>
            {console.log(useRouter())}

        </div>
    )
}

export default NewsItem