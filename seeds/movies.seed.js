const mongoose = require ("mongoose");
const Movie = require ("../models/Movie.model");
const MONGODB_URI = 'mongodb://localhost:27017/lab-express-cinema';
mongoose.set('strictQuery', true);
const movies = require('../data/movies');

mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any movies to the database, let's remove all existing ones
    return Movie.deleteMany();
  })
  .then(() => {
    return Movie.create(movies);
  })
  .then(createdMovies => console.log(createdMovies))
  .then(() => {
    mongoose.disconnect();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

