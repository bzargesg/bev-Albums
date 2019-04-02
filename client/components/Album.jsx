const React = require('react');
import Menu from './Menu.jsx';
import './Album.scss';

class Album extends React.Component {
  constructor(props) {
    super(props);
  }
  // handleRightClick(e) {
  //   e.preventDefault();
  //   console.log('click');
  //   if (e.nativeEvent.which === 3) {
  //     console.log('right click');
  //     Menu();
  //   }
  // }
  render() {
    return (
      <div
        className="albumContainer"
        data-test="containerComponent"
        // onClick={this.handleRightClick}
      >
        <div className="picContainer">
          <img className="albumArt" src={this.props.picURL} alt="stuff" data-test="picComponent" />
          <img
            src="https://i2.wp.com/orangecountybookkeepers.com/wp-content/uploads/2016/02/play-button-overlay.png"
            className="playbutton"
          />
        </div>
        <div className="albumText" data-test="albumTextComponent">
          {this.props.name}
        </div>
        <div className="albumText artistNameAlbum" data-test="artistNameComponent">
          {this.props.artistName}
        </div>
      </div>
    );
  }
}

// const Album = props => {
//   return (
//     <div className="albumContainer" data-test="containerComponent">
//       <div className="picContainer">
//         <img className="albumArt" src={props.picURL} alt="stuff" data-test="picComponent" />
//         <img
//           src="https://i2.wp.com/orangecountybookkeepers.com/wp-content/uploads/2016/02/play-button-overlay.png"
//           className="playbutton"
//         />
//       </div>
//       <div className="albumText" data-test="albumTextComponent">
//         {props.name}
//       </div>
//       <div className="albumText artistNameAlbum" data-test="artistNameComponent">
//         {props.artistName}
//       </div>
//     </div>
//   );
// };
export default Album;
