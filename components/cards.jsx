import Image from "next/image";

export const HoverableCard = ({ children, className }) => {
    return (
        <div className={`shadow-lg hoverable-card ${className}`}>
            {children}
        </div>
    )
};

export const NewsFlashCard = ({ img }) => (
    <HoverableCard className="bg-white  overflow-hidden relative">
        <div className="absolute z-20 w-full h-full bg-black opacity-50"></div>
        <img className=" " src={img} alt={img} />
    </HoverableCard>
);

export const NewsCard = ({ img, title, date, description }) => (
    <div className="hover:shadow-xl  transition-all " style={{ borderWidth: "1px" }}>
        <img src={img.src} alt={img.alt ? img.alt : img.src} />
        <div className="container py-8 px-5 border-gray-200 ">
            <div className="mb-4">
                <h4 className="text-primary-200 uppercase font-bold font-quicksand">{date}</h4>
                <h3 className="font-extrabold capitalize transition-all font-bitter hover:text-primary-200" style={{ fontSize: "22px" }}>
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

export const Card = ({ children, className }) => {
    return (
        <div className={`border-secondary border-b-4 shadow-lg pt-14 pb-10 px-7 relative ${className}`}>
            <div></div>
        </div>
    )
}