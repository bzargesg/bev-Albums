import 'babel-polyfill';

const fetch = require('node-fetch');
const express = require('express');

jest.mock('../server/database/index.js', () => ({ Artist: 'stuff', Album: 'other' }));
const db = require('../server/database/index.js');

const { DatabaseQueryHandler } = require('../server/database/DatabaseQueryHandler.js');

jest.mock('../server/database/DatabaseQueryHandler.js', () => ({
  DatabaseQueryHandler: {
    getArtistAlbums: (artist, cb) => {
      const testDBobj = [
        {
          _id: '5c9faf730f3ad65bb9d06598',
          name: 'Lampshades Wheeled Nerdy',
          image:
            'https://images.unsplash.com/photo-1464925257126-6450e871c667?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=280&h=280&fit=crop&ixid=eyJhcHBfaWQiOjF9',
          type: 'Compilation',
          __v: 0,
        },
      ];
      if (artist === 'fail') {
        cb(404, null);
      } else {
        cb(null, testDBobj);
      }
    },
  },
}));

const app = express();
app.use(express.json());
require('../server/router.js')(app);

const PORT = 3000;
let listener;

const serverSetUp = async () => {
  listener = app.listen(PORT, (err) => {});
};
const serverEnd = async () => {
  listener.close();
};

const setUp = (routeType, artist = 'The stuff') => `http://localhost:3000/data/${routeType}/${artist}`;
describe('Test routes ', () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  beforeEach(() => {
    serverSetUp();
  });
  afterEach(() => {
    serverEnd();
  });

  it('route: albumsbyartist ', async () => {
    expect.assertions(1);
    const url = setUp('albumsbyartist');
    return fetch(url, options)
      .then(data => data.json())
      .then(values => expect(values.length).toBe(1));
  });
  it('albumsbyartist failroute ', () => {
    expect.assertions(1);
    const url = setUp('albumsbyartist', 'fail');
    return fetch(url, options)
      .then(data => data.json())
      .then(stuff => console.log(stuff))
      .catch((err) => {
        expect(err.type).toBe('invalid-json');
      });
  });
  it('route: epswithartist ', () => {
    expect.assertions(1);
    const url = setUp('epswithartist');
    return fetch(url, options)
      .then(data => data.json())
      .then(values => expect(values.length).toBe(1));
  });
  it('epswithartist failroute ', () => {
    expect.assertions(1);
    const url = setUp('epswithartist', 'fail');
    return fetch(url, options)
      .then(data => data.json())
      .then(stuff => console.log(stuff))
      .catch((err) => {
        expect(err.type).toBe('invalid-json');
      });
  });
  it('route: compilationswithartist ', () => {
    expect.assertions(1);
    const url = setUp('compilationswithartist');
    return fetch(url, options)
      .then(data => data.json())
      .then(values => expect(values.length).toBe(1));
  });
  it('compilations failroute ', () => {
    expect.assertions(1);
    const url = setUp('compilationswithartist', 'fail');
    return fetch(url, options)
      .then(data => data.json())
      .then(stuff => console.log(stuff))
      .catch((err) => {
        expect(err.type).toBe('invalid-json');
      });
  });
  it('route: albumswithartist ', () => {
    expect.assertions(1);
    const url = setUp('albumswithartist');
    return fetch(url, options)
      .then(data => data.json())
      .then(values => expect(values.length).toBe(1));
  });
  it('albumswithartist failroute ', () => {
    expect.assertions(1);
    const url = setUp('albumswithartist', 'fail');
    return fetch(url, options)
      .then(data => data.json())
      .then(stuff => console.log(stuff))
      .catch((err) => {
        expect(err.type).toBe('invalid-json');
      });
  });
});
