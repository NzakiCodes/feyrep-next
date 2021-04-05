import React, { useEffect } from 'react';
import axios from 'axios'
import { Card, FeatureCard, InfoCard, NewsFlashCard } from 'components/cards';
import Section, { SectionTitle } from 'components/sections';
import Head from 'next/head';
import Header from '../components/header';
import Navbar from '../components/navbar';
import { Grid } from 'components/grid';
import Slider from "react-slick";
import Layout from 'components/layout';

export async function getStaticProps() {
  var data = 0;
  axios
    .get("http://localhost:8055/items/news")
    .then(res => data = res.data.data)
    .catch(err => console.error(err));

  return {
    props: {
      header: { data }
    }
  }
}

const img1 = { src: "/images/img-hero.JPG" }

export default function Home({ header }) {
  console.log( header);
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Layout home>
      <div>
          <Section fullWidth className="container lg:mb-14 lg:relative lg:h-80 ">
            <InfoCard />
          </Section>
          <Section fullWidth fullHeight className="px-4 lg:container">
            <Grid className="grid-cols-1 gap-x0 lg:grid-cols-2 lg:gap-x-7">
              <div className="relatdive  lg:h-96">
                <div className="">
                  <img className="rounded-lg" src="/images/sections/GBV_001.JPG" alt="Children" />
                </div>
              </div>
              <div>
                <div className="max-w-lg mt-20 md:mt-0 lg:py-7 px-2 lg:px-4 text-left">
                  <span className="bg-primary-600 block  mt-0 mb-0 px-10 w-4" style={{ padding: "1px 2px 1px 35px" }}></span>
                  <span className="bg-primary-600 block  mb-4 mt-1 px-10 w-5" style={{ padding: "1px 2px 1px 70px" }}></span>
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-bold  mb-2 pb-0.5 ">Gender Based Violence (GBV).</h3>
                  <p className="text-base lg:text-xl font-normal font-quicksand text-gray-800">Despite the global outrage against Gender Based Violence and its attendant physical, emotional and psychological consequences on survivors, their families and the larger community...</p>
                  <div className="py-5 mt-2">
                    <a href="/donate" className="px-12 font-quicksand py-3 inline-block rounded-full hover:bg-transparent text-white hover:text-primary-200 font-bold text-md uppercase transition border-primary-200  bg-primary-200 border-2">Know More.</a>
                  </div>
                </div>
              </div>
            </Grid>

          </Section>
          <Section fullHeight fullWidth className="bg-white my-14" style={{ overflow: "hidden" }}>
            <Slider {...sliderSettings} className="grid sm:grid-flow-col md:grid-flow-row grid-cols-1 md:grid-cols-3  relative gap-0 w-full">
              <NewsFlashCard img={"/images/img-hero.JPG"}>
                <div className=" pr-4 lg:text-left flex flex-col text-center lg:flex-row lg:border-r-2 border-gray-200">
                  <div className="text-6xl col-span-5 px-10">
                    <span className="flaticon-button text-red-600"></span>
                  </div>
                  <div className="content col-span-7">
                    <h3 className="text-lg font-bold mb-0.5 pb-0.5 ">Helping Mankind</h3>
                    <span className="bg-red-600 inline-block  mb-4 px-10" style={{ padding: "1px 2px 1px 25px" }}></span>
                    <p className="text-base font-sans text-gray-700">Auis nostrud exercitation ullam labor aliquip exsed consequat duis autpsum dolore magna aliqua minim</p>
                  </div>
                </div>
              </NewsFlashCard>
              <NewsFlashCard title="Free Eye Surgery" text="FEYReP in partnership with MTN Foundation Eyesight Restoration Intervention Scheme (MTNF EyeRIS) conducted eye care outreach benefitting at least 6,000 persons. " img={"/images/IMG_001.JPG"} />
              <NewsFlashCard title="Free Surgical Care" text="Also noteworthy is the free surgical care recently organized by FEYReP in collaboration with Pro-Health International and Akwa Ibom State Association of Nigeria... " img={"/images/DSC_0909.JPG"} />
              <NewsFlashCard img={"/images/img-hero.JPG"} />
              <NewsFlashCard img={"/images/IMG_001.JPG"} />
              <NewsFlashCard img={"/images/DSC_0909.JPG"} />
            </Slider>
          </Section>
          <Section fullWidth className="lg:px-24  px-14 my-16" style={{ background: "url(/images/sections/text-section_2.png) top right no-repeat" }}>

            <SectionTitle title={"Ongoing Projects"} subtitle="Educational Interventions" />
            <Grid className="containers text-center grid-cols-1 md:grid-cols-3 md:gap-7 gap-y-4 mx-auto w-full">
              <Card img={img1} title="Bright Future for responsible boys." description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
              <Card img={img1} title="Bright Future for responsible boys." description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
              <Card img={img1} title="Bright Future for responsible boys." description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
            </Grid>
          </Section>

          <Section fullWidth fullHeight className="" style={{ background: "url(/images/sections/children-3319460_1920.jpg) center no-repeat fixed", backgroundSize: "cover" }}>
            <div className="w-full h-full py-14 lg:px-24" style={{ background: "rgba(0,0,0,0.89)" }}>
              <Grid className="grid-cols-2 gap-x-7">
                <div className="rounded-lg">
                  <img className="rounded-lg" src="/images/sections/IMG-2014_b.jpg" alt="Children" />
                </div>
                <div>
                  <div className="max-w-lg py-6 px-4 text-left">
                    <span className="bg-secondary-200 block  mt-0 mb-0 px-10 w-1" style={{ padding: "1px 2px 1px 15px" }}></span>
                    <span className="bg-secondary-200 block  mb-6 mt-1 px-10 w-2" style={{ padding: "1px 2px 1px 30px" }}></span>
                    <h3 className=" text-6xl font-bold  mb-2 pb-0.5 text-white">Can Poverty be Eradicated?</h3>
                    <p className="text-2xl font-normal font-sans text-white">Poverty is a problem that has proven solutions, and donations play a crucial role in it. </p>
                    <div className="py-3 mt-1">
                      <a href="/donate" className="px-12 py-4 inline-block rounded-full bg-transparent hover:text-gray-700 font-bold text-md uppercase transition hover:bg-secondary font-quicksand text-white border-secondary-200 border-2">
                        {/* <span className=" inline-block hover:scale-150 transform transition"></span> */}Donate Now
                        </a>
                      {/* <a href="/donate" className="fw-donate-btn hover:text-secondary-200 hover:border-secondary-200">Donate Now</a> */}
                    </div>
                  </div>
                </div>
              </Grid>
            </div>
          </Section>
          <Section fullWidth fullHeight className="py-10 px-14 lg:px-14  my-14" style={{ background: "url(/images/sections/events_bg.png) top left no-repeat bg-contain", backgroundSize: "contain" }}>

            <SectionTitle title={"Latest News"} subtitle="Educational Interventions" />

            <Grid className="container px-10 grid-cols-1 md:grid-cols-3 md:gap-7 gap-y-4 mx-auto w-full">
              <Card border img={img1} title="Bright Future for responsible boys." date="January 3, 2019" description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
              <Card border img={img1} title="Bright Future for responsible boys." date="January 3, 2019" description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
              <Card border img={img1} title="Bright Future for responsible boys." date="January 3, 2019" description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
            </Grid>
          </Section>
          <Section fullWidth fullHeight className="h-full bg-primary my-10">
            <Grid className="grid-cols-1 lg:grid-cols-2 ">
              <div className="">
                <img src="/images/sections/pregnacare.JPG" alt="Children" />
              </div>
              <div className="px-10 py-14">
               
              </div>
            </Grid>
          </Section>
          <Section >
            <Grid className="grid-cols-2 gap-x-4">
              <div className="rounded-lg">
                <img className="rounded-lg" src="/images/sections/children-3319460_1920.jpg" alt="Children" />
              </div>
              <div>
                <img src="/images/sections/children-3319460_1920.jpg" alt="Children" />
              </div>
            </Grid>
          </Section>
          <Section fullWidth fullHeight className="container px-7 m-auto lg:px-14 bg-white">
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

        </div>
      

    </Layout>
  )
}
