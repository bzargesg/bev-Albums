import React from 'react';
import ReactDOM from 'react-dom';
import Album from './Album.jsx';
class AlbumsList extends React.Component {
  constructor() {
    super();
    this.artistName = 'The Ascending Critics';
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    this.state = {
      albums: [],
      eps: [],
      compilations: [],
      appearsOn: [],
    };
    //get albums /data/albumsbyartist/artistname
    fetch(`http://localhost:3242/data/albumsbyartist/${this.artistName}`, options)
      .then(data => {
        // console.log(data);
        return data.json();
      })
      .then(res => {
        this.setState({ albums: res });
      })
      .then(
        //get singles and EPs /data/epswithartist/artistname
        fetch(`http://localhost:3242/data/epswithartist/${this.artistName}`, options)
          .then(data => {
            // console.log(data);
            return data.json();
          })
          .then(res => {
            this.setState({ eps: res });
          }),
      )
      .then(
        //get compilations /data/compilationswithartist/artistname
        fetch(`http://localhost:3242/data/compilationswithartist/${this.artistName}`, options)
          .then(data => {
            // console.log(data);
            return data.json();
          })
          .then(res => {
            this.setState({ compilations: res });
          }),
      )
      .then(
        //appears on /data/albumswithartist/artistname
        fetch(`http://localhost:3242/data/albumswithartist/${this.artistName}`, options)
          .then(data => {
            // console.log(data);
            return data.json();
          })
          .then(res => {
            this.setState({ appearsOn: res });
          }),
      );
  }
  //albums
  //Singles and EPs
  //compilations
  //Appears On
  //<Album picURL={} name={}/>
  
  render() {
    return (
      <div className="allAlbums" data-test="allAlbums">
        <h3>Albums</h3>
        <div className="albums albumType" data-test="albumsComponent">
          {this.state.albums.map(album => {
            return <Album picURL={album.image} name={album.name} artistName={this.artistName} />;
          })}
        </div>
        <h3>Singles and EPs</h3>
        <div className="eps albumType" data-test="epsComponent">
          {this.state.eps.map(album => {
            return <Album picURL={album.image} name={album.name} artistName={this.artistName} />;
          })}
        </div>
        <h3>Compilations</h3>
        <div className="compilations albumType" data-test="compilationsComponent">
          {this.state.compilations.map(album => {
            return <Album picURL={album.image} name={album.name} artistName={this.artistName} />;
          })}
        </div>
        <h3>Appears On</h3>
        <div className="appearsOn albumType" data-test="appearsOnComponent">
          {this.state.appearsOn.map(album => {
            return <Album picURL={album.image} name={album.name} artistName={this.artistName} />;
          })}
        </div>
      </div>
    );
  }
}
export default AlbumsList;
