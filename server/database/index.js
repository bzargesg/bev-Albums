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

var prefixes = [
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
var suffixes = [
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
var types = [
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

var albumVals = () => {
  //name, image, type
  var names = generateSongNames();
  var genres = generateGenreType();
  var imagesList = [];

  Promise.all(generateAlbumPic())
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
};
var generateArtistNames = () => {
  var bandNames = [];
  for (let i = 0; i < 100; i++) {
    var randomPre = prefixes[Math.floor(Math.random() * prefixes.length)];
    var randomSuf = suffixes[Math.floor(Math.random() * suffixes.length)];
    bandNames.push('The ' + randomPre + ' ' + randomSuf);
  }
  return bandNames;
};
var generateGenreType = () => {
  var genres = [];
  for (let i = 0; i < 100; i++) {
    var randomGenre = types[Math.floor(Math.random() * types.length)];
    genres.push(randomGenre);
  }
  return genres;
};
var generateSongNames = () => {
  var preAndSuf = prefixes.concat(suffixes);
  var songNames = [];
  for (let i = 0; i < 100; i++) {
    var randFirst = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
    var randSecond = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
    var randThird = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
    songNames.push(`${randFirst} ${randSecond} ${randThird}`);
  }
  return songNames;
};
var generateBio = () => {
  var preAndSuf = prefixes.concat(suffixes);
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
};
var generateAlbumPic = cb => {
  let imagesList = [];
  let promiseArr = [];
  for (let i = 0; i < 100; i++) {
    let randomNum = Math.floor(Math.random() * 151);
    let imgURL = `https://source.unsplash.com/collection/893352/120x120/?sig=${randomNum}`;
    promiseArr.push(fetch(imgURL));
  }
  return promiseArr;
};
albumVals();
var artisVals = () => {
  //name albums
};
// let newAlbums = new Album(vals);
// let newArtists = new Artist(vals);

// newAlbums.save((err, data) => {
//   if (err) {
//   }
// });

// newArtists.save((err, data) => {
//   if (err) {
//   }
// });
// class PopulateArtist {
//   constructor() {}
// }
