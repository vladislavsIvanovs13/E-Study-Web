import { NavBar, Profile } from '../components';
import image from '../assets/Campus_map.png';
export default function Campus() {
    return (
      <div className="mx-6 mt-12 text-sm sm:mx-24 sm:text-base">
        <Profile/>
        <NavBar/>
        <img
	    src={image}
	    alt="Campus_map" 
	    style={{ width: '660px', height: 'auto', marginTop: '20px',
            marginLeft: 'auto', marginRight: 'auto'}}/>
      </div>
    );
  }
