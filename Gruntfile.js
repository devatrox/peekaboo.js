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
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['jquery.peekaboo.js'],
          dest: '.'
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
          src: ['jquery.peekaboo.js', 'jquery.peekaboo.min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-banner');

  grunt.registerTask('default', ['uglify', 'copy', 'usebanner']);

};
