import PropTypes from 'prop-types';

const Dropdown = ({ items, mobile }) => {
  return (
    <ul
      className={` 
      ${
        mobile ? 'p-4 w-max py-5 lg:top-[60px]' : 'p-2 w-full'
      } absolute shadow-dropdown z-20 bg-white  top-[73px] p-2  font-medium text-sm rounded-md mt-2`}
    >
      {items.map((item, i) => {
        return (
          <li
            className="py-1 px-3 text-dropdown-color transition-all duration-300 hover:underline hover:text-dropdown-color  hover:bg-dropdown-hover"
            key={i}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array,
  mobile: PropTypes.bool,
};
export default Dropdown;
