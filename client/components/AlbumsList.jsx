import React from 'react';
import ReactDOM from 'react-dom';
import Album from './Album.jsx';
class AlbumsList extends React.Component {
  constructor() {
    super();
    var artistName = 'The Living Ray-Bans';
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
    fetch(`http://localhost:3242/data/albumsbyartist/${artistName}`, options)
      .then(data => {
        // console.log(data);
        return data.json();
      })
      .then(res => {
        this.setState({ albums: res });
      })
      .then(
        //get singles and EPs /data/epswithartist/artistname
        fetch(`http://localhost:3242/data/epswithartist/${artistName}`, options)
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
        fetch(`http://localhost:3242/data/compilationswithartist/${artistName}`, options)
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
        fetch(`http://localhost:3242/data/albumswithartist/${artistName}`, options)
          .then(data => {
            // console.log(data);
            return data.json();
          })
          .then(res => {
            this.setState({ appearsOn: res });
          }),
      );
  }

  render() {
    return (
      <Album
        picURL="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=280&h=280&fit=crop&ixid=eyJhcHBfaWQiOjF9"
        name="Love Transparent Voices"
      />
    );
  }
}
// export default AlbumsList;
ReactDOM.render(<AlbumsList />, document.getElementById('app'));
