import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Section from 'components/sections'
import Markdown from 'markdown-to-jsx';
import Navbar from 'components/navbar';
// import { NewsHeader } from 'components/header';
import { SectionTitle } from 'components/sections';


const NewsItem = function ({data}) {
    const news = data;
    // const [news, setNews] = useState();
    // const [isLoading, setisLoading] = useState(false);
    // const { id } = useRouter().query;

    // useEffect(async (key = id) => {
    //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${key}`);
    //     const data = await res.json();
    //     setNews(data.data);
    //     setisLoading(true);
    // }, [])
    return (
        <div>
            <Head>
                <title>FeyRep News | {news && news.title}</title>
            </Head>

            <main>
                <Navbar activeBtn="news" />
               
                <div className="p-12" />
                <SectionTitle subtitle={news && news.title} />
                {/* <NewsHeader image={news && `http://localhost:8055/assets/${news.cover_image}`} /> */}

                
                    <Section>

                        {/* <Markdown>
                            {news && news.content}
                        </Markdown> */}

                    </Section> 
            </main>

        </div>
    )
}


// :
//                     <Section>

//                         <Markdown>
//                             {news && news.content}
//                         </Markdown>

//                     </Section>



async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url);
    return response.json(); // parses JSON response into native JavaScript objects
}
export async function getStaticPaths() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    // console.log(posts);
    // const posts = [];
    // postData("https://jsonplaceholder.typicode.com/posts")
    // .then(data => {
    //     posts.push(data); // JSON data parsed by `data.json()` call
    //     console.log(data);
    //   });
        
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));
// console.log(paths);
    // const paths = [{ params: { id: '1' } }, { params: { id: '2' } }]


    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
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


export default NewsItem