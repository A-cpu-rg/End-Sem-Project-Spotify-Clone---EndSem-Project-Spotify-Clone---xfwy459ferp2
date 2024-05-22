import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Content.css";
import Header from "./Header";
import { FaPlayCircle } from "react-icons/fa";



const Content = ({ token }) => {
  const router = useNavigate();

  useEffect(() => {
    fetchVideos1();
    fetchVideos2();
    fetchVideos3();
    fetchVideos4();
    fetchVideos5();
    fetchVideos6();
    fetchVideos7();
    fetchVideos8();
  }, []);

  const fetchData = async (url, setter) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          projectID: "48hhftpw7q7z",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setter(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchVideos1 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs",
      setTrendingSongs
    );
  const fetchVideos2 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top%2020%20of%20this%20week",
      setWeek20
    );
  const fetchVideos3 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top%2050%20of%20this%20month",
      setMonth50
    );
  const fetchVideos4 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen%20melodies",
      setEvergreen
    );
  const fetchVideos5 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?mood=happy",
      setHappy
    );
  const fetchVideos6 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic",
      setRomantic
    );
  const fetchVideos7 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?mood=excited",
      setExcited
    );
  const fetchVideos8 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?mood=sad",
      setSad
    );

  const [trending, setTrendingSongs] = useState([]);
  const [week20, setWeek20] = useState([]);
  const [month50, setMonth50] = useState([]);
  const [evergreen, setEvergreen] = useState([]);
  const [happy, setHappy] = useState([]);
  const [romantic, setRomantic] = useState([]);
  const [excited, setExcited] = useState([]);
  const [sad, setSad] = useState([]);

  return (
    <>
    <Header/>
    <div className="box-container">
    <h1 className="section-title">Trending Songs</h1>
      <div className="trending">


        <div className="songs">
          {trending.map((item) => (
            <div
              className="song-item"
              key={item._id}
              onClick={() => router(`/song/${item._id}`)}
              style={{backgroundColor:"black"}}
            >
              <div className="item-container" style={{backgroundColor:"black"}}>
                {item.thumbnail ? (
                    <div style={{color:"white",position:"relative"}}>
                  <img src={item.thumbnail} alt={`${item.name} thumbnail`} />
                  <i style={{position:"absolute",right:"0px" , bottom:"13px",backgroundColor:"transparent"}}><FaPlayCircle size={35} /></i>
                  
                  </div>
                ) : (
                  <p>No thumbnail available</p>
                )}

                <h2 className="item-title" style={{color:"grey",backgroundColor:"black"}}>{item.title}</h2>
                <div className="item-artists" style={{backgroundColor:"black"}}>
                  {item.artist.map((artist, index) => (
                    <span key={index} className="item-artist" style={{color:"grey",backgroundColor:"black"}}>
                      {artist.name},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="section-title">Top 20 Of this Week</h1>
      <div className="trending">

        <div className="songs">
          {week20.map((item) => (
            <div
              className="song-item"
              key={item._id}
              onClick={() => router(`/song/${item._id}`)}
            >
              <div className="item-container" style={{backgroundColor:"black"}}>
                {item.thumbnail ? (
                    <div style={{color:"white",position:"relative"}}>
                  <img src={item.thumbnail} alt={`${item.name} thumbnail`} />
                  <i style={{position:"absolute",right:"0px" , bottom:"13px",backgroundColor:"transparent"}}><FaPlayCircle size={35} /></i>
                  </div>
                ) : (
                  <p>No thumbnail available</p>
                )}
                <h2 className="item-title" style={{color:"grey",backgroundColor:"black"}}>{item.title}</h2>
                <div className="item-artists" style={{backgroundColor:"black"}}>
                  {item.artist.map((artist, index) => (
                    <span key={index} className="item-artist" style={{color:"grey",backgroundColor:"black"}}>
                      {artist.name},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="section-title">Top 50 Of this Month</h1>
      <div className="trending">


        <div className="songs">
          {month50.map((item) => (
            <div
              className="song-item"
              key={item._id}
              onClick={() => router(`/song/${item._id}`)}
            >
              <div className="item-container" style={{backgroundColor:"black"}}>
                {item.thumbnail ? (
                    <div style={{color:"white",position:"relative"}}>
                  <img src={item.thumbnail} alt={`${item.name} thumbnail`} />
                  <i style={{position:"absolute",right:"0px" , bottom:"13px",backgroundColor:"transparent"}}><FaPlayCircle size={35} /></i>
                  </div>
                ) : (
                  <p>No thumbnail available</p>
                )}
                <h2 className="item-title" style={{color:"grey",backgroundColor:"black"}}>{item.title}</h2>
                <div className="item-artists" style={{backgroundColor:"black"}}>
                  {item.artist.map((artist, index) => (
                    <span key={index} className="item-artist" style={{color:"grey",backgroundColor:"black"}}>
                      {artist.name},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="section-title">Evergreen Songs</h1>
      <div className="trending">


        <div className="songs">
          {evergreen.map((item) => (
            <div
              className="song-item"
              key={item._id}
              onClick={() => router(`/song/${item._id}`)}
            >
              <div className="item-container" style={{backgroundColor:"black"}}>
                {item.thumbnail ? (
                     <div style={{color:"white",position:"relative"}}>
                  <img src={item.thumbnail} alt={`${item.name} thumbnail`} />
                  <i style={{position:"absolute",right:"0px" , bottom:"13px",backgroundColor:"transparent"}}><FaPlayCircle size={35} /></i>
                  </div>
                ) : (
                  <p>No thumbnail available</p>
                )}
                <h2 className="item-title" style={{color:"grey",backgroundColor:"black"}}>{item.title}</h2>
                <div className="item-artists" style={{backgroundColor:"black"}}>
                  {item.artist.map((artist, index) => (
                    <span key={index} className="item-artist" style={{color:"grey",backgroundColor:"black"}}>
                      {artist.name},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="section-title">Happy Songs</h1>
      <div className="trending">


        <div className="songs">
          {happy.map((item) => (
            <div
              className="song-item"
              key={item._id}
              onClick={() => router(`/song/${item._id}`)}
            >
              <div className="item-container" style={{backgroundColor:"black"}}>
                {item.thumbnail ? (
                    <div style={{color:"white",position:"relative"}}>
                  <img src={item.thumbnail} alt={`${item.name} thumbnail`} />
                  <i style={{position:"absolute",right:"0px" , bottom:"13px",backgroundColor:"transparent"}}><FaPlayCircle size={35} /></i>
                  </div>
                ) : (
                  <p>No thumbnail available</p>
                )}
                <h2 className="item-title" style={{color:"grey",backgroundColor:"black"}}>{item.title}</h2>
                <div className="item-artists" style={{backgroundColor:"black"}}>
                  {item.artist.map((artist, index) => (
                    <span key={index} className="item-artist" style={{color:"grey",backgroundColor:"black"}}>
                      {artist.name},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="section-title">Romantic Songs</h1>
      <div className="trending">


        <div className="songs">
          {romantic.map((item) => (
            <div
              className="song-item"
              key={item._id}
              onClick={() => router(`/song/${item._id}`)}
            >
              <div className="item-container" style={{backgroundColor:"black"}}>
                {item.thumbnail ? (
                    <div style={{color:"white",position:"relative"}}>
                  <img src={item.thumbnail} alt={`${item.name} thumbnail`} />
                  <i style={{position:"absolute",right:"0px" , bottom:"13px",backgroundColor:"transparent"}}><FaPlayCircle size={35} /></i>
                  </div>
                ) : (
                  <p>No thumbnail available</p>
                )}
                <h2 className="item-title" style={{color:"grey",backgroundColor:"black"}}>{item.title}</h2>
                <div className="item-artists" style={{backgroundColor:"black"}}>
                  {item.artist.map((artist, index) => (
                    <span key={index} className="item-artist" style={{color:"grey",backgroundColor:"black"}}>
                      {artist.name},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="section-title">Excited Songs</h1>
      <div className="trending">


        <div className="songs">
          {excited.map((item) => (
            <div
              className="song-item"
              key={item._id}
              onClick={() => router(`/song/${item._id}`)}
            >
              <div className="item-container" style={{backgroundColor:"black"}}>
                {item.thumbnail ? (
                    <div style={{color:"white",position:"relative"}}>
                  <img src={item.thumbnail} alt={`${item.name} thumbnail`} />
                  <i style={{position:"absolute",right:"0px" , bottom:"13px",backgroundColor:"transparent"}}><FaPlayCircle size={35} /></i>
                  </div>
                ) : (
                  <p>No thumbnail available</p>
                )}
                <h2 className="item-title" style={{color:"grey",backgroundColor:"black"}}>{item.title}</h2>
                <div className="item-artists" style={{backgroundColor:"black"}}>
                  {item.artist.map((artist, index) => (
                    <span key={index} className="item-artist" style={{color:"grey",backgroundColor:"black"}}>
                      {artist.name},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="section-title">Sad Songs</h1>
      <div className="trending">


        <div className="songs">
          {sad.map((item) => (
            <div
              className="song-item"
              key={item._id}
              onClick={() => router(`/song/${item._id}`)}
            >
              <div className="item-container" style={{backgroundColor:"black"}}>
                {item.thumbnail ? (
                    <div style={{color:"white",position:"relative"}}>
                  <img src={item.thumbnail} alt={`${item.name} thumbnail`} />
                  <i style={{position:"absolute",right:"0px" , bottom:"13px",backgroundColor:"transparent"}}><FaPlayCircle size={35} /></i>
                  </div>
                ) : (
                  <p>No thumbnail available</p>
                )}
                <h2 className="item-title" style={{color:"grey",backgroundColor:"black"}}>{item.title}</h2>
                <div className="item-artists" style={{backgroundColor:"black"}}>
                  {item.artist.map((artist, index) => (
                    <span key={index} className="item-artist" style={{color:"grey",backgroundColor:"black"}}>
                      {artist.name},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    </>
  );
};

export default Content;
