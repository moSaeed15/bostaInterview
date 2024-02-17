import { useTranslation } from 'react-i18next';
import FooterList from './FooterList';

const Footer = ({ language }) => {
  const { t } = useTranslation();

  return (
    <footer
      className={`mt-0.5 flex flex-col py-14 bg-footer-color px-[10%] ${
        language === 'en' ? 'font-Lato' : 'font-Cairo'
      } lg:flex-row`}
    >
      <img src={t('footer.img')} alt="bosta logo" className="w-fit mb-12" />
      <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-x-8 ltr:lg:ml-24 rtl:lg:mr-24 xl:gap-x-32">
        <FooterList
          title={t('footer.li1')}
          items={t('footer.items1', { returnObjects: true })}
        />
        <FooterList
          title={t('footer.li2')}
          items={t('footer.items2', { returnObjects: true })}
        />
        <FooterList
          title={t('footer.li3')}
          items={t('footer.items3', { returnObjects: true })}
        />
        <FooterList
          title={t('footer.company')}
          items={t('footer.companyItems', { returnObjects: true })}
        />
      </div>
      <span className="text-dropdown-color text-base font-bold underline ltr:lg:ml-8 ltr:xl:ml-16  rtl:lg:mr-8 rtl:xl:mr-16 ">
        {t('footer.trackShipment')}
      </span>
    </footer>
  );
};

export default Footer;
