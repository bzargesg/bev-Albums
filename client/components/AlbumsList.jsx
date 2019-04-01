import React from 'react';
import ReactDOM from 'react-dom';
import Album from './Album.jsx';
class AlbumsList extends React.Component {
  constructor() {
    super();
    //get albums /data/albumsbyartist/artistname
    fetch();
    //get singles and EPs /data/epswithartist/artistname
    fetch();
    //get compilations /data/compilationswithartist/artistname
    fetch();
    //appears on /data/albumswithartist/artistname
    fetcj();
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
