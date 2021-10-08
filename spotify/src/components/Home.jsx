import JumboTracks from "./JumboTracks";
import MyNavBar from "./MyNavBar";
import MySideBar from "./MySideBar";
import { withRouter } from "react-router-dom";

import { useState } from "react";

import { Route } from "react-router-dom";
import ArtistJumbo from "./ArtistJumbo";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="container-master">
      <div className="aside-bar " style={{ height: "90vh !important" }}>
        <MySideBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="board-view w-100">
          <MyNavBar />

          <Route
            path="/home"
            exact
            render={(routerProps) => (
              <JumboTracks {...routerProps} searchQuery={searchQuery} />
            )}
          />

          <Route path="/liked" exact component={ArtistJumbo} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
