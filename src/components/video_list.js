import React from 'react';

const VideoList = (props) => {
  //array of videos
  //const videos = props.videos;
  return (
    <ul className="col-md-4 list-group">
      nb {props.videos.length}
    </ul>
    );

};

export default VideoList;
