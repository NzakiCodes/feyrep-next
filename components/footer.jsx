import { Grid } from "components/grid";
import Section from "components/sections";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="text-white bg-gradient-to-r from-primary-200 to-primary">
            {/* <div className="container py-20">

            </div> */}
            <Section>
                <Grid className="grid-col-3">
                    <div className="py-3 px-4  md:px-4 flex">
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
                    <div>
                        <ul>
                            <li>Number 1</li>
                            <li>Number 2</li>
                            <li>Number 3</li>
                            <li>Number 4</li>
                        </ul>
                    </div>
                </Grid>
            </Section>
        </footer>
    )
}