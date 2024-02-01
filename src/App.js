import './index.css';

import FeatureSection from './Components/Features';
import BtHero from './Components/Herosection';
import BtNav from './Components/Navbar';
import AboutSection from './Components/About';
import ServiceCards from './Components/Services';

function App() {
  return (
    <div className="App">
      <BtNav/>
      <BtHero/>
      <AboutSection/>
      <FeatureSection/>
      <ServiceCards/>
    </div>
  );
}

export default App;
