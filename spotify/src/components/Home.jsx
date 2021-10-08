import JumboTracks from "./JumboTracks";
import MyNavBar from "./MyNavBar";
import MySideBar from "./MySideBar";
import { withRouter } from "react-router-dom";
import ArtistJumbo from "./ArtistJumbo";
import { Route } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-master">
      <div className="aside-bar " style={{ height: "90vh !important" }}>
        <MySideBar />
        <div className="w-100">
          <MyNavBar />
          <JumboTracks />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
