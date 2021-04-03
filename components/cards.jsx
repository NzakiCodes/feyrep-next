import Image from "next/image";

export const HoverableCard = ({ children, className }) => {
    return (
        <div className={`shadow-lg hoverable-card ${className}`}>
            {children}
        </div>
    )
};

export const NewsFlashCard = ({ img, children }) => (
    <HoverableCard className="bg-white max-h-64 overflow-hidden relative">
        <div className="absolute z-20 w-full h-full " style={{ backgroundColor: "rgba(0, 0, 0, 0.63)" }}>
            <div className=" p-14 text-left relative">

                <div className=" absolute left-14 max-w-xs" style={{top:"100px"}}>
                    <h3 className="text-sm font-medium  mb-2 pb-0.5 text-white">Healthcare</h3>
                    <p className="text-2xl font-bold font-sans text-white">Auis nostrud exercitation ullam labor aliquip exsed.</p>
                   <span className="bg-secondary-200 block  mt-4 mb-0 px-10 w-1" style={{ padding: "1px 2px 1px 15px" }}></span>
                   <span className="bg-secondary-200 block  mb-4 mt-1 px-10 w-2" style={{ padding: "1px 2px 1px 30px" }}></span>

                </div>
            </div>
        </div>
        <img className=" z-10" src={img} alt={img} />
    </HoverableCard>
);

export const NewsCard = ({ img, title, date, description }) => (
    <div className="hover:shadow-xl border-gray-100 transition-all " style={{ borderWidth: "0.25px" }}>
        <img src={img.src} alt={img.alt ? img.alt : img.src} />
        <div className="container py-8 px-5  bg-white">
            <div className="mb-4">
                <h4 className="text-primary-200 uppercase font-bold font-quicksand">{date}</h4>
                <h3 className="text-gray-900 font-extrabold capitalize transition-all font-bitter hover:text-primary-200" style={{ fontSize: "22px" }}>
                    <a href="/new?">
                        {title}
                    </a>
                </h3>
            </div>
            <p className="text-base text-gray-500">{description}</p>
        </div>
    </div>
);
const infoCardStyle = {
    position: "absolute",
    top: "-50px",
    zIndex: 30
}
export const InfoCard = () => (
    <div className="bg-white lg:-top-12 z-30 lg:absolute py-14 lg:py-16 px-10 lg:shadow-lg rounded-lg grid lg:grid-flow-row space-y-8 lg:space-y-0 lg:grid-cols-3 sm:grid-flow-col sm:grid-cols-1" >
        <div className=" pr-4 lg:text-left flex flex-col text-center lg:flex-row lg:border-r-2 border-gray-200">
            <div className="text-6xl col-span-5 px-10 " style={{background:"url(/images/bg-flare.png) no-repeat",backgroundSize:"contain", backgroundPosition:"left 0px"}}>
                <span class="flaticon-doctor text-primary-600"></span>
            </div>
            <div className="content col-span-7">
                <h3 className="text-lg font-bold mb-0.5 pb-0.5 ">Health Intervention</h3>
                <span className="bg-primary-600 inline-block  mb-4 px-10" style={{ padding: "1px 2px 1px 25px" }}></span>
                <p className="text-base font-sans text-gray-700">Auis nostrud exercitation ullam labor aliquip exsed consequat duis autpsum dolore magna aliqua minim</p>
            </div>
        </div>
        <div className=" pr-4 lg:text-left flex flex-col text-center lg:flex-row lg:border-r-2 border-gray-200">
        <div className="text-6xl col-span-5 px-10 " style={{background:"url(/images/bg-flare.png) no-repeat",backgroundSize:"contain", backgroundPosition:"left 0px"}}>
                <span class="flaticon-cancer text-primary-600"></span>
            </div>
            <div className="content col-span-7">
                <h3 className="text-lg font-bold mb-0.5 pb-0.5 ">Education</h3>
                <span className="bg-primary-600 inline-block  mb-4 px-10" style={{ padding: "1px 2px 1px 25px" }}></span>
                <p className="text-base font-sans text-gray-700">Auis nostrud exercitation ullam labor aliquip exsed consequat duis autpsum dolore magna aliqua minim</p>
            </div>
        </div>
        <div className=" pr-4 lg:text-left flex flex-col text-center lg:flex-row">
        <div className="text-6xl col-span-5 px-10 " style={{background:"url(/images/bg-flare.png) no-repeat",backgroundSize:"contain", backgroundPosition:"left 0px"}}>
                <span class="flaticon-love-and-romance text-primary-600"></span>
            </div>
            <div className="content col-span-7">
                <h3 className="text-lg font-bold mb-0.5 pb-0.5 ">Social Welfare</h3>
                <span className="bg-primary-600 inline-block  mb-4 px-10" style={{ padding: "1px 2px 1px 25px" }}></span>
                <p className="text-base font-sans text-gray-700">Auis nostrud exercitation ullam labor aliquip exsed consequat duis autpsum dolore magna aliqua minim</p>
            </div>
        </div>
    </div>
)
export const Card = ({ img, title, date, description, border }) => (
    <div className="hover:shadow-lg rounded border-gray-100 transition-all " style={border ? { borderWidth: "0.25px" } : { border: "none" }}>
        <img src={img.src} alt={img.alt ? img.alt : img.src} />
        <div className="container  py-8 px-5  bg-white">
            <div className="mb-4">
                <h4 className="text-primary-200 uppercase font-bold font-quicksand">{date}</h4>
                <h3 className="text-gray-900 font-extrabold capitalize transition-all font-bitter hover:text-primary-200" style={{ fontSize: "22px" }}>
                    <a href="/new?">
                        {title}
                    </a>
                </h3>
            </div>
            <p className="text-base text-gray-500">{description}</p>
        </div>
    </div>
)

export const FeatureCard = ({ icon, title, description, iconColor, image }) => {
    return (
        <div className="">
            <div className="p-4">
                {icon ? (
                    <div className={`flex items-center justify-center h-12 w-12 rounded-md ${iconColor ? iconColor : "bg-primary-200"}  text-white`}>
                        {icon}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-16 w-16 mx-auto">
                        <img src={image} alt={`${image} ${description}`} />
                    </div>
                )}
            </div>
            <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                    {title}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                    {description}
                </dd>
            </div>
        </div>
    )
};

export const FlashCard = ({ children, className }) => {
    return (
        <div className={`border-secondary border-b-4 shadow-lg pt-14 pb-10 px-7 relative ${className}`}>
            <div></div>
        </div>
    )
}