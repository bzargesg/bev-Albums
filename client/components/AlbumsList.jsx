import React from 'react';
import ReactDOM from 'react-dom';
import Album from './Album.jsx';
// import fetch from 'node-fetch';
class AlbumsList extends React.Component {
  constructor(props) {
    super(props);
    this.artistName = this.props.artistName ? this.props.artistName : 'The Ascending Critics';

    this.state = {
      albums: [],
      eps: [],
      compilations: [],
      appearsOn: [],
      ready: false,
    };
    var fetches = this.fetchPromiseGenerator();

    this.setStateQuery(fetches);
  }
  setStateQuery(fetches) {
    Promise.all(fetches)
      .then(res => {
        let resProm = [];
        res.map(resElement => {
          resProm.push(resElement.json());
        });
        return resProm;
      })
      .then(val => {
        Promise.all(val).then(AlbumsByType => {
          this.setState({
            albums: AlbumsByType[0],
            eps: AlbumsByType[1],
            compilations: AlbumsByType[2],
            appearsOn: AlbumsByType[3],
            ready: true,
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
    var albumListTypes = [
      'albumsbyartist',
      'epswithartist',
      'compilationswithartist',
      'albumswithartist',
    ];
    albumListTypes.map(request => {
      fetches.push(this.fetchAlbumType(request));
    });
    return fetches;
  }
  mapAlbums(type) {
    let element = [];
    type.map(album =>
      element.push(<Album picURL={album.image} name={album.name} artistName={this.artistName} />),
    );
    return element;
  }
  render() {
    return (
      <div className="allAlbums" data-test="allAlbums">
        <h3>Albums</h3>
        <div className="albums albumType" data-test="albumsComponent">
          {this.mapAlbums(this.state.albums)}
        </div>
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
      </div>
    );
  }
}
export default AlbumsList;
