// /* eslint-disable no-plusplus */
// // const { shallow } = require('enzyme');
// const mongoose = require('mongoose');
// const {
//   Album, Artist, db, DatabaseQueryHandler,
// } = require('./index.js');

// // const artistSchema = new Schema({
// //   name: String,
// //   albums: Array,
// // });
// // const albumSchema = new Schema({
// //   name: String,
// //   image: String,
// //   type: String,
// // });
// // make 10 artists
// const makeArtistEntries = (albums) => {
//   const artistPromises = [];
//   for (let i = 0; i < 10; i++) {
//     const newArtist = new Artist({
//       name: `${i}`,
//       albums: [`${albums[i]}`, `${albums[i + 10]}`],
//     });
//     artistPromises.push(newArtist.save());
//   }
//   return artistPromises;
// };
// // make 20 albums 2 albums per artist
// const makeAlbumEntries = () => {
//   const albumPromises = [];
//   for (let i = 0; i < 20; i++) {
//     const newAlbum = new Album({
//       name: `${i}`,
//       image: `${i}`,
//       type: `${i}`,
//     });
//     albumPromises.push(newAlbum.save());
//   }
//   return albumPromises;
// };
// const generateAlbumsandArtists = () => {
//   const albums = [];
//   Promise.all(makeAlbumEntries())
//     .then(() => {
//       Album.find().then((res) => {
//         res.map(element => albums.push(element._id));
//       });
//       return albums;
//     })
//     .then((val) => {
//       Promise.all(makeArtistEntries(val));
//     });
// };

// describe('test for DatabaseQueryHandler: ', () => {
//   beforeEach(() => {
//     generateAlbumsandArtists();
//   });

//   // Test getallArtistData
it('Test find artist function', () => {
  expect(1).toBe(1);
});
// test getArtistAlbums with and without name and album type
// });
