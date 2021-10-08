import ArtistJumbo from "./ArtistJumbo";
import MyNavBar from "./MyNavBar";
import MySideBar from "./MySideBar";

const ArtistPage = () => {
  return (
    <div className="container-master">
      <div className="aside-bar " style={{ height: "90vh !important" }}>
        <MySideBar />
        <div className="w-100">
          <MyNavBar />
        </div>
      </div>
    </div>
  );
};
export default ArtistPage;
