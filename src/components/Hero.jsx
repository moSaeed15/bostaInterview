import { useTranslation } from 'react-i18next';

const Hero = ({ language }) => {
  const { t } = useTranslation();

  return (
    <section
      className={`bg-hero-pattern pt-32 ${
        language === 'en' ? 'font-Poppins' : 'font-Cairo'
      } overflow-hidden relative  xl:min-h-[50vw] xl:flex xl:items-end `}
    >
      <div className="px-7 xl:max-w-[45%] xl:flex xl:flex-col xl:mb-52 xl:items-start ">
        <h1 className=" text-[45px] xl:text-[50px] mb-2 font-bold text-dropdown-color text-center leading-[4rem] ltr:mr-5  rtl:ml-5  min-w-[10ch] xl:text">
          {t('hero.joinGeneration')}
        </h1>
        <p className="hero__paragraph text-base xl:text-lg font-semibold leading-6 mt-4 mb-7">
          {t('hero.redefine')}
        </p>
        <button className="bg-brand-red text-white shadow-button rounded py-2 px-4 text-lg">
          {t('hero.startNow')}
        </button>
        <div className="hexagon"></div>
        <img
          className="absolute w-[60vw] -bottom-2 ltr:right-1 rtl:left-1 lg:w-[50vw] xl:w-[40vw] xl:h-[17vw] xl:ltr:-right-5  xl:rtl:-left-5 rtl:-scale-x-100"
          src="/car.webp"
          alt="car"
        />
        <img
          className="absolute rtl:right-0 left-0 bottom-1/3 xl:left-[55%] xl:rtl:right-[55%]"
          src="/blue-cloud.svg"
          alt="blue-cloud"
        />
      </div>
    </section>
  );
};

export default Hero;
