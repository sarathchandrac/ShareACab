const assert = require('assert');
const User = require('../src/models/user');

describe('Creating Records', () => {
  it('saves a user', (done) => {
    // assert( 1+1 === 2);

    const joe = new User({name: 'Joe'});
    // save persistant record to db
    joe.save()
      .then(()=> {
        assert(!joe.isNew);
      })
    assert( joe.name === 'Joe');
    done();

  });
});