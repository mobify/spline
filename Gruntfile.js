module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
        options: {
            browsers: ['last 4 versions', 'ie 8', 'ie 9', 'iOS >= 6.0', 'Android >= 2.3', 'last 4 ChromeAndroid versions']
        },
        multiple_files: {
            flatten: true,
            src: 'test/*.css', // -> src/css/file1.css, src/css/file2.css
        },
    },
    sass: {
        dist: {
            options: {
                style: 'nested',
                sourcemap: 'none'
            },
            files: {
                'test/test.css': 'test/test.scss'
            }
        }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['sass', 'autoprefixer']);

};
