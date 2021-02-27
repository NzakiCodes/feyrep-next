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
        <link rel="stylesheet" href="/mdi/css/materialdesignicons.min.css"/>
      </Head>

      <main>
        <Navbar activeBtn="home"/>
        <div className="p-10"/>
        <Header/>
        <Section>
          <p>
            <HoverableCard>
              Hello
            </HoverableCard>
          </p>
        </Section>
      </main>

    </div>
  )
}
