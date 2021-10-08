const MySideBar = () => {
  return (
    <>
      <div className="col-2 position-aside">
        <a href>
          <img src="/img/Spotify_Logo_RGB_White.png" id="logo-spotify" />
        </a>
        <div>
          <div className="d-flex align-items-center justify-content-start section-selected-style">
            <a href>
              <i className="bi bi-house-door-fill icons-color-size" />
            </a>
            <a href="#">
              <p className="section-side">Home</p>
            </a>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-start section-selected-style-list">
            <a href>
              <i className="bi bi-search icons-color-size" />
            </a>
            <a href="#">
              <p className="section-side">Search</p>
            </a>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-start section-selected-style-list">
            <a href>
              <i className="bi bi-music-note-list icons-color-size" />
            </a>
            <a href="#">
              <p className="section-side">Your Library</p>
            </a>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-start section-selected-style-list-bottom">
            <a href>
              <i className="bi bi-plus-square-fill icons-color-size" />
            </a>
            <a href="#">
              <p className="section-side">Create Playlist</p>
            </a>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-start section-selected-style-list-lower">
            <a href>
              <i className="bi bi-heart-fill icons-color-size" />
            </a>
            <a href="#">
              <p className="section-side">Liked Songs</p>
            </a>
          </div>
        </div>
        <hr className="hr-styled" />
        <div></div>
        <ul id="scrollable-section">
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
        </ul>
        <div className="d-flex align-items-baseline">
          <a href>
            <i
              className="bi bi-download icons-color-size"
              style={{ marginLeft: 30 }}
            />
          </a>
          <a href>
            <p className="text-download" style={{ marginLeft: 20 }}>
              Install App
            </p>
          </a>
        </div>
      </div>
    </>
  );
};
export default MySideBar;
