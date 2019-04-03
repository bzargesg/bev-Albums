const fetch = require('node-fetch');
const express = require('express');
const router = require('../server/router.js');
// const Database = require('./database/DatabaseQueryHandler.js');
// const { DatabaseQueryHandler } = require('./database/DatabaseQueryHandler.js');

// jest.mock('./database/DatabaseQueryHandler.js');

const app = express();
app.use(express.json());
require('../server/router.js')(app);

const PORT = 3000;
let listener;

const serverSetUp = () => {
  listener = app.listen(PORT, (err) => {});
};
const serverEnd = () => {
  listener.close();
};
const setUp = routeType => `http://localhost:3000/data/${routeType}/The Squirming Fever`;
describe('Test routes ', () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  beforeEach(() => {
    // DatabaseQueryHandler.mockImplementation(()=>{
    //   DatabaseQueryHandler:
    // });
    serverSetUp();
  });
  afterEach(() => {
    serverEnd();
  });
  it('route: albumsbyartist ', () => {
    expect.assertions(1);
    const url = setUp('albumsbyartist');
    return fetch(url, options)
      .then(data => data.json())
      .then(values => expect(values.length).toBe(15));
  });

  it('route: epswithartist ', () => {
    expect.assertions(1);
    const url = setUp('epswithartist');
    return fetch(url, options)
      .then(data => data.json())
      .then(values => expect(values.length).toBe(6));
  });
  it('route: compilationswithartist ', () => {
    expect.assertions(1);
    const url = setUp('compilationswithartist');
    return fetch(url, options)
      .then(data => data.json())
      .then(values => expect(values.length).toBe(3));
  });
  it('route: albumswithartist ', () => {
    expect.assertions(1);
    const url = setUp('albumswithartist');
    return fetch(url, options)
      .then(data => data.json())
      .then(values => expect(values.length).toBe(1));
  });
});
