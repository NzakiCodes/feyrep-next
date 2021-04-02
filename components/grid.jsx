export const Grid = ({ children, className }) => {
    return (
        <div className={`grid sm:grid-flow-col md:grid-flow-row ${className&&className }`}>{children}</div>
    )
};
export const GridItem = () => (<div></div>)