import Link from 'next/link';


const Navbar = ({ activeBtn }) => {
    return (
        <div className="z-50 fixed w-full bg-white   shadow-lg">
            {/* <h1 className="text font-medium text-2xl">FEYReP</h1> */}
            <div className="bg-primary py-2 lg:px-12 ">
                <div className="flex flex-row justify-between w-full container px-10">
                    <div className="contact col-span-4 flex flex-row">
                        <div className="px-2  text-white">
                            <a href="tel:+234000000001" target="_blank">
                                <span className="mdi mdi-phone"></span>
                                <span className="hidden lg:inline"> +234000000001</span>
                            </a>
                        </div>

                        <div className="px-2  text-white">
                            <a href="mailto:info@feyrep.org.ng" target="_blank">
                                <span className="mdi mdi-gmail"></span>
                                <span className="hidden lg:inline"> info@feyrep.org.ng</span>
                            </a>
                        </div>
                    </div>
                    <div className="social flex flex-row col-span-4">   </div>
                   
                    <div className="social flex flex-row col-span-4">
                        <div className="px-2">
                            <a href="https://twitter.com/feyrep" target="_blank">
                                <span className="mdi mdi-twitter text-white"></span>
                            </a>
                        </div>
                        <div className="px-2 ">
                            <a href="https://www.facebook.com/feyrep" target="_blank">
                                <span className="mdi mdi-facebook text-white"></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className=" flex flex-row justify-between r fw-container sm:gap-10 md:gap-0" >
                <div className="py-3 px-4  md:px-4 flex">
                    <div className="col-span-5 xlg:col-span-4 p-1 ">
                        <img className="fw-logo" src="/images/logo-icon.png" alt="FEYReP logo" />
                    </div>
                    <div className="col-span-8">
                        <h1 className="fw-logo-text text-3xl m-auto" title="FAMILY EMPOWERMENT & Youth Reorientation Path Initiative">FEY<span className="text-gray-500">ReP</span></h1>
                    </div>
                </div>
                <div className="hidden lg:block  ">
                    <div className="justify-items-center grid  grid-flow-col lg:gap-0 xl:gap-1 place-items-center font-normal nav-buttons transition-all">
                        <Link href="/">
                            <a className={`${activeBtn == "home" && 'border-primary border-b-2 home-btn '}`}>Home</a>
                        </Link>
                        <Link href="/about">
                            <a className={`${activeBtn == "about-us" && 'border-primary border-b-2 home-btn'}`}>About</a>
                        </Link>
                        <Link href="/projects">
                            <a className={`${activeBtn == "about-us" && 'border-primary border-b-2 home-btn'}`}>Projects</a>
                        </Link>

                        <Link href="/media">
                            <a>Media</a>
                        </Link>

                        <Link href="/publications">
                            <a>Publications</a>
                        </Link>

                        <Link href="/donate">
                            <a>Donations</a>
                        </Link>
                        <Link href="/news">
                            <a className={`${activeBtn == "news" && 'border-primary border-b-2 home-btn'}`}>News</a>
                        </Link>
                    </div>
                </div>
                <div className=" hidden xl:block xlg:col-span-1">
                    <div className="ml-12 my-3">
                        <a href="/donate" className="px-12 py-4 inline-block rounded-full hover:bg-transparent hover:text-primary transition bg-primary text-white border-primary-200 border-2">
                            {/* <span className=" inline-block hover:scale-150 transform transition"></span> */}Donate Now
                        </a>
                        {/* <a href="/donate" className="fw-donate-btn hover:text-secondary-200 hover:border-secondary-200">Donate Now</a> */}
                    </div>
                </div>
                <div className="sm:col-span-7 lg:hidden ">
                    <div className="my-2  px-8">
                        <a href="" className="btn text-primary">
                            {/* <i className="mdi mdi-hamburger text-5xl"></i> */}
                            <div className="dropdown-trigger__item"></div>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
/* Navbar.propTypes = {
    activeBtn: PropTypes.string,
} */
export default Navbar