const Hero = () => {
  return (
    <section className="bg-hero-pattern pt-32 font-Poppins overflow-hidden relative   xl:min-h-[50vw] xl:flex xl:items-end ">
      <div className="px-7 xl:max-w-[45%] xl:flex xl:flex-col xl:mb-52 xl:items-start ">
        <h1 className=" text-[45px]xl: text-[50px] mb-2 font-bold text-dropdown-color text-center leading-[4rem] mr-5 min-w-[10ch] xl:text">
          Join A New Generation Of Logistics!
        </h1>
        <p className="hero__paragraph text-base xl:text-lg font-semibold leading-6 mt-4 mb-7">
          Redefining how you ship, track, collect, deliver all through
          innovative tech-solutions and efficient operations.
        </p>
        <button className="bg-brand-red text-white shadow-button rounded py-2 px-4 text-lg">
          Start now
        </button>
        <div className="hexagon"></div>{' '}
        <img
          className="absolute -bottom-2 right-1 w-[60vw] lg:w-[50vw] xl:w-[40vw] xl:h-[17vw] xl:-right-5"
          src="/car.webp"
          alt="car"
        />{' '}
        <img
          className="absolute left-0 bottom-1/3 xl:left-[55%]"
          src="/blue-cloud.svg"
          alt="blue-cloud"
        />
      </div>
    </section>
  );
};

export default Hero;
