import { Grid } from "components/grid";
import { PagesHeader } from "components/header";
import { AboutHeader } from "components/header";
import Layout from "components/layout";
import Section from "components/sections";
import Image from "next/image";

export default function About() {
    return (
        <Layout pageTitle="About" style={{ backgroundColor: "#faf8eb" }}>
            <AboutHeader img={{src:"/images/sections/IMG-2244.jpg",alt:"FEYReP's Building"}} />
            <Section fullHeight className="container w-full text-center">
                <div className="lg:w-2/3 m-auto text-primary">
                    <h1 className="text-5xl lg:text-7xl font-bitter font-extrabold  mb-2">Our Story</h1>
                    <p className="text-base lg:text-lg font-sans">The determination to add value to the lives of the poor and vulnerable members of the society drives our sustainable people-centric empowerment programs, advocates for a society where values are upheld, inequality gap bridged, improved health care prioritized with a safe and secure environment for our women/girls to live and thrive.</p>
                </div>
            </Section>
            <Section fullWidth className="px-7 lg:px-20 bg-white">
                <Grid className="container grid-cols-1 lg:grid-cols-2">
                    <div className="py-14 lg:w-96 text-primary ">
                        <div className="my-3 ">
                            <h2 className="text-3xl lg:text-5xl font-bitter font-bold">Mission</h2>
                            <p className="text-base lg:text-lg font-sans">To empower families and restore values in our youths.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-bitter font-bold">Vision</h2>
                            <p className="text-base lg:text-lg font-sans">To create a platform where values can be added to the lives of the people</p>
                        </div>

                    </div>
                    <div>
                        <Image
                            className="rounded-xl"
                            width={584}
                            height={390}
                            src="/images/about/DSC_0230.jpg"
                            alt="Women Empowerment"
                        />
                    </div>
                </Grid>
            </Section>

            <Section fullWidth className="px-7 lg:px-14 container">
                <Grid className="grid-cols-1 lg:grid-cols-2">
                    <div>
                        <Image
                            className="rounded-xl"
                            width={584}
                            height={390}
                            src="/images/about/IMG_7613.jpg"
                            alt=""
                        />
                    </div>
                    <div className="text-primary lg:px-14 px-6 mt-6 lg:mt-0">
                        <div className="my-1 ">
                            <h2 className="mb-4 text-3xl lg:text-5xl font-bitter font-bold">Objectives</h2>
                            <ul className="text-base lg:text-lg font-sans" style={{ listStyleType: "circle" }}>
                                <li>To provide enabling environment for raising successful families.</li>
                                <li>To empower women to provide economic and emotional support to their families, end stigmatization and violence against women.</li>
                                <li>To advocate for the prevention of teenage pregnancy, rape and education for the girl child.</li>
                                <li>To create opportunity that engenders moral values and economic excellence.</li>
                                <li>To Support government efforts towards sustainable development goals (SDGs).</li>
                            </ul>
                        </div>

                    </div>

                </Grid>
            </Section>
            <Section fullWidth className="px-7 lg:px-20 bg-white">
                <Grid className="grid-cols-1 lg:grid-cols-2 container">
                    <div className="py-9 lg:w-96 text-primary ">
                        <div className="my-2 ">
                            <h2 className="mb-4 text-3xl lg:text-5xl font-bitter font-bold">Priority Areas</h2>
                            <ul className="text-base lg:text-lg font-sans" style={{ listStyleType: "circle" }}>
                                <li>Health and Wellness  </li>
                                <li>Education of the Girl child and moral re-orientation of our youth</li>
                                <li>Advocacy against rape and Gender Based Violence</li>
                                <li>Economic empowerment</li>
                                <li>Youth participation and re-orientation for behavioural change</li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <Image
                            className="rounded-xl"
                            src="/images/DSC_0909.JPG"
                            width={584}
                            height={370}
                            alt=""
                        />
                    </div>
                </Grid>
            </Section>
            <Section fullWidth className="px-7 lg:px-14 container">
                <Grid className="grid-cols-1 lg:grid-cols-2">
                    <div>
                        <Image
                            className="rounded-xl"
                            src="/images/sections/children-3319460_1920.jpg"
                            width={584}
                            height={350}
                            alt=""
                        />
                    </div>
                    <div className="text-primary py-6 lg:px-14 px-6 mt-6 lg:mt-0">
                        <div className="my-1 ">
                            <h2 className="mb-4 text-3xl lg:text-5xl font-bitter font-bold">Beneficiaries</h2>
                            <ul className="text-base lg:text-lg font-sans" style={{ listStyleType: "circle" }}>
                                <li>Women/Men.</li>
                                <li>Children / Youth.</li>
                                <li>Physically Challenged.</li>
                                <li>Community Based Organizations (CBOs).</li>
                                <li>Community Health Workers / TBA.</li>
                                <li>Traditional / Community Development Associations.</li>
                                <li>Policy Makers (Local).</li>
                            </ul>
                        </div>

                    </div>

                </Grid>
            </Section>
            <Section fullWidth className="px-12 lg:px-20 bg-white">
                <Grid className="grid-cols-1 lg:grid-cols-2 container">
                    <div className="py-14 lg:w-96 text-primary ">
                        <div className="my-3 ">
                            <h2 className="mb-4 text-3xl lg:text-5xl font-bitter font-bold">Services</h2>
                            <ul className="text-base lg:text-lg font-sans" style={{ listStyleType: "circle" }}>
                                <li>Maternal/New Born Child Health(MNCH) e.g safe motherhood/ safe delivery</li>
                                <li>Gender Based Violence Preventive and Response services</li>
                                <li>Adolescent Health and Moral Development Programmme</li>
                                <li>Health Care Services/Wellness</li>
                                <li>Empowerment Programmes/Capacity Building</li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <Image
                            className="rounded-xl"
                            src="/images/about/IMG_2896.jpg"
                            width={584}
                            height={390}
                            alt=""
                        />
                    </div>
                </Grid>
            </Section>
            <Section fullWidth className="px-7 lg:px-14 container">
                <Grid className="grid-cols-1 lg:grid-cols-2">
                    <div>
                        <Image
                            className="rounded-xl"
                            src="/images/about/students.jpeg"
                            width={584}
                            height={360}
                            alt="" />
                    </div>
                    <div className="text-primary lg:px-14 px-6 mt-6 lg:mt-0">
                        <div className="my-1 ">
                            <h2 className="mb-4 text-3xl lg:text-5xl font-bitter font-bold">Strategies</h2>
                            <ul className="text-base lg:text-lg font-sans" style={{ listStyleType: "circle" }}>
                                <li>Women/Men.</li>
                                <li>Behavioural Change Communication (BCC) i.e Advocacy and Sensitization</li>
                                <li>Media.</li>
                                <li>Mentoring and Training Peer Educators.</li>
                                <li>Health Care Service.</li>
                                <li>Capacity building.</li>
                                <li>Networking and Partnership Re-enforcement.</li>
                                <li>Trade-Specific Empowerment for the Indigent and Vulnerable People.</li>
                            </ul>
                        </div>

                    </div>

                </Grid>
            </Section>

        </Layout>
    )
}