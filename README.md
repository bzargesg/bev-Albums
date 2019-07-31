# Spot-a-Fly Albums

A React.js project mocking both the sidebar and album list component from spotify.

## Example combined with other microservices 
[Spot-a-fly youtube](https://www.youtube.com/watch?v=dnSiX6tHUDo&feature=youtu.be)\
[]https://gph.is/g/4gDey6A

## Getting Started

Run npm install and npm run all to rebuild bundle.js and start server.
Run npm run seed-data to seed database.

### Prerequisites

node >= 6.1

## Running the tests

npm run test or npm run coverage

### Break down into end to end tests

1. Album test
  -tests rendering of each component
  -tests display of context menu and disappearance of context menu
2. AlbumList test
  -tests render of each component area 
  -tests show more button
3. Database Helper test
  -tests functions for get all and filter
  -tests to ensure error messages
4. Context menu test
  -Tests for each field of context menu based on album or sidebar
5. Route/API test
  -tests each route 
  -tests each route's failure case
6. Sidebar tests
  -tests each component/dynamic actions suchas mouseover
  -tests menu differentiation on sidebar


## Deployment

Can build a docker image set with included docker-compose file. Deploy with a mounted mongoDB image.

## Built With

* [MongoDB](https://www.mongodb.com/) - Database
* [React.JS](https://reactjs.org/) - Javascript library
* [Jest](https://jestjs.io/) - Testing framework
* [Mongoose](https://mongoosejs.com/) - ORM for MongoDB
* [Expressjs](https://expressjs.com/) - Web framework for Node.JS
* [Node.js](https://nodejs.org/en/about/) - Javascript runtime for servers

## Authors

* **Bevan Zarges**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Spotify

