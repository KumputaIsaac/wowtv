import './App.css';
import Footer from './components/Footer';
import Sportpage from './pages/Sportpage';
import Politicspage from './pages/Politicspage';
import Newspage from './pages/Newspage';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Entertainmentpage from './pages/Entertainmentpage';
import Adminpage from './pages/Adminpage/Adminpage';

function App() {
  return (
    <>
      <Router >
        <div className="pofnewsbackground"></div>
        <div className="pofnewsbackgroundsmallcolor"></div>
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
          <Route path="/adminpage">
            <Adminpage />
          </Route>
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
