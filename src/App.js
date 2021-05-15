import "./App.css";
import SideNavbar from "./component/Navbar/Navbar_Side";
import TopNavbar from "./component/Navbar/Navbar_top";
import Footer from "./component/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import CreateAlbum from "./page/CreateAlbum";
import CreatePost from "./page/CreatePost";
import Authentication from "./page/Authentication";
import EditProfile from "./page/EditProfile";
import UploadMusic from "./page/UploadMusic";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <SideNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/createalbum" exact component={CreateAlbum} />
        <Route path="/createpost" exact component={CreatePost} />
        <Route path="/editprofile" exact component={EditProfile} />
        <Route path="/uploadmusic" exact component={UploadMusic} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
