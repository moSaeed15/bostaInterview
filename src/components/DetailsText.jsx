import PropTypes from 'prop-types';
const DetailsText = ({ title, text }) => {
  return (
    <div className={`  flex flex-col gap-1`}>
      <span className="opacity-70">{title}</span>
      <span className="font-semibold">{text}</span>
    </div>
  );
};
DetailsText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default DetailsText;
