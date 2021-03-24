import './App.css';
import Footer from './components/Footer';
import Sportpage from './pages/Sportpage';
import Politicspage from './pages/Politicspage';
import Newspage from './pages/Newspage';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Entertainmentpage from './pages/Entertainmentpage';

function App() {
  return (
    <>
      <Router >
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/news">
            <Newspage />
          </Route>
          <Route path="/politics">
            <Politicspage />
          </Route>
          <Route path="/sport">
            <Sportpage />
          </Route>
          <Route path="/entertainment">
            <Entertainmentpage />
          </Route>
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
