import React from 'react';
var album = () => {
  return (
    <span className={props.albumName}>
      <img src={props.albumArt} alt={props.albumName} />
      <div>{props.albumName}</div>
      <div>{props.artistName}</div>
    </span>
  );
};
export default album;
