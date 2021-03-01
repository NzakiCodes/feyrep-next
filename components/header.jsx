

const Header = () => (
    <div class="relative h-screen ">
        <div className="absolute inset-0 w-full h-full object-cover object-center z-30 bg-opacity-80 bg-red-500 ">
            <div className="flex justify-center">
                <div className="container m-auto max-h-11 py-10 md:mt-20 text-center">
                    <h1 className="md:text-7xl text-5xl text-white font-extrabold font-quicksand">
                        We help all people in need
                    </h1>
                    <h2 className="md:text-7xl text-secondary-200 text-6xl m-10 text-center  font-storytella ">
                        In the Society.
                    </h2>

                    <div className="container text-white  ">
                        <p className="font-quicksand text-lg px-2">
                            The determination to add value to the lives of the poor and vulnerable members of the <br className="hidden md:block" /> society drives our sustainable people-centric empowerment programs,...
                         </p>
                    </div>
                    <div className="my-12">
                        <a href="/about" className="btn  mt-9 px-12 rounded-full border-secondary-200  hover:bg-secondary-200 border-2 tracking-wider font-quicksand hover:text-white ">Know More</a>
                    </div>
                    {/* <h3 className="my18 md:mt5 md:text-1xl text-1xl m-10 text-center  text-white opacity-70 font-extrabold font-quicksand">
                       We are Family Empowerment <br />
                        <span className="">
                            & Youth Reorientation Path Initiative
                        </span>
                    </h3> */}
                </div>
            </div>
        </div>
        <img className="absolute inset-0 w-full h-full object-cover object-center z-10" src="/images/img-hero.JPG" alt="WomanBeach" />
       
    </div>
);

export default Header;