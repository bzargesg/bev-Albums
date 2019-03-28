var mongoose = require('mongoose');
const fetch = require('node-fetch');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/spoticlone');
var db = mongoose.connection;
db.on('error', () => console.error('failed to load DB'));
db.once('open', () => console.log('db connected'));
var artistSchema = new Schema({
  name: String,
  albums: Array
});
var albumSchema = new Schema({
  name: String,
  image: String,
  type: String
});
const Album = mongoose.model('Album', albumSchema);
const Artist = mongoose.model('Artist', artistSchema);
class DatabaseQueryHandler {
  constructor() {}

  getAllArtistData(artistName, cb) {
    Artist.find({ name: artistName }, (err, data) => {
      if (err) {
        console.log('failed to get artist dat');
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  }
  getArtistAlbums(artistName, cb, albumWord = '') {
    let artistData = [];
    this.getAllArtistData(artistName, (err, data) => {
      if (err) {
        console.log('failed to get album');
      } else {
        artistData = data;
      }
      let artistAlbums = [];
      // console.log('artistdata ', artistData);
      artistAlbums = artistData[0].albums;
      var getByIDs = [];
      // console.log('artistalbum ', artistAlbums);
      artistAlbums.map(id => {
        getByIDs.push(Album.findById(id).exec());
      });
      Promise.all(getByIDs).then(data => cb(null, data));
    });
  }
}
var dbquery = new DatabaseQueryHandler();
// dbquery.getAllArtistData('The Screeching Zombies', (stuff, data) =>
//   console.log(data)
// );
dbquery.getArtistAlbums('The Screeching Zombies', (err, data) => {
  console.log(data);
});

// let getArtist = (id) => {
//   // Mongo query with filter
//   // db.artists.find({_id: ObjectId("5c9d12edda084614e85c46ba")})

//   return new Promise((resolve, reject) => {
//     Artist.find({_id: id}, (err, data) => {
//       err ? reject(err) : resolve(data)
//     })
//   })
// }
// return new Promise((resolve, reject) => {
//   Artist.findById(id, 'name header_img -_id', (err, data) => {
//     err ? reject(err) : resolve(data)
//   })
// })

module.exports = { Album, Artist, db };
