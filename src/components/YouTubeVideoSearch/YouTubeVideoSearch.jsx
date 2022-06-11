import React, { useEffect, useState } from "react";

import YoutubeVideoList from "./YoutubeVideoList/YoutubeVideoList";

const YouTubeVideoSearch = () => {
  const [userInput, setUserInput] = useState("");
  const [videousArr, setVideousArr] = useState([]);

  const fetchVideo = () => {
    const urlApi =
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&videoDefinition=any&key=AIzaSyDRy70gap8WqiZls97MLWSj2iEBAl88VII";
    const userSearch = `&q=${userInput}`;

    if (userInput.length > 0) {
      fetch(urlApi + userSearch)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.items);
          setVideousArr(data.items);
        });
    }
  };

  const inputHandler = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <div className="video-search-container">
      <div className="video-search-input-container">
        <input
          type="text"
          className="video-search-input--input"
          placeholder="what are searching for"
          onChange={(e) => inputHandler(e)}
        />

        <button
        className="video-search-input--button"
        onClick={() => fetchVideo()}>search</button>
      </div>
      <YoutubeVideoList videous={videousArr} />
    </div>
  );
};

export default YouTubeVideoSearch;
