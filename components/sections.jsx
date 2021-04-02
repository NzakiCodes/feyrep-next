const Section = ({children, className, fullWidth, fullHeight})=>(
    <section className={`fw-scontainer mx-auto ${fullWidth?"px-0 py-0 ":"px-16 py-8"} ${fullHeight?"py-0 ":"py-8"} ${className}`}>
        {children}
    </section>
);

export default Section