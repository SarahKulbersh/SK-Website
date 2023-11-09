import './App.css';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Slider from './components/slider';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Slider/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
