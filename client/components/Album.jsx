const React = require('react');
const AlbumList = './AlbumsList.jsx';
import './Album.scss';
const Album = props => {
  return (
    <div className="albumContainer" data-test="containerComponent">
      <img src={props.picURL} alt="stuff" data-test="picComponent" />
      <div className="albumText" data-test="albumTextComponent">
        {props.name}
      </div>
      <div className="albumText artistNameAlbum" data-test="artistNameComponent">
        {props.artistName}
      </div>
    </div>
  );
};
export default Album;
