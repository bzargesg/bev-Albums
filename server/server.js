const express = require('express');
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
app.get('/data/albumsbyartist/', (req, res) => {
  // route to db and get album array by an artist id albums with Album tag
  res.end();
}); //all albums
app.get('/data/albumswithartist/', (req, res) => {
  //route to db and get album array with 'Includes' by an artist id return empty array if nothing
  res.end();
}); //Includes tag
app.get('/data/epswithartist/', (req, res) => {
  //route to db and get album array with 'EP' by an artist id
  res.end();
}); //EP tag
app.get('/data/compilationswithartist/', (req, res) => {
  //route to db and get album array with 'Compilation' by an artist id
  res.end();
}); //compilation tag

app.listen(_PORT, err => {
  if (err) {
    console.error('failed to open server');
  } else {
    console.log(`Listening on ${_PORT}`);
  }
});
