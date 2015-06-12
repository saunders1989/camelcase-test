module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
         'css/style.css': 'sass/style.scss'
        }
      }
    },
    criticalcss: {
      custom: {
        options: {
          url: "http://madeformums.local/critical-css-camel-case",
          width: 1200,
          height: 900,
          outputfile: "css/dist/critical.css",
          filename: "css/style.css", // Using path.resolve( path.join( ... ) ) is a good idea here
          buffer: 800*1024,
          ignoreConsole: false
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-criticalcss');

  // Default task(s).
  grunt.registerTask('default', [
    'sass',
    'criticalcss'
  ]);

};