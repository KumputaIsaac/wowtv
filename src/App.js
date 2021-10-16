import "./App.css";
import Footer from "./components/Footer";
import Sportpage from "./pages/Sportpage";
import Politicspage from "./pages/Politicspage";
import Newspage from "./pages/Newspage";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Entertainmentpage from "./pages/Entertainmentpage";
import Adminpage from "./pages/Adminpage/Adminpage";

function App() {
	return (
		<div
			style={{ background: `url('${process.env.PUBLIC_URL}/Rectangle 3.png')` }}
		>
			<Router>
				<Switch>
					<Route exact path="/">
						<div className="pofnewsbackground"></div>
						<div className="pofnewsbackgroundsmallcolor"></div>
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
						<div className="pofnewsbackground"></div>
						<div className="pofnewsbackgroundsmallcolor"></div>
						<Adminpage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
