
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Tools from './components/Tools';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Skills/>
      <Tools/>
      <Contact/>
    </div>
  );
}

export default App;
