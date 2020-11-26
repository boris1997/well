import './App.css';
import Navbar from './components/Navbar';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import Home from './components/Home';
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <GlobalStyles />

    </>
  );
}

export default App;
