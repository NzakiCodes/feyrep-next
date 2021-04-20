import { Grid } from "components/grid";
import Section from "components/sections";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-white bg-gradient-to-r from-primary-200 to-primary">
            {/* <div className="container py-20">

            </div> */}
            <Section>
                <Grid className="space-y-3  sm:grid-cols-1 py-8 md-grid-cols-2 lg:grid-cols-4">
                    <div className="py-3 sm:hidden  px-4 font-quicksand capitalize md:px-4 flex">
                        <div className="col-span-5 xlg:col-span-4 p-1 ">
                            <Image
                                className="fw-logo"
                                src="/images/logo-icon.png"
                                width={45}
                                height={58}
                                alt="FEYReP logo" />
                        </div>
                        <div className="col-span-8">
                            <h1 className="fw-logo-text text-white text-4xl lg:text-5xl m-auto" title="FAMILY EMPOWERMENT & Youth Reorientation Path Initiative">FEY<span className="text-secondary">ReP</span></h1>
                        </div>
                    </div>
                    <div className="">
                        <ul className="flex space-y-3 flex-col">
                            <li>
                                <Link href="/">
                                    <a className="hover:text-secondary" >HOME</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a className="hover:text-secondary" >ABOUT</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <a className="hover:text-secondary" >PROJECTS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/media">
                                    <a className="hover:text-secondary" >MEDIA</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex space-y-3 flex-col">
                            <li>
                                <Link href="/publications">
                                    <a className="hover:text-secondary" >PUBLICATIONS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/donation">
                                    <a className="hover:text-secondary" >DONATIONS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/news">
                                    <a className="hover:text-secondary" >NEWS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a className="hover:text-secondary" >CONTACT</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Grid>
            </Section>
        </footer>
    )
}