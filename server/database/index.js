/* eslint-disable no-console */
const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/spoticlone');
const db = mongoose.connection;
db.on('error', () => console.error('failed to load DB'));
db.once('open', () => console.log('db connected'));
const artistSchema = new Schema({
  name: String,
  albums: Array,
});
const albumSchema = new Schema({
  name: String,
  image: String,
  type: String,
});
const Album = mongoose.model('Album', albumSchema);
const Artist = mongoose.model('Artist', artistSchema);
class DatabaseQueryHandler {
  static getAllArtistData(artistName, cb) {
    Artist.find({ name: artistName }, (err, data) => {
      if (err) {
        console.log('failed to get artist data');
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  }

  static getArtistAlbums(artistName, cb, albumWord = null) {
    let artistData = [];
    let artistAlbums = [];
    const getByIDs = [];

    DatabaseQueryHandler.getAllArtistData(artistName, (err, data) => {
      if (err) {
        console.log('failed to get album');
      } else {
        artistData = data;
        artistAlbums = artistData[0].albums;
      }

      artistAlbums.map(id => getByIDs.push(Album.findById(id).exec()));

      Promise.all(getByIDs).then((albumnames) => {
        const filteredAlbums = [];
        // eslint-disable-next-line array-callback-return
        albumnames.map((element) => {
          if (albumWord) {
            if (element.type === albumWord) {
              filteredAlbums.push(element);
            }
          } else {
            filteredAlbums.push(element);
          }
        });
        // console.log('filteredalbums: ', filteredAlbums);
        cb(null, filteredAlbums);
      });
    });
  }
}

module.exports = {
  Album,
  Artist,
  db,
  DatabaseQueryHandler,
};
