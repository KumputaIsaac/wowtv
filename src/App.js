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
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Newspage from './components/Newspage';

function App() {
  return (
    <>
      

      <Router >
        <Switch>
          <Route exact path="/">
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
          </Route>
          <Route path="/news">
            
              <Newspage />
            
            <Footer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
