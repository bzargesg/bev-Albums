const express = require('express');
const { Album, Artist, db, dbquery } = require('./database/index.js');
const app = express();
app.use(express.json());
const _PORT = 3242;

/* ROUTES:
/data/artist
/data/songsbyartist
/data/albumsbyartist
/data/albumswithartist
/data/epswithartist
/data/compilationswithartist
*/
//albumtypes: Compilation, EP Album Includes
// app.get('/data/artist', (req, res) => {}); //all info
// app.get('/data/songsbyartist', (req, res) => {}); //dont do
app.get('/data/albumsbyartist/:artistId', (req, res) => {
  // route to db and get album array by an artist id albums with Album tag
  console.log(typeof req.params.artistId);

  dbquery.getArtistAlbums(req.params.artistId, (err, data) => {
    if (err) {
      console.log();
      res.end();
    } else {
      res.json(data);
    }
  });

  // res.end();
}); //all albums
var callArtist = (artistName, albumWord = '') => {};
app.get('/data/albumswithartist/:artistId', (req, res) => {
  //route to db and get album array with 'Includes' by an artist id return empty array if nothing
  console.log(typeof req.params.artistId);

  dbquery.getArtistAlbums(
    req.params.artistId,
    (err, data) => {
      if (err) {
        console.log();
        res.end();
      } else {
        res.json(data);
      }
    },
    'Includes'
  );
}); //Includes tag
app.get('/data/epswithartist/:artistId', (req, res) => {
  //route to db and get album array with 'EP' by an artist id
  dbquery.getArtistAlbums(
    req.params.artistId,
    (err, data) => {
      if (err) {
        console.log();
        res.end();
      } else {
        res.json(data);
      }
    },
    'EP'
  );
}); //EP tag
app.get('/data/compilationswithartist/:artistId', (req, res) => {
  //route to db and get album array with 'Compilation' by an artist id
  dbquery.getArtistAlbums(
    req.params.artistId,
    (err, data) => {
      if (err) {
        console.log();
        res.end();
      } else {
        res.json(data);
      }
    },
    'Compilation'
  );
}); //compilation tag

app.listen(_PORT, err => {
  if (err) {
    console.error('failed to open server');
  } else {
    console.log(`Listening on ${_PORT}`);
  }
});
