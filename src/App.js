import "./App.css";
import SideNavbar from "./component/Navbar/Navbar_Side";
import TopNavbar from "./component/Navbar/Navbar_top";
import Footer from "./component/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./page/Home";
function App() {
  return (
    <div className="App">
      <TopNavbar />
      <SideNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
