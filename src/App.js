import './App.css';
import FeatureSection from './Components/Features';
import BtHero from './Components/Herosection';
import BtNav from './Components/Navbar';
import ServiceSection from './Components/Services';

function App() {
  return (
    <div className="App">
      <BtNav/>
      <BtHero/>
      <ServiceSection/>
      <FeatureSection/>
    </div>
  );
}

export default App;
