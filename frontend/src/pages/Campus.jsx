import { NavBar, Profile } from '../components';

export default function Campus() {
    return (
      <div class="mx-6 mt-12 text-sm sm:mx-24 sm:text-base">
        <Profile />
        <NavBar />
        <br/>
        <p>[Ķīpsalas studentu pilsēiņa]</p>
        <img 
	    src="frontend/src/assets/Campus_map.png" 
	    alt="Campus_map" 
	    style={{ width: '660px', height: 'auto', marginTop: '20px' }} />
      </div>
    );
  }
