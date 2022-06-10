import React from "react";
import { PropTypes } from "prop-types";

const YoutubeVideoList = ({ videous }) => {
  const youTubeQuery = "https://www.youtube.com/results?search_query=";
  const listItems = videous.map((video) => (
    <div key={video.etag} className="video-search--video-container">
      <p>Channell: {video.snippet.channelTitle}</p>
      <p>Video: {video.snippet.title}</p>
      <p>Description: {video.snippet.description}</p>
      <img src={video.snippet.thumbnails.default.url} alt="img/vidoe-preview" />
      <a
      className="video-search--youtube-link"
        href={youTubeQuery + video.id.videoId}
        target="_blank"
        rel="noreferrer"
      >
        play video on YouTube
      </a>
    </div>
  ));
  return listItems;
};

PropTypes.YoutubeVideoList = {
  videous: PropTypes.arr,
};

export default YoutubeVideoList;

{
  /* Title
Description
Rate
Preview (as a picture)
etc... */
}
