module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['lib/**/*.js', 'test/**/*.js'],
            options: {
                jshintrc: true,
                globals: {
                    console: true,
                    module: true
                }
            }
        },
        simplemocha: {
            options: {
                globals: ['should'],
                timeout: 3000,
                ignoreLeaks: false,
                // grep: '*-test',
                ui: 'bdd',
                reporter: 'tap'
            },
            all: { src: ['test/**/*.js'] }
        }
    });

    grunt.registerTask('test', ['jshint', 'simplemocha']);
};
