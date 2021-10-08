import { fetchData } from "../lib";
import { useState, useEffect } from "react";

const MusicList = () => {
  const BASE_URL =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=pink";

  const [data, setData] = useState([]);
  useEffect(() => {
    let fetchFunction = async () => {
      let dataFromEndpoint = await fetchData(BASE_URL);
      console.log(dataFromEndpoint);
      setData(dataFromEndpoint.data);
      console.log(dataFromEndpoint.data);
    };
    fetchFunction();
  }, []);

  return (
    <div className="main-content-album">
      <div>
        <div className="padding-content">
          <section id="second-section">
            <div className="container" style={{ marginBottom: 64 }}>
              <div className="d-flex justify-content-between mt-3">
                <h4 style={{ width: "bold" }}>Recently played</h4>
                <p>
                  <span className="text-muted"> SEE All</span>
                </p>
              </div>
              <div className="row py-1 d-flex">
                {data
                  ? data.map((song) => (
                      <div className="col-2 h-100">
                        <div className="card">
                          <img
                            src={song.artist.picture}
                            className="card-img-top"
                            alt="img-fluid"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{song.artist.title}</h5>
                            <p className="dotted">{song.artist.name}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  : "LOADING..."}

                {/*  */}
              </div>
            </div>
          </section>
          <section id="fourth-section">
            <div className="container" style={{ marginBottom: 64 }}>
              <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-primary" onclick="listAlbum()">
                  list albums
                </button>
                <p>
                  <span className="text-muted"> SEE All</span>
                </p>
              </div>
              <div className="row py-1 d-flex"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default MusicList;
