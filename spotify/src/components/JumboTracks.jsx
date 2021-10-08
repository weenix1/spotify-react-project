import MusicList from "./MusicList";
import { fetchData } from "../lib";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const JumboTracks = ({ searchQuery }) => {
  /*  const [q, setQ] = useState();
  setQ(searchQuery);
 */
  const BASE_URL =
    searchQuery.length > 3
      ? `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
      : `https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`;

  const [data, setData] = useState([]);
  useEffect(() => {
    let fetchFunction = async () => {
      let dataFromEndpoint = await fetchData(BASE_URL);
      console.log(dataFromEndpoint);
      setData(dataFromEndpoint.data);
      console.log(dataFromEndpoint.data);
    };
    fetchFunction();
  }, [searchQuery]);

  return (
    <>
      <div className="music-container">
        <section id="navbar">
          <div className="container-fluid">
            <section id="album-cards">
              <div className="container">
                <h2>Good morning</h2>
                <div className="row py-2">
                  {data
                    ? data.map((song) => (
                        <div className="col-6 col-md-4 col-lg-3" key={song.id}>
                          <div className="card-top p-0 mb-2">
                            <div className="row no-gutters">
                              <div className="col-md-4">
                                <img
                                  src={song.album.cover}
                                  alt="..."
                                  className="img-fluid h-100 w-100"
                                />
                              </div>
                              <div
                                className="
                        col-md-8
                        d-flex
                        justify-content-center
                        align-items-center
                      "
                              >
                                <div className="card-body p-0 pl-1">
                                  <p className="card-text">
                                    <span>{song.album.name}</span>
                                    <span>{song.album.title}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : "LOADING..."}

                  {/*  */}
                </div>
              </div>
            </section>
          </div>
          <MusicList />
        </section>
      </div>
    </>
  );
};
export default withRouter(JumboTracks);
