require('coffee-script');
module.exports = require('./grunt.coffee');
grunt.registerTask('heroku', 'clean less mincss');