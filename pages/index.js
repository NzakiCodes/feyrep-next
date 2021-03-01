import { FeatureCard } from 'components/cards';
import { HoverableCard } from 'components/cards';
import Section from 'components/sections';
import Head from 'next/head';
import Header from '../components/header';
import Navbar from '../components/navbar';



export default function Home() {
  return (
    <div >
      <Head>
        <title>FEYReP</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/mdi/css/materialdesignicons.min.css" />
      </Head>

      <main>
        <Navbar activeBtn="home" />
        <div className="p-10" />
        <Header />
        <div className="bg-gray-100">
          <Section>
            <div className="py-12 ">
              <div className="max-w-7xl  ">
                <div className="lg:text-center">
                  <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">What we do</h2>
                  <p className="mt-2 lg:text-6xl leading-8 font-extrabold font-quicksand  tracking-tight text-gray-900 text-4xl">
                  We do it <span className="font-normal">for all people</span>
                  </p>
                  
                </div>
                <div className="mt-16">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 text-center md:gap-x-8 md:gap-y-10">
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
                </div>
              </div>
            </div>

          </Section>

        </div>
      </main>

    </div>
  )
}
