import './App.css';
import NavComponent from './components/NavComponent';
import Home from './components/Home';
import About from './components/About';
import Explore from './components/Explore';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App bg-light text-dark">

      <NavComponent/>

      <Home />

      <About />

      <Explore />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
