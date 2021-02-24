import './App.css';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import Services from './components/Services';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/AboutUs';
import HowWork from './components/HowWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
/* import MobileMenu from './components/MobileMenu'; */
import { BrowserRouter as Router } from 'react-router-dom';

// You can also use <link> for styles
/* import Header from '../src/Header';
 */


const App = () => {



  /*   display: grid;
    grid - template - columns: repeat(3, 1fr);
    grid - template - rows: repeat(4, 1fr);
    grid - column - gap: 0px;
    grid - row - gap: 0px; */

  return (
    <Router>
      <Navbar />
      {/*       <MobileMenu /> */}
      <Home />
      <Services />
      <AboutUs />
      <HowWork />
      <Contact />
      <Footer />
      <GlobalStyles />

    </Router>
  );
}

export default App;
