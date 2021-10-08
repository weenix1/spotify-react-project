import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import ArtistPage from "./components/ArtistPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        {/*   <ArtistPage /> */}

        <MyFooter />
      </Router>
    </div>
  );
}

export default App;
