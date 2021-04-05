import { useRouter } from 'next/router';
import Head from 'next/head'
import Navbar from 'components/navbar';

const Projects = function () {
    const { id } = useRouter().query;
    return (
        <div>
            <Head>
                <title>News| {id}</title>
            </Head>
            <main>
                <Navbar activeBtn="projects"/>
                <div>{id}</div>
                {console.log(useRouter())}
            </main>

        </div>
    )
}

export default Projects