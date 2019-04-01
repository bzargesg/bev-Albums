// import './Album.scss';

const React = require('react');

const AlbumList = './AlbumsList.jsx';

const Album = props => {
  return (
    <div>
      <div>
        <img src={props.picURL} alt="stuff" />
      </div>
      <div className={props.name}>{props.name}</div>
    </div>
  );
  // return (
  //   <span className={props.albumName}>
  //     <img src={props.albumArt} alt={props.albumName} />
  //     <div>{props.albumName}</div>
  //     <div>{props.artistName}</div>
  //   </span>
  // );
};
export default Album;
// module.exports = Album;
