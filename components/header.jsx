import Section from "./sections";
import Image from 'next/image';


const Header = () => (
    <div className="relative  shadow-lg max-h-90">
        <div className="absolute inset-0 w-full h-full object-cover object-center z-20 bg-opacity-80 bg-black ">
            <div className="flex justify-center">
                <div className="max-w-screen-md sm:mt-10 container m-auto max-h-11 py-1 md:mt-20 text-center">
                    <h1 className=" md:text-7xl mt-10 text-2xl text-white font-extrabold font-quicksand">
                        War against Gender Based Violence.
                    </h1>
                    <h2 className="md:text-7xl text-secondary-200 text-2xl m-10 text-center  font-storytella ">
                        and RAPE.
                    </h2>

                    <div className="container text-white  ">
                        <p className="font-quicksand text-base px-2">
                            Despite the global outrage against Gender Based Violence and its attendant physical, emotional and psychological consequences on survivors, their families and the larger community...
                         </p>
                    </div>
                    <div className="my-12">
                        <a href="/about" className="btn  mt-9 px-12 rounded-full border-secondary-200  hover:bg-secondary-200 border-2 tracking-wider font-quicksand hover:text-gray-800 ">Know More</a>
                    </div>
                    {/* <h3 className="my18 md:mt5 md:text-1xl text-1xl m-10 text-center  text-white opacity-70 font-extrabold font-quicksand">
                       We are Family Empowerment <br />
                        <span className="">
                            & Youth Reorientation Path Initiative
                        </span>
                    </h3> */}
                </div>
            </div>
        </div>
        <img lassName="absolute inset-0 w-full h-full object-cover object-center z-10"
            src="/images/img-hero.JPG" alt="" />
        {/* <Image
            width={1366}
            height={970}
            className="absolute inset-0 w-full h-full object-cover object-center z-10"
            src="/images/img-hero.JPG" alt="WomanBeach"
            layout
            priority
        /> */}

    </div>
);
export const ProjectsHeader = ({ highlitedProjects }) => {
    return (
        <>
            {
                highlitedProjects.map((project) => {
                    const { id, title, cover_image, contents, link } = project;
                    return (
                        <div key={id}>
                            <Image
                                src={"https://www.master-7rqtwti-dd2fyzz46gjlw.ca-1.platformsh.site/assets/" + cover_image}
                                width={1366}
                                height={670}
                                priority
                            />
                        </div>
                    )
                })
            }
        </>
    )
}
export const CoverHeader = ({ title }) => (
    <div>
        <Section fullWidth fullHeight className="h-96" style={{ background: "url(/images/sections/children-3319460_1920.jpg) center no-repeat fixed", backgroundSize: "cover" }}>
            <div className="w-full h-full py-14 lg:px-24 text-center" style={{ background: "rgba(0, 0, 0, 0.9)" }}>
                <h1 className="py-28 font-bold font-mono text-white text-6xl lg:text-7xl">{title}</h1>
            </div>
        </Section>
    </div>
);
export const NewsHeader = ({ img }) => (
    <div className="lg:-mt-14 overflow-hidden lg:relative lg:h-screen w-full" >
        <div className="flex justify-center" style={{ maxWidth: "1366px" }}>
            <Image
                src={img.src}
                width={1152}
                height={590}
                alt={img.alt}
                priority
            />
        </div>
    </div>
);
export const PagesHeader = ({ img }) => {
    return (
        <div className="lg:-mt-14 overflow-hidden lg:relative lg:h-screen w-full" style={{ background: "url(" + img + ") no-repeat", backgroundSize: "cover" }}>
            <div className="  mt-32  wave-leaf lg:absolute lg:bottom-0"></div>
        </div>
    )
}

export const AboutHeader = ({ img }) => {
    return (
        <div className="lg:-mt-14 overflow-hidden lg:relative lg:h-screen w-full" >
            <div className="flex justify-center" style={{ maxWidth: "1366px" }}>
                <Image
                    src={img.src}
                    width={1366}
                    height={700}
                    alt={img.alt}
                    priority
                />
            </div>
            <div className=" -mt-32  lg:mt-32  wave-leaf lg:absolute lg:bottom-0"></div>
        </div>
    )
}
export const HighlightHeader = ({ image, title }) => {
    return (
        <div className="max-h-96 mb-11 overflow-hidden flex justify-center content-center flex-col  relative">
            <div className="absolute z-10 top-0 left-0  w-full h-full bg-black opacity-80 ">

            </div>
            <div className="absolute left-1/3 z-20 right-1/2">
                <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">{title}</h1>
            </div>
            {/* <Image
                src="/images/sections/IMG-2244.JPG"
                width={1366}
                height={800}
                // alt={img.alt}
                priority
                layout="responsive"
            /> */}
            <img src="/images/sections/IMG-2244.JPG" alt="" />
        </div>
    )
}
export default Header;