
import './App.css';
import Footer from './components/footer';
import Home from './components/home';
// import Navbar from './components/navbar';
import Navbar from './components/navbar2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
