const React = require('react');
const AlbumList = './AlbumsList.jsx';
import './Album.scss';
const Album = props => {
  return (
    <div className="albumContainer">
      <img src={props.picURL} alt="stuff" />
      <div className="albumText">{props.name}</div>
      <div className="albumText artistNameAlbum">{props.artistName}</div>
    </div>
  );
};
export default Album;
