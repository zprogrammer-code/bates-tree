import './App.css';
import BtHero from './Components/Herosection';
import BtNav from './Components/Navbar';
import ServiceSection from './Components/Services';

function App() {
  return (
    <div className="App">
      <BtNav/>
      <BtHero/>
      <ServiceSection/>
    </div>
  );
}

export default App;
