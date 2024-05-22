import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Songs.css";

const Songs = ({ token }) => {
  const [songs, setSongs] = useState([]);
  const router = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/musicx/song/${id}`,
          {
            headers: {
              accept: "application/json",
              projectID: "48hhftpw7q7z",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          console.log("go forward");
          const data = await response.json();
          console.log(data);
          setSongs(data);
        } else {
          toast.error("Login First");
          setTimeout(() => {
            router("/login");
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVideo();
  }, [id, router, token]);

  return (
    <div className="song-container">
      {songs.length === 0 ? (
        <div className="loading-message">
          <h1>Loading . . .</h1>
        </div>
      ) : (
        <div className="song-content">
          <div className="song-thumbnail">
            <img src={songs.data.thumbnail} alt={songs.data.thumbnail} />
          </div>
          <h1 className="song-title">{songs.data.title}</h1>
          <div className="song-featured">
            <i className="fa-solid fa-star" /> {songs.data.featured}
          </div>
          <div className="song-artist">
            {songs.data.artist.map((data) => (
              <span key={data.id}>{data.name}, </span>
            ))}
          </div>
          <audio
            src={songs.data.audio_url}
            controls
            className="song-audio"
          ></audio>
        </div>
      )}
    </div>
  );
};

export default Songs;
