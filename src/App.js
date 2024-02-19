import './index.css';

import FeatureSection from './Components/Features';
import BtHero from './Components/Herosection';
import BtNav from './Components/Navbar';
import AboutSection from './Components/About';
import ServiceCards from './Components/Services';
import ReviewSection from './Components/Reviews';
import BookNow from './Components/Booknow';
import BtFooter from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BtNav/>
      <BtHero/>
      <AboutSection/>
      <FeatureSection/>
      <ServiceCards/>
      <ReviewSection/>
      <BookNow/>
      <BtFooter/>
    </div>
  );
}

export default App;
