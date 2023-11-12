import './App.css';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Slider from './components/slider';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Portfolio/>
      <Slider/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
