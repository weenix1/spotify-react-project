import ArtistRecentPlayedMusic from "./ArtistRecentPlayedMusic";

const ArtistPlayList = () => {
  return (
    <div className="main-content-album">
      <div>
        <div className="buttons-row">
          <div className="play-button">
            <div className="play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>
            </div>
          </div>
          <button id="follow-button">FOLLOWING</button>
          <a
            className="btn nav-btn "
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ color: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots tr-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <div className="padding-content">
          <div className="d-flex justify-content-end">
            <h1 className="title-section" style={{ width: 1035 }}>
              Popular
            </h1>
            <h1
              className="title-section d-none d-md-none d-lg-none d-xl-block"
              style={{ width: 487 }}
            >
              Artist Pick
            </h1>
          </div>
          <div className="row d-flex">
            <div className="col-12 col-md-12 col-lg-12 col-xl-7">
              <div className="col-12 d-flex flex-column mb-0 background-list">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="d-flex">
                      <div className="d-flex my-auto m-0">
                        <h1 className="views">1</h1>
                      </div>
                      <img className="artist-pic" src="/img/juice 2.jpg" />
                      <div className="d-flex flex-column">
                        <p className="line-breaker">some random text to show</p>
                        <span className="explicit-content">E</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="views">642,364,286</p>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-row">
                      <img className="unliked" src="/img/heart-64.svg" />
                      <p className="views">2:30</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex flex-column mb-0 background-list">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="d-flex">
                      <div className="d-flex my-auto m-0">
                        <h1 className="views">2</h1>
                      </div>
                      <img className="artist-pic" src="/img/juice 2.jpg" />
                      <div className="d-flex flex-column">
                        <p className="line-breaker">some random text to show</p>
                        <span className="explicit-content">E</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="views">642,364,286</p>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-row">
                      <img className="unliked" src="/img/heart-64.svg" />
                      <p className="views">2:30</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex flex-column mb-0 background-list">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="d-flex">
                      <div className="d-flex my-auto m-0">
                        <h1 className="views">3</h1>
                      </div>
                      <img className="artist-pic" src="/img/juice 2.jpg" />
                      <div className="d-flex flex-column">
                        <p className="line-breaker">some random text to show</p>
                        <span className="explicit-content">E</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="views">642,364,286</p>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-row">
                      <img className="unliked" src="/img/heart-64.svg" />
                      <p className="views">2:30</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex flex-column mb-0 background-list">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="d-flex">
                      <div className="d-flex my-auto m-0">
                        <h1 className="views">4</h1>
                      </div>
                      <img className="artist-pic" src="/img/juice 2.jpg" />
                      <div className="d-flex flex-column">
                        <p className="line-breaker">some random text to show</p>
                        <span className="explicit-content">E</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="views">642,364,286</p>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-row">
                      <img className="unliked" src="/img/heart-64.svg" />
                      <p className="views">2:30</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex flex-column mb-0 background-list">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="d-flex">
                      <div className="d-flex my-auto m-0">
                        <h1 className="views">5</h1>
                      </div>
                      <img className="artist-pic" src="/img/juice 2.jpg" />
                      <div className="d-flex flex-column">
                        <p className="line-breaker">some random text to show</p>
                        <span className="explicit-content">E</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="views">642,364,286</p>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-row">
                      <img className="unliked" src="/img/heart-64.svg" />
                      <p className="views">2:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-md-none d-lg-none d-xl-block offset-1 col-4 ">
              <div className="d-flex">
                <div>
                  <img className="artist-pick" src="/img/trippie red.jpg" />
                </div>
                <div className="d-flex flex-column">
                  <div>
                    <img className="artist-small-pic" src="/img/juice 2.jpg" />
                    <span className="artist-name">Posted by an Artist</span>
                  </div>
                  <div>
                    <a className="name-tag" href="#">
                      NAME OF THE ARTIST
                    </a>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: "normal",
                      lineHeight: 16,
                      textTransform: "none",
                      marginTop: 5,
                    }}
                  >
                    Playlist
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href>
            <h1 className="see-more" style={{ marginBottom: 20 }}>
              SEE MORE
            </h1>
          </a>
          <h1
            className="title-section d-xl-none"
            style={{ width: 400, paddingLeft: 15 }}
          >
            Artist Pick
          </h1>
          <div className="col-12 d-xl-none">
            <div className="d-flex">
              <div>
                <img className="artist-pick" src="/img/trippie red.jpg" />
              </div>
              <div className="d-flex flex-column">
                <div>
                  <img className="artist-small-pic" src="/img/juice 2.jpg" />
                  <span className="artist-name">Posted by an Artist</span>
                </div>
                <div>
                  <a className="name-tag" href="#">
                    NAME OF THE ARTIST
                  </a>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: "normal",
                    lineHeight: 16,
                    textTransform: "none",
                    marginTop: 5,
                  }}
                >
                  Playlist
                </div>
              </div>
            </div>
          </div>
          <ArtistRecentPlayedMusic />
        </div>
      </div>
    </div>
  );
};
export default ArtistPlayList;
