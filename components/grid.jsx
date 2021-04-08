export const Grid = ({ children, className }) => {
    return (
        <div className={`grid sm:grid-flow-col md:grid-flow-row ${className&&className }`}>{children}</div>
    )
};
export const GridItem = ({children}) => (<div>{children}</div>);

export const GridWithImage = ({iltr,irtl,children})=>{
    if(iltr){
        return(
            <div>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}