/*global module:false*/
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/perf.js']
        }
    });

    grunt.registerTask('default', ['jshint']);
};