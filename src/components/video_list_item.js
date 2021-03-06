import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //old syntax with (props) new on ES6 only ({video})
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  console.log(video.snippet.title);
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img media-object  src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
    );
}

export default VideoListItem;
