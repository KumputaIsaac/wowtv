import './App.css';
import Entertainment from './components/Entertainment';
import Footer from './components/Footer';
import Home from './components/Home';
import Ileoba from './components/Ileoba';
import Malachimasterclass from './components/Malachimasterclass';
import Navbar from './components/Navbar';
import Pofnews from './components/Pofnews';
import Politics from './components/Politics';
import Sports from './components/Sports';

function App() {
  return (
    <>
      <Navbar />
      <div className="contain">
        <Home />
        <Pofnews />
        <Sports />
        <Ileoba />
        <Politics />
        <Entertainment />
        <Malachimasterclass />
      </div>
      <Footer />
    </>
  );
}

export default App;
