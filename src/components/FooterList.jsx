import PropTypes from 'prop-types';

const FooterList = ({ items, title }) => {
  return (
    <div className="">
      <ul className="text-grey text-sm pl-0">
        <h5 className="text-dropdown-color text-base font-bold mb-4">
          {' '}
          {title}
        </h5>
        {items.map((item, i) => {
          return (
            <li className="py-1   " key={i}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FooterList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
export default FooterList;
