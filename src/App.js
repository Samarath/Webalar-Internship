
import './App.css';
import Services from './Components/Company services/Services';

import Footer from './Components/Footer/Footer';
import Info from './Components/Info/Info';
import Navbar from './Components/Navbar/Navbar';
import Works from './Components/Works/Works';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Services />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
