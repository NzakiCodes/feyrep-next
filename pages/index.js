import { useEffect } from 'react';
import axios from 'axios'
import { FeatureCard } from 'components/cards';
import { NewsCard } from 'components/cards';
import Section from 'components/sections';
import Head from 'next/head';
import Header from '../components/header';
import Navbar from '../components/navbar';
import { NewsFlashCard } from 'components/cards';
import { Grid } from 'components/grid';

export async function getStaticProps() {
  var data = 0;
  // axios
  //   .get("http://localhost:8055/items/news")
  //   .then(res => data = res.data.data)
  //   .catch(err => console.error(err));

  return {
    props: {
      header: { data }
    }
  }
}

const img1 = { src: "/images/img-hero.JPG" }

export default function Home({ header }) {
  console.log("header:" + header);
  return (
    <div >
      <Head>
        <title>FEYReP</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/mdi/css/materialdesignicons.min.css" />
      </Head>

      <main className="relative w-full">
        <Navbar activeBtn="home" />
        <div className="p-10" />
        <Header />
        <div>
          <Section className="bg-gray-100">
            <div className="py-12 ">
              <div className="max-w-7xl  ">
                <div className="md:text-center">
                  <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">What we do</h2>
                  <p className="mt-2 md:text-5xl lg:text-6xl leading-8 font-extrabold font-quicksand  tracking-tight text-gray-900 text-4xl">
                    We do it <span className="font-normal">for all people</span>
                  </p>

                </div>
                <div className="mt-16">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 text-center md:gap-x-8 md:gap-y-10">
                    <FeatureCard

                      image="/images/what we do/1_blood.svg"
                      title="Health Interventions"
                      description="
                          Free Surgical Care
                          DeWorming Of Children
                          Free EyeCare Services
                          Martha’s Pregnacare Outreach
                          Family Planning And Reproductive Health
                          Building Of Health Care Centers
                          Donation Of Medical Equipment To Hospital"
                    />
                    <FeatureCard
                      image="/images/what we do/1_charity.svg"
                      title="Gender Equality and Women Empowerment"
                      description="
                  Trade Specific Empowerment For Rural Women
                  Boosting Gender Equality Through FEYRePs Agro Processing Chain
                  Agricultural Development And Farming
                  Remodeling Of Rural Markets"
                    />
                    <FeatureCard
                      image="/images/what we do/1_house.svg"
                      title="Social Welfare"
                      description="
                      Live, Learn And Work- A Project For The Elderly
                      The Right To Rise. A Project For The Physically Challenged To Reduce Inequality
                      Shelter Of Hope- Shelter Project For The Poor"
                    />

                  </dl>
                  <div className="my-14 text-center">
                    <a href="/projects" className="btn  mt-9 px-16 rounded-full border-primary-200 text-gray-900  hover:bg-primary-200 border-2 tracking-wider font-quicksand hover:text-white ">Explore</a>
                  </div>
                </div>
              </div>
            </div>

          </Section>
          <Section fullWidth fullHeight className="bg-white">
            <div className="grid sm:grid-flow-col md:grid-flow-row grid-cols-1 md:grid-cols-3  relative gap-0 ">
              <NewsFlashCard img={"/images/img-hero.JPG"} />
              <NewsFlashCard img={"/images/IMG_001.JPG"} />
              <NewsFlashCard img={"/images/DSC_0909.JPG"} />
            </div>
          </Section>
          <Section className="sm:container lg:container">
            <div className="text-center my-2 py-3 lg:py-5 mb-7">
              <div className="title py-3 lg:py-10">
                <h2 className="text-xl  lg:text-lg font-bitter font-extrabold mb-4 text-primary-600"> Projects</h2>
                <h3 className="text-3xl lg:text-5xl font-bitter capitalize font-extrabold">Educational Interventions </h3>
              </div>
            </div>
            <Grid className="grid-cols-1 md:grid-cols-3 md:gap-7 gap-y-4 mx-auto w-full">
              <NewsCard img={img1} title="Bright Future for responsible boys." date="January 3, 2019" description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
              <NewsCard img={img1} title="Bright Future for responsible boys." date="January 3, 2019" description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
              <NewsCard img={img1} title="Bright Future for responsible boys." date="January 3, 2019" description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
            </Grid>
          </Section>
          <Section className="container">
            <div className="text-center my-5">
              <div className="title py-10">
                <h2 className="text-xl font-bitter font-extrabold mb-2">Latest News</h2>
                <h3 className="text-3xl font-bitter font-extrabold">EDUCATIONAL INTERVENTION </h3>
              </div>
            </div>
          </Section>
          <Section fullWidth className="py-10 h-96" style={{background:"url(/images/sections/text-section_2.png) top right no-repeat"}}>
         
          </Section>
        </div>
      </main>

    </div>
  )
}
