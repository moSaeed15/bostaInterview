import FooterList from './FooterList';

const Footer = () => {
  return (
    <footer className="mt-0.5 flex flex-col py-14 bg-footer-color px-[10%] font-Lato lg:flex-row">
      <img src="bosta-en-logo.svg" alt="bosta logo" className="w-fit mb-12" />
      <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:ml-24 xl:gap-x-32">
        <FooterList
          title="Products"
          items={['Solutions', 'Dashboard', 'Mobile App']}
        />
        <FooterList
          title="Integrations"
          items={['Shopify', 'WooCommerce', 'Custom APIs']}
        />
        <FooterList title="Use Cases" items={['Businesses', 'SMEs']} />
        <FooterList
          title="Company"
          items={['About us', 'Careers', 'Pricing', 'FAQ']}
        />
      </div>
      <span className="text-dropdown-color text-base font-bold underline lg:ml-8 xl:ml-16 ">
        Track Shipment
      </span>
    </footer>
  );
};

export default Footer;
