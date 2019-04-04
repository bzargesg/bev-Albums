import React from 'react';
import ReactDOM from 'react-dom';
import Album from './Album.jsx';
import fetch from 'node-fetch';
class AlbumsList extends React.Component {
  constructor(props) {
    super(props);
    // this.artistName = this.props.artistName ? this.props.artistName : 'The Ascending Critics';
    this.artistName = 'The Rainbow Equinox';
    this.albumListTypes = [
      'albumsbyartist',
      'epswithartist',
      'compilationswithartist',
      'albumswithartist',
    ];
    this.state = {
      albums: [],
      eps: [],
      compilations: [],
      appearsOn: [],
      showMoreAlb: false,
      showMoreEPs: false,
      showMoreComp: false,
      showMoreAppears: false,
    };
    this.showmore = (
      <button className="button">
        Show More
        <img className="buttonArrow" src="images/downArrow.png" />
      </button>
    );
    var fetches = this.fetchPromiseGenerator();

    this.setStateQuery(fetches);
  }
  setStateQuery(fetches) {
    Promise.all(fetches)
      .then(res => {
        let resProm = [];
        if (res[0] !== undefined) {
          res.map(resElement => {
            resProm.push(resElement.json());
          });
          return resProm;
        }
        return res;
      })
      .then(val => {
        Promise.all(val).then(AlbumsByType => {
          this.setState({
            albums: AlbumsByType[0],
            eps: AlbumsByType[1],
            compilations: AlbumsByType[2],
            appearsOn: AlbumsByType[3],
          });
        });
      });
  }
  fetchAlbumType(type) {
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(`http://localhost:3242/data/${type}/${this.artistName}`, options);
  }
  fetchPromiseGenerator() {
    var fetches = [];

    this.albumListTypes.map(request => {
      fetches.push(this.fetchAlbumType(request));
    });
    return fetches;
  }
  mapAlbums(type, short = true) {
    let element = [];
    let typeCl = [];
    typeCl = short ? type.slice(0, 10) : type.slice(0);

    if (type !== undefined && type.length > 0) {
      typeCl.map(album =>
        element.push(<Album picURL={album.image} name={album.name} artistName={this.artistName} />),
      );
      return element;
    }
  }
  returnStateType(str) {
    if (str === 'albumsbyartist') {
      return [this.state.albums, 'Albums'];
    } else if (str === 'epswithartist') {
      return [this.state.eps, 'Singles and EPs'];
    } else if (str === 'compilationswithartist') {
      return [this.state.compilations, 'Compilations'];
    } else if (str === 'albumswithartist') {
      return [this.state.appearsOn, 'Appears On'];
    }
  }
  render() {
    return (
      <div className="allAlbums" data-test="allAlbums">
        {this.albumListTypes.map(albumType => {
          let [albumVals, headerName] = this.returnStateType(albumType);
          return (
            <div>
              <h3>{headerName}</h3>
              <div className={albumType + ' albumType'} data-test={albumType}>
                {this.mapAlbums(albumVals)}
              </div>
              {albumVals.length > 10 ? this.showmore : null}
            </div>
          );
        })}
      </div>
    );
  }
}
export default AlbumsList;
{
  /* <div className="allAlbums" data-test="allAlbums">
  <h3>Albums</h3>
  <div className="albums albumType" data-test="albumsComponent">
    {this.mapAlbums(this.state.albums)}
  </div>
  {this.state.albums.length > 10 ? this.showmore : null}
  <h3>Singles and EPs</h3>
  <div className="eps albumType" data-test="epsComponent">
    {this.mapAlbums(this.state.eps)}
  </div>
  <h3>Compilations</h3>
  <div className="compilations albumType" data-test="compilationsComponent">
    {this.mapAlbums(this.state.compilations)}
  </div>
  <h3>Appears On</h3>
  <div className="appearsOn albumType" data-test="appearsOnComponent">
    {this.mapAlbums(this.state.appearsOn)}
  </div>
</div>; */
}
