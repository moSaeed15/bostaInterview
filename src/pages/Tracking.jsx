import { TrackNavbar } from '../components/TrackNavbar';
import TrackSearch from '../components/TrackSearch';

const Tracking = () => {
  return (
    <div>
      <TrackNavbar trackPage={true} />
      <TrackSearch />
    </div>
  );
};

export default Tracking;
