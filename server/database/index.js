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

class RandomDataGenerator {
  constructor() {
    this.prefixes = [
      'Flaming',
      'Black',
      'Talking',
      'Broken',
      'Ashen',
      'Rainbow',
      'Wandering',
      'Lost',
      'Breathing',
      'Rough',
      'Rolling',
      'Thundering',
      'Hipster',
      'Punk',
      'Goth',
      'White',
      'Pale',
      'Lunar',
      'Mystic',
      'Screaming',
      'Sexy',
      'Diabolical',
      'Evil',
      'Thumping',
      'Ascending',
      'Falling',
      'Spinning',
      'Drooling',
      'Secret',
      'Mad',
      'Hot',
      'Veiled',
      'Hidden',
      'Psychic',
      'Nightly',
      'Eerie',
      'Transparent',
      'Wild',
      'Smashing',
      'Chunking',
      'Guns and',
      "Roamin' ",
      'Grummel',
      'Schwifty',
      'Stylish',
      'Creepy',
      'Nerdy',
      'Anti',
      'Panoramic',
      'McShizzle',
      'Pensive',
      'Crushing',
      "Dead Man's",
      'Lords of',
      'Burnt',
      'Wheeled',
      'Living',
      'Azure',
      'Undead',
      'Exploding',
      'Spiralling',
      'Boom-boom',
      'Serious',
      'Stoic',
      'Deep',
      'Somber',
      'Squirming',
      'Vanilla',
      'Screeching',
      'Thrashing',
      'Selective',
      'Swift',
      'Soaring',
      'Mighty'
    ];
    this.suffixes = [
      'Flames',
      'Banisters',
      'Skulls',
      'Unicorns',
      'Souls',
      'Corpses',
      'Flannel',
      'Zombies',
      'Lampshades',
      'Scientists',
      'Ghosts',
      'Dude and His Merry Gang of Band Nerds',
      'Hunters',
      'Sirens',
      'Lozenges',
      'Stones',
      'Heads',
      'Hands',
      'Cerulean',
      'Lightning',
      'Blades',
      'Gang',
      'Homeboys',
      'Critics',
      'Emos',
      'Rebels',
      'Pirates',
      'Pumpkins',
      'Roses',
      'Demons',
      'Tractors',
      'Men',
      'Gals',
      'Riders',
      'Ray-Bans',
      'Trenchcoats',
      'Creepers',
      'Gravity',
      'Diamonds',
      'Mirrors',
      'Jefes',
      'Esperantos',
      'Crimson',
      'Wrappers',
      ' José y los gauchos',
      'Heat',
      'Fever',
      'Wave',
      'Spell',
      'Spectacle',
      'Voices',
      'Group',
      'Fliers',
      'Homies',
      'Rum',
      'Wheels',
      'Brits',
      'Machines',
      'Assassination',
      'Flint',
      'Noises',
      'Perspiration',
      'Perpetrator',
      'Betrayed',
      'Wasslers',
      'Whirlpool',
      'Pistols',
      'Boulders',
      'Trinkets',
      'Rag Dolls',
      'Bazookas',
      'Popsicle',
      'Ice Cubes',
      'Banshees',
      'Frost',
      'Darkness',
      'Beat',
      'Freeze',
      'Kittens',
      'Superheroes',
      'Bagel',
      'Flaxseeds',
      'Children',
      'Love',
      'Equinox',
      'Life'
    ];
    this.types = [
      'Rock',
      'Metal',
      'Pop',
      'Rap',
      'Hip-Hop',
      'Soul',
      'Country',
      'Classical',
      'Jazz',
      'Big Band',
      'Funk',
      'Disco'
    ];
    this.albumVals();
    this.artistVals();
  }

  albumVals() {
    //name, image, type
    var names = this.generateSongNames();
    var type = this.generateAlbumType();
    var imagesList = [];

    Promise.all(this.generateAlbumPic())
      .then(val => {
        val.map(element => {
          imagesList.push(element.url);
        });
      })
      .then(() => {
        for (let i = 0; i < 100; i++) {
          let newAlbum = new Album({
            name: names[i],
            image: imagesList[i],
            type: genres[i]
          });
          newAlbum.save((err, data) => {
            if (err) {
              console.log('failed to save ', i);
            }
            console.log('saved ', i);
          });
        }
      });
  }
  generateArtistNames() {
    var bandNames = [];
    for (let i = 0; i < 100; i++) {
      var randomPre = this.prefixes[
        Math.floor(Math.random() * this.prefixes.length)
      ];
      var randomSuf = this.suffixes[
        Math.floor(Math.random() * this.suffixes.length)
      ];
      bandNames.push('The ' + randomPre + ' ' + randomSuf);
    }
    return bandNames;
  }
  generateGenreType() {
    var genres = [];
    for (let i = 0; i < 100; i++) {
      var randomGenre = this.types[
        Math.floor(Math.random() * this.types.length)
      ];
      genres.push(randomGenre);
    }
    return genres;
  }
  generateSongNames() {
    var preAndSuf = this.prefixes.concat(this.suffixes);
    var songNames = [];
    for (let i = 0; i < 100; i++) {
      var randFirst = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
      var randSecond = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
      var randThird = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
      songNames.push(`${randFirst} ${randSecond} ${randThird}`);
    }
    return songNames;
  }
  generateBio() {
    var preAndSuf = this.prefixes.concat(this.suffixes);
    var bios = [];
    for (let i = 0; i < 100; i++) {
      let randPara = '';
      for (let j = 0; j < 100; j++) {
        var randWord = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
        randPara += randWord + ' ';
      }
      bios.push(`${randPara}`);
    }
    return bios;
  }
  generateAlbumPic(cb) {
    let imagesList = [];
    let promiseArr = [];
    for (let i = 0; i < 100; i++) {
      let randomNum = Math.floor(Math.random() * 151);
      let imgURL = `https://source.unsplash.com/collection/893352/120x120/?sig=${randomNum}`;
      promiseArr.push(fetch(imgURL));
    }
    return promiseArr;
  }
  generateAlbumType() {
    var albums = ['Compilation', 'EP', 'Album', 'Includes'];
    var albumTypes = [];
    for (var i = 0; i < 100; i++) {
      let randI = Math.floor(Math.random() * albums.length);
      albumTypes.push(albums[randI]);
    }
    return albumTypes;
  }
  artistVals() {
    //name albums
    var artists = this.generateArtistNames();
    var albums = [];
    var allArtistAlbums = [];
    Album.find((err, data) => {
      data.map(entry => {
        albums.push(entry._id);
      });
    });
    var artistVal = [];
    for (let i = 0; i < 100; i++) {
      let randomAlbNum = Math.floor(Math.random() * 18) + 2;
      let albumsPerArtist = [];
      for (let j = 0; j < randomAlbNum; j++) {
        let randomAlb = Math.floor(Math.random() * albums.length);
        albumsPerArtist.push(randomAlb);
      }
      allArtistAlbums.push(albumsPerArtist);
    }
    for (let i = 0; i < 100; i++) {
      let newArtist = Artist({
        name: artists[i],
        albums: allArtistAlbums[i]
      });
      newArtist.save((err, data) => {
        if (err) {
          console.error('failed to save artist');
        }
        console.log('Saved artist');
      });
    }
  }
}
var stuff = new RandomDataGenerator();
