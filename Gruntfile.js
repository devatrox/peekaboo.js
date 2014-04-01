module.exports = function(grunt) {

  grunt.initConfig({
    bwr: grunt.file.readJSON('bower.json'),

    uglify: {
      dist: {
        options: {
          preserveComments: false,
          mangle: {
            except: ['jQuery']
          }
        },
        files: {
          'jquery.peekaboo.min.js': ['src/jquery.peekaboo.js']
        }
      },
      lib: {
        options: {
          preserveComments: 'some',
          mangle: {
            except: ['jQuery']
          }
        },
        files: {
          'lib/jquery.transit.min.js': ['bower_components/jquery.transit/jquery.transit.js']
        }
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          src: ['src/jquery.peekaboo.js'],
          dest: '.',
          filter: 'isFile',
          flatten: true
        },
        {
          expand: true,
          src: ['bower_components/jquery/jquery.min.js'],
          dest: 'lib/',
          filter: 'isFile',
          flatten: true
        }]
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '/*!\n' +
                  '* <%= bwr.name %> - <%= bwr.description %>\n' +
                  '* v<%= bwr.version %>\n' +
                  '* <%= bwr.homepage %>\n' +
                  '*/\n',
          linebreak: true
        },
        files: {
          src: [
            'jquery.peekaboo.js',
            'jquery.peekaboo.min.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-banner');

  grunt.registerTask('default', ['uglify', 'copy', 'usebanner']);

};
