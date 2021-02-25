const Navbar = ({activeBtn}) => {
    return (
        <div className="z-50 fixed w-full bg-white border-white border-b-2 shadow">
            {/* <h1 className="text font-medium text-2xl">FEYReP</h1> */}
            <div className="bg-primary py-5 px-12 hidden">
            </div>
            <div className=" flex flex-row justify-between lg:justify-center fw-container sm:gap-10 md:gap-0" >
                <div className="py-3 px-4  md:px-6 flex">
                    <div className="col-span-5 xlg:col-span-4 p-2">
                        <img className="fw-logo" src="/images/logo-icon.png" alt="FEYReP logo" />
                    </div>
                    <div className="col-span-8">
                        <h1 className="fw-logo-text">FEY<span className="text-gray-500">ReP</span></h1>
                    </div> 
                </div>
                <div className="hidden lg:block  ">
                    <div className="justify-items-center grid  grid-flow-col lg:gap-0 xl:gap-1 place-items-center font-normal nav-buttons transition-all">
                        <a className={`${activeBtn =="home" && 'border-primary border-b-2 home-btn '}`} href="#">Home</a>
                        <a className={`${activeBtn =="about-us" && 'border-primary border-b-2 home-btn'}`} href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Media</a>
                        <a href="#">Publications</a>
                        <a href="#">Donations</a>
                        <a href="#">News</a>
                    </div>
                </div>
                <div className=" hidden xl:block xlg:col-span-1">
                    <div className=" my-8 mx-4 px-4">
                        <a href="/donate" className="fw-donate-btn hover:text-secondary-200 hover:border-secondary-200">Donate Now</a>
                    </div>
                </div>
                <div className="sm:col-span-7 lg:hidden ">
                    <div className="my-8  px-8">
                        <a href="" className="btn btn-primary">SB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar