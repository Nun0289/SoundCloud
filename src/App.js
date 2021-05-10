import "./App.css";
import SideNavbar from "./component/Navbar/Navbar_Side";
import TopNavbar from "./component/Navbar/Navbar_top";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <TopNavbar />
        <SideNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
