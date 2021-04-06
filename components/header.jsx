import Section from "./sections";


const Header = () => (
    <div className="relative h-screen shadow-lg ">
        <div className="absolute inset-0 w-full h-full object-cover object-center z-20 bg-opacity-80 bg-black ">
            <div className="flex justify-center">
                <div className="sm:mt-10 container m-auto max-h-11 py-10 md:mt-20 text-center">
                    <h1 className="md:text-7xl mt-10 text-5xl text-white font-extrabold font-quicksand">
                        We help the people in need
                    </h1>
                    <h2 className="md:text-7xl text-secondary-200 text-6xl m-10 text-center  font-storytella ">
                        In the Society.
                    </h2>

                    <div className="container text-white  ">
                        <p className="font-quicksand text-lg px-2">
                            The determination to add value to the lives of the poor and vulnerable members of the <br className="hidden md:block" /> society drives our sustainable people-centric empowerment programs,...
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
        <img className="absolute inset-0 w-full h-full object-cover object-center z-10" src="/images/img-hero.JPG" alt="WomanBeach" />

    </div>
);
export const CoverHeader = ({ title }) => (
    <div>
        <Section fullWidth fullHeight className="h-96" style={{ background: "url(/images/sections/children-3319460_1920.jpg) center no-repeat fixed", backgroundSize: "cover" }}>
            <div className="w-full h-full py-14 lg:px-24 text-center" style={{ background: "rgba(0, 0, 0, 0.9)" }}>
                <h1 className="py-28 font-bold font-mono text-white text-6xl lg:text-7xl">{title}</h1>
            </div>
        </Section>
    </div>
);
export const NewsHeader = ({ image }) => (
    <div>
        <Section className="container" >
            <div className="lg:px-24 flex justify-center text-center">
                <img className="h-96" src={`${image ? image : "/images/sections/children-3319460_1920.jpg"}`} alt="" />
            </div>
        </Section> 
    </div>
);
export const PagesHeader = ({ img }) => {
    return (
        <div className=" overflow-hidden relative" style={{background:"url("+img+") no-repeat",backgroundSize:"cover",height:"90vh"}}>
           <div className="wave-leaf absolute bottom-0"></div>
        </div>
    )
}

export default Header;