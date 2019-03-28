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
        console.log('failed to get artist data');
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  }
  getArtistAlbums(artistName, cb, albumWord = null) {
    let artistData = [];
    let artistAlbums = [];
    var getByIDs = [];

    this.getAllArtistData(artistName, (err, data) => {
      if (err) {
        console.log('failed to get album');
      } else {
        artistData = data;
        artistAlbums = artistData[0].albums;
      }

      artistAlbums.map(id => {
        getByIDs.push(Album.findById(id).exec());
      });
      Promise.all(getByIDs).then(data => {
        var filteredAlbums = [];
        data.map(element => {
          if (albumWord) {
            if (element.type === albumWord) {
              filteredAlbums.push(element);
            }
          } else {
            filteredAlbums.push(element);
          }
        });
        console.log('filteredalbums: ', filteredAlbums);
        cb(null, filteredAlbums);
      });
    });
  }
}
var dbquery = new DatabaseQueryHandler();
// // dbquery.getAllArtistData('The Screeching Zombies', (stuff, data) =>
// //   console.log(data)
// // );
// dbquery.getArtistAlbums('The Screeching Zombies', (err, data) => {
//   console.log(data);
// });

module.exports = { Album, Artist, db, dbquery };
