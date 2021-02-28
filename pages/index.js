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
        <div className="bg-gray-200">
          <Section>
            <div className="py-12 ">
              <div className="max-w-7xl  ">
                <div className="lg:text-center">
                  <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    A better way to send money
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                    accusamus quisquam.
                  </p>
                </div>
                <div className="mt-10">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                    <FeatureCard
                      icon={<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>}
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
                      icon={<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>}
                      title="Gender Equality and Women Empowerment"
                      description="
                  Trade Specific Empowerment For Rural Women
                  Boosting Gender Equality Through FEYRePs Agro Processing Chain
                  Agricultural Development And Farming
                  Remodeling Of Rural Markets"
                    />
                    <FeatureCard
                      icon={<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>}
                      title="Social Welfare"
                      description="
                      Live, Learn And Work- A Project For The Elderly
                      The Right To Rise. A Project For The Physically Challenged To Reduce Inequality
                      Shelter Of Hope- Shelter Project For The Poor"
                    />
                    <FeatureCard
                      icon={<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>}
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
                      icon={<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>}
                      title="Gender Equality and Women Empowerment"
                      description="
                  Trade Specific Empowerment For Rural Women
                  Boosting Gender Equality Through FEYRePs Agro Processing Chain
                  Agricultural Development And Farming
                  Remodeling Of Rural Markets"
                    />
                    <FeatureCard
                      icon={<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>}
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
