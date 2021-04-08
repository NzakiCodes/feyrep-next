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

// export async function getStaticProps() {
//   var data = 0;
//   axios
//     .get("http://localhost:8055/items/news")
//     .then(res => data = res.data.data)
//     .catch(err => console.error(err));

//   return {
//     props: {
//       header: { data }
//     }
//   }
// }

const img1 = { src: "/images/img-hero.JPG" }
const eduProject = {
  boys: { src: "/images/educational_intervention/IMG_8888.JPG" },
  girls: { src: "/images/educational_intervention/_MG_0140.JPG" },
  bts: { src: "/images/educational_intervention/IMG_2826.JPG" },
}

export default function Home() {

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

  const boySliderSettings = { ...sliderSettings, slidesToShow: 1 }
  return (
    <Layout home>
      <div>
        <Section fullWidth className="container lg:mb-14 lg:relative lg:h-80 ">
          <InfoCard />
        </Section>
        <Section fullWidth fullHeight className="px-4 lg:container">
          <Grid className="container lg:px-10 grid-cols-1 md:grid-cols-2 md:gap-7 gap-y-4 lg:mx-auto w-full">
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
            <NewsFlashCard title="Free Eye Surgery" text="FEYReP in partnership with MTN Foundation Eyesight Restoration Intervention Scheme (MTNF EyeRIS) conducted eye care outreach benefitting at least 6,000 persons. " img={"/images/IMG_001.JPG"} />
            <NewsFlashCard title="Free Surgical Care" text="Also noteworthy is the free surgical care recently organized by FEYReP in collaboration with Pro-Health International and Akwa Ibom State Association of Nigeria... " img={"/images/DSC_0909.JPG"} />
            <NewsFlashCard title="Free De-Worming Exercise" text="FEYReP partnered with Niemeth International Pharmaceuticals Plc to implement a de-worming exercise in the state through a school health care programme and over...  " img={"/images/healthcare/deworming.jpg"} />
            <NewsFlashCard title="Martha's Pregnacare" text="As part of efforts to reduce infant morbidity and maternal mortality in the state, more than 300 expectant mothers' from the 31 Local Government Areas of the State have..." img={"/images/healthcare/martha_pregnacare.jpg"} />
            <NewsFlashCard title="Support for persons with disability" text="Provision of mobility aids and financial assistance to more than 300 persons with disability. Providing financial and material support to inmates of Leprosy... " img={"/images/healthcare/disability.jpg"} />
          </Slider>
        </Section>
        {/* Abandorned Child */}
        <Section fullWidth fullHeight className="" style={{ background: "url(/images/sections/children-3319460_1920.jpg) center no-repeat fixed", backgroundSize: "cover" }}>
          <div className="w-full h-full lg:py-14 lg:px-24" style={{ background: "rgba(0,0,0,0.89)" }}>
            <Grid className=" grid-cols-1 lg:grid-cols-2 lg:gap-x-7">
              <Slider {...boySliderSettings} className=" max-h-64 md:max-h-96 overflow-hidden lg:py-10">
                <img className="lg:rounded-lg" src="/images/stories/destiny/IMG_9598.jpg" alt="Children" />
                <img className="lg:rounded-lg" src="/images/stories/destiny/IMG-20200113-WA0038.jpg" alt="Children" />
              </Slider>
              <div>
                <div className="max-w-lg py-6 px-4 text-left">
                  <span className="bg-secondary-200 block  mt-0 mb-0 px-10 w-1" style={{ padding: "1px 2px 1px 15px" }}></span>
                  <span className="bg-secondary-200 block  mb-6 mt-1 px-10 w-2" style={{ padding: "1px 2px 1px 30px" }}></span>
                  <h3 className="text-3xl lg:text-4xl font-bold  mb-2 pb-0.5 text-white">Child Abandonment is a crime against humanity. </h3>
                  <p className="text-lg lg:text-xl font-normal font-sans text-white">The story of Destiny who was abandoned by parents and grandparents is a compelling scoop on the human rights abuses of the world's vulnerable children. In Africa, many children from poor communities and families have been abandoned and left to die. </p><div className="py-3 mt-1">
                    <a href="/stories" className="px-9 lg:px-12 py-3 lg:py-4 inline-block rounded-full bg-transparent hover:text-gray-700 font-bold text-md uppercase transition hover:bg-secondary font-quicksand text-white border-secondary-200 border-2">
                      {/* <span className=" inline-block hover:scale-150 transform transition"></span> */}Read More
                        </a>
                    {/* <a href="/donate" className="fw-donate-btn hover:text-secondary-200 hover:border-secondary-200">Donate Now</a> */}
                  </div>
                </div>
              </div>
            </Grid>
          </div>
        </Section>

        <Section fullWidth className="py-10 px-8 lg:px-14  my-14" style={{ background: "url(/images/sections/text-section_2.png) top right no-repeat" }}>

          <SectionTitle title={"Ongoing Projects"} subtitle="Educational Interventions" />
          <Grid className="container lg:px-10 grid-cols-1 md:grid-cols-3 md:gap-7 gap-y-4 lg:mx-auto w-full">
            <Card img={eduProject.girls} title="Girls uphold your dignity." description="It is generally believed that women are central to community development, therefore education of the girl-child cannot be over-emphasized." />
            <Card img={eduProject.boys} title="Bright Future for responsible boys." description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
            <Card img={eduProject.bts} title="Back To School" description="Education they say is invaluable. Therefore, FEYReP's BACK TO SCHOOL project is focused on re-kitting school children with personal... " />
          </Grid>
        </Section>

        <Section fullWidth fullHeight className="" style={{ background: "url(/images/sections/children-3319460_1920.jpg) center no-repeat fixed", backgroundSize: "cover" }}>
          <div className="w-full h-full lg:py-14 lg:px-24" style={{ background: "rgba(0,0,0,0.89)" }}>
            <Grid className=" grid-cols-1 lg:grid-cols-2 lg:gap-x-7">
              <div className="">
                <img className="lg:rounded-lg" src="/images/sections/IMG-2014_b.jpg" alt="Children" />
              </div>
              <div>
                <div className="max-w-lg py-6 px-4 text-left">
                  <span className="bg-secondary-200 block  mt-0 mb-0 px-10 w-1" style={{ padding: "1px 2px 1px 15px" }}></span>
                  <span className="bg-secondary-200 block  mb-6 mt-1 px-10 w-2" style={{ padding: "1px 2px 1px 30px" }}></span>
                  <h3 className="text-5xl lg:text-6xl font-bold  mb-2 pb-0.5 text-white">Can Poverty be Eradicated?</h3>
                  <p className="text-xl lg:text-2xl font-normal font-sans text-white">Poverty is a problem that has proven solutions, and donations play a crucial role in it. </p>
                  <div className="py-3 mt-1">
                    <a href="/donate" className="px-9 lg:px-12 py-3 lg:py-4 inline-block rounded-full bg-transparent hover:text-gray-700 font-bold text-md uppercase transition hover:bg-secondary font-quicksand text-white border-secondary-200 border-2">
                      {/* <span className=" inline-block hover:scale-150 transform transition"></span> */}Donate Now
                        </a>
                    {/* <a href="/donate" className="fw-donate-btn hover:text-secondary-200 hover:border-secondary-200">Donate Now</a> */}
                  </div>
                </div>
              </div>
            </Grid>
          </div>
        </Section>
        <Section fullWidth fullHeight className="py-28 px-8 lg:px-14  " style={{ background: "url(/images/sections/events_bg.png) top left no-repeat ", backgroundSize: "contain" }}>

          <SectionTitle title={"Latest News"} subtitle="" />

          <Grid className="container lg:px-10 grid-cols-1 md:grid-cols-3 md:gap-7 gap-y-4 lg:mx-auto w-full">
            <Card border img={img1} title="Bright Future for responsible boys." date="January 3, 2019" description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
            <Card border img={img1} title="Bright Future for responsible boys." date="January 3, 2019" description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
            <Card border img={img1} title="Bright Future for responsible boys." date="January 3, 2019" description="This is FEYReP's Advocacy Programme for the boy child. It is targetted at sensitizing the boy child on the dangers of drug... " />
          </Grid>
        </Section>
        <Section fullWidth fullHeight className=" bg-primary my-auto overflow-hidden lg:h-screen" >
          <Grid className="grid-cols-1 lg:grid-cols-2 my-auto">
            <div className="">
              <img src="/images/sections/pregnacare.JPG" alt="Children" />
            </div>
            <div className="px-10 py-10 lg:py-20">
              <div className="text-center text-white py-10">
                <h2 className="text-4xl lg:text-7xl font-bitter capitalize font-extrabold">Martha's Pregnacare</h2>
                <p className="text-base lg:text-xl font-sans py-10">According to UNICEF, Africa is losing about 2,300 under-five year olds and 145 women of childbearing age every single day. Nigeria’s maternal and under-five mortality statistics remain among the worst globally. Akwa Ibom as a state is however not immune from this challenge.</p>
              </div>
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
