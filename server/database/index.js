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

module.exports = { Album, Artist, db };
