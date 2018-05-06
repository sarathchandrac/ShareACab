// Test connection to Mongo using Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
before((done) => {
  mongoose.connection
  .once('open', () => {done();})
  .on('error', (error) => console.log('Error' , error));

})


beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});