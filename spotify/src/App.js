import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import ArtistPage from "./components/ArtistPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ArtistJumbo from "./components/ArtistJumbo";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home} />
        {/*   <ArtistPage /> */}
        <Route path="/liked" exact component={ArtistJumbo} />
        <MyFooter />
      </Router>
    </div>
  );
}

export default App;
