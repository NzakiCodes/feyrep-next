

const Header = () => (
    <div class="relative h-screen ">
        <div className="absolute inset-0 w-full h-full object-cover object-center z-30 bg-opacity-80 bg-black ">
            <div className="flex justify-center ">
                <div className="m-auto max-h-11 py-16 md:mt-20 text-center">
                    <h1 className="md:text-7xl text-5xl text-white font-extrabold font-quicksand">
                        We help all people in need.
                    </h1>
                    <h2 className="md:text-7xl text-6xl m-10 text-center text-white font-storytella ">
                        Around the world.
                    </h2>
                    <h3 className="mt-10 md:mt5 md:text-2xl text-1xl m-10 text-center text-white font-extrabold font-quicksand">
                        FAMILY EMPOWERMENT <br />
                        <span className="font-normal">
                            & Youth Reorientation Path Initiative
                        </span>
                    </h3>
                    <div className="mt-9">
                        <a href="/about" className="btn  mt-9 px-12 rounded-full border-primary-200  hover:bg-primary-200 border-2 tracking-wider font-quicksand hover:text-white ">Discover</a>
                    </div>
                </div>
            </div>
        </div>
        <img className="absolute inset-0 w-full h-full object-cover object-center z-10" src="/images/img-hero.JPG" alt="WomanBeach" />
    </div>
);

export default Header;