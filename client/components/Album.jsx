const React = require('react');
const AlbumList = './AlbumsList.jsx';
import './Album.scss';
const Album = props => {
  return (
    <div className="albumContainer" data-test="containerComponent">
      <div className="picContainer">
        <img className="albumArt" src={props.picURL} alt="stuff" data-test="picComponent" />
        <img
          src="https://i2.wp.com/orangecountybookkeepers.com/wp-content/uploads/2016/02/play-button-overlay.png"
          className="playbutton"
        />
      </div>
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
