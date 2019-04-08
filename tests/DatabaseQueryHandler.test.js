const { DatabaseQueryHandler } = require('../server/database/DatabaseQueryHandler.js');

jest.mock('../server/database/index.js', () => ({
  Artist: {
    find: (artistname, cb) => {
      const testDBobj = [
        {
          _id: "ObjectId('5c9faf730f3ad65bb9d065e7')",
          albums: ["ObjectId('5c9faf730f3ad65bb9d065e7')"],
          name: 'The Squirming Fever',
          __v: 0,
        },
      ];
      if (artistname.name === 'fail') {
        cb(404, null);
      } else {
        cb(null, testDBobj);
      }
    },
  },
  Album: {
    findById: id => ({
      exec: () => ({
        _id: '5c9faf730f3ad65bb9d06598',
        name: 'Lampshades Wheeled Nerdy',
        image:
          'https://images.unsplash.com/photo-1464925257126-6450e871c667?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=280&h=280&fit=crop&ixid=eyJhcHBfaWQiOjF9',
        type: 'Compilation',
        __v: 0,
      }),
    }),
  },
}));
const db = require('../server/database/index.js');

describe('test DatabaseQueryHandler ', () => {
  it('getAllArtistData', () => {
    expect.assertions(1);
    return DatabaseQueryHandler.getAllArtistData('guy', (err, data) => {
      expect(data.length).toBe(1);
    });
  });

  it('getAllArtistData fail ', () => {
    expect.assertions(1);
    return DatabaseQueryHandler.getAllArtistData('fail', (err, data) => {
      expect(err).toBe(404);
    });
  });

  it('getArtistAlbums', () => {
    expect.assertions(1);
    return DatabaseQueryHandler.getArtistAlbums(
      'guy',
      (err, data) => {
        expect(data.length).toBe(1);
      },
      'Compilation',
    );
  });
  it('getArtistAlbums', () => {
    expect.assertions(1);
    return DatabaseQueryHandler.getArtistAlbums(
      'guy',
      (err, data) => {
        expect(data.length).toBe(0);
      },
      'Includes',
    );
  });

  it('getAllArtistData fail ', () => {
    expect.assertions(1);
    return DatabaseQueryHandler.getArtistAlbums(
      'fail',
      (err, data) => {
        expect(err).toBe(404);
      },
      'Includes',
    );
  });
});
