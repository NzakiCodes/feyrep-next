export const HoverableCard = ({ children, className }) => {
    return (
        <div className={`shadow-lg py-6 px-4 ${className}`}>
            {children}
        </div>
    )
};

export const FeatureCard = ({ icon, title, description, iconColor }) => {
    return (
        <div className="">
            <div className="p-4">
                <div className={`flex items-center justify-center h-12 w-12 rounded-md ${iconColor ? iconColor : "bg-primary-200"}  text-white`}>
                    {icon}
                </div>
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
