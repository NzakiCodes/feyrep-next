const Navbar = ({activeBtn}) => {
    return (
        <div className=" fixed w-full bg-white border-white border-b-2">
            {/* <h1 className="text font-medium text-2xl">FEYReP</h1> */}
            <div className="bg-primary py-5 px-12 ">
            </div>
            <div className=" flex sm:flex-col md:flex-row fw-container sm:gap-10 md:gap-0" >
                <div className="col-span-3 py-3 px-4  md:px-12 flex">
                    <div className="col-span-4 p-2">
                        <img className="h-10 md:h-12" src="/images/logo-icon.png" alt="FEYReP logo" />
                    </div>
                    <div className="col-span-8">
                        <h1 className="text-4xl py-3 px-1 text-gray-900 font-serif">FEY<span className="text-gray-500">ReP</span></h1>
                    </div> 
                </div>
                <div className="hidden md:block md:col-span-7 ">
                    <div className="justify-items-center grid  grid-flow-col lg:gap-0 xl:gap-6 place-items-center font-normal nav-buttons transition-all">
                        <a className={`${activeBtn =="home" && 'border-primary border-b-2 home-btn'}`} href="#">Home</a>
                        <a className={`${activeBtn =="about-us" && 'border-primary border-b-2 home-btn'}`} href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Media</a>
                        <a href="#">Publications</a>
                        <a href="#">Donations</a>
                        <a href="#">News</a>
                    </div>
                </div>
                <div className=" hidden xl:block xlg:col-span-2">
                    <div className="m-8 px-4">
                        <a href="/donate" className="btn btn-primary hover:opacity-80">Donate</a>
                    </div>
                </div>
                <div className="md:hidden sm:col-span-2">
                    <div className="my-8  px-8">
                        <a href="" className="btn btn-primary">SB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar