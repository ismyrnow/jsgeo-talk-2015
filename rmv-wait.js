var waitTimes = require('rmv-wait-times');

// Get town from command line arguments.
var town = process.argv[2];

// Get RMV wait times as JSON.
waitTimes(function (err, results) {

  // Pick just the town we need.
  var result = results.filter(x => x.town === town)[0];

  // Output the result.
  console.log('Licensing: %s, Registration: %s',
    result.licensing, result.registration);

});
