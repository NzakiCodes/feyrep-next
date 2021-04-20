const Section = ({ children, className, style, fullWidth, fullHeight }) => (
    <section style={style} className={`fw-scontainer mx-auto ${fullWidth ? "px-0 py-0 " : "px-16 py-8"} ${fullHeight ? "py-0 " : "py-8"} ${className}`}>
        {children}
    </section>
);

export const SectionTitle = ({title,subtitle}) => (
    <div className="text-center  mb-7">
        <div className="title pb-3 lg:py-10">
            <h2 className="text-xl  lg:text-lg uppercase font-extrabold mb-4 text-primary-600">{title}</h2>
            <h3 className="text-3xl lg:text-5xl  capitalize font-extrabold">{subtitle}</h3>
        </div>
    </div>
)
export default Section