import Head from 'next/head'
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Education} from "./components/Education";
import {ProfessionalExperience} from "./components/ProfessionalExperience";

export default function Home() {
    return (
        <>
            <Head>
                <meta property="og:title" content="Justin Konecny | Software Engineer"/>
                <title>Justin Konecny | Software Engineer</title>
            </Head>
            <Hero/>
            <About/>
            <Education/>
            <ProfessionalExperience/>
        </>
    )
}