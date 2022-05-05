import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import About from './pages/About';

function App() {
  return (
      <div className='font-sans'>
        <Header/>
        <Navigation/>
        <About/>      
      </div>
  );
}

export default App;
