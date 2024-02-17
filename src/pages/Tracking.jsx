import { TrackNavbar } from '../components/TrackNavbar';
import TrackSearch from '../components/TrackSearch';

const Tracking = ({ setLanguage, language }) => {
  return (
    <div>
      <TrackNavbar
        trackPage={true}
        setLanguage={setLanguage}
        language={language}
      />
      <TrackSearch language={language} />
    </div>
  );
};

export default Tracking;
