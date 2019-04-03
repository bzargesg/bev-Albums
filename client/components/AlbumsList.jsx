import React from 'react';
import ReactDOM from 'react-dom';
import Album from './Album.jsx';
import fetch from 'node-fetch';
class AlbumsList extends React.Component {
  constructor(props) {
    super(props);
    this.artistName = 'The Ascending Critics';
   
    this.state = {
      albums: [],
      eps: [],
      compilations: [],
      appearsOn: [],
      ready: false
    };
    var fetches = this.fetchPromiseGenerator();

    this.setStateQuery(fetches)

    // //get albums /data/albumsbyartist/artistname
    // fetch(`http://localhost:3242/data/albumsbyartist/${this.artistName}`, options)
    //   .then(data => {
    //     // console.log(data);
    //     return data.json();
    //   })
    //   .then(res => {
    //     this.setState({ albums: res });
    //   });

    // //get singles and EPs /data/epswithartist/artistname
    // fetch(`http://localhost:3242/data/epswithartist/${this.artistName}`, options)
    //   .then(data => {
    //     // console.log(data);
    //     return data.json();
    //   })
    //   .then(res => {
    //     this.setState({ eps: res });
    //   });

    // //get compilations /data/compilationswithartist/artistname
    // fetch(`http://localhost:3242/data/compilationswithartist/${this.artistName}`, options)
    //   .then(data => {
    //     // console.log(data);
    //     /* istanbul ignore next */
    //     return data.json();
    //   })
    //   .then(res => {
    //     this.setState({ compilations: res });
    //   });

    // //appears on /data/albumswithartist/artistname
    // fetch(`http://localhost:3242/data/albumswithartist/${this.artistName}`, options)
    //   .then(data => {
    //     // console.log(data);
    //     return data.json();
    //   })
    //   .then(res => {
    //     this.setState({ appearsOn: res });
    //   });
  }
  setStateQuery(fetches){
    Promise.all(fetches)
    .then(res =>{
      let resProm = [];
      res.map(resElement =>{
        resProm.push(resElement.json());
      })
      return resProm;
    }).then(val =>{
      Promise.all(val)
      .then(AlbumsByType =>{
        this.setState({
          albums: AlbumsByType[0],
          eps: AlbumsByType[1],
          compilations: AlbumsByType[2],
          appearsOn: AlbumsByType[3],
          ready: true
        })
      })
    })
  }
  fetchAlbumType(type){
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(`http://localhost:3242/data/${type}/${this.artistName}`, options)
  }
  fetchPromiseGenerator(){
    var fetches = []
    var albumListTypes= ['albumsbyartist','epswithartist','compilationswithartist','albumswithartist']
    albumListTypes.map(request =>{
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
