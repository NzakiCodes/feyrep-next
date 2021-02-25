

const Header = () => (
    <div class="relative h-screen ">
        <div className="absolute inset-0 w-full h-full object-cover object-center z-30 bg-opacity-80 bg-primary ">
            <div className="flex justify-center ">
                <div className="m-auto max-h-11 py-16 mt-20 text-center">
                    <h1 className="text-7xl text-white font-bold">
                        We help all people in need.
                    </h1>
                    <h2 className="text-5xl m-10 text-center text-white ">
                        Around the world.
                    </h2>
                    <h3 className="text-2xl m-10 text-center text-white font-bold">
                        FAMILY EMPOWERMENT <br />
                        <span>
                            & Youth Reorientation Path Initiative
                        </span>
                    </h3>
                    <div className="mt-9">
                        <a href="/about" className="btn mt-9 rounded-full border hover:text-secondary-200 hover:border-secondary-200">Know More</a>
                    </div>
                </div>
            </div>
        </div>
        <img class="absolute inset-0 w-full h-full object-cover object-center z-10" src="/images/img-hero.JPG" alt="WomanBeach" />
    </div>
);

export default Header;