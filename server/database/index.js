var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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
var artistSchema = new Schema({
  bio: String,
  image: String,
  body: String,
  appearsOn: [],
  relatedArtists: [],
  collabAlbumId: []
});

var songSchema = new Schema({
  name: String,
  albumid: String,
  artistid: String,
  plays: Number
});

var albumSchema = new Schema({
  name: String,
  artistid: String,
  image: String,
  collaborators: [],
  albumType: String,
  Date: Date
});

var generateBandNames = () => {
  var bandNames = [];
  for (let i = 0; i < 100; i++) {
    var randomPre = prefixes[Math.floor(Math.random() * prefixes.length)];
    var randomSuf = suffixes[Math.floor(Math.random() * suffixes.length)];
    bandNames.push('The ' + randomPre + ' ' + randomSuf);
  }
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
};
var generateBio = () => {
  var preAndSuf = prefixes.concat(suffixes);
  var bios = [];
  for (let i = 0; i < 100; i++) {
    let randPara = '';
    for (let j = 0; j < 100; j++) {
      var randWord = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
      randPara += randWord;
    }
    bios.push(`${randPara}`);
  }
};
var generateAlbumPic = () => {
  let imgURL = 'https://source.unsplash.com/collection/893352/120x120';
  let imagesList = [];
  for (let i = 0; i < 100; i++) {
    fetch(imgURL).then(response => {
      imagesList.push(response.url);
    });
  }
};

const Song = mongoose.model('Song', songSchema);
const Album = mongoose.model('Album', artistSchema);
const Artist = mongoose.model('Artist', albumSchema);

let newSongs = new Song(vals);
let newAlbums = new Album(vals);
let newArtists = new Artist(vals);

newSongs.save((err, data) => {
  if (err) {
  }
});
newAlbums.save((err, data) => {
  if (err) {
  }
});
newArtists.save((err, data) => {
  if (err) {
  }
});
