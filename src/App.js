import './App.css';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import Header from './components/Header';
import Services from './components/Services';
/* import Header from '../src/Header';
 */



const App = () => {

  /*   display: grid;
    grid - template - columns: repeat(3, 1fr);
    grid - template - rows: repeat(4, 1fr);
    grid - column - gap: 0px;
    grid - row - gap: 0px; */

  return (
    <>
      <Header />
      <Services />
      <GlobalStyles />

    </>
  );
}

export default App;
