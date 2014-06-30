module.exports = function(grunt) {

  grunt.initConfig({
    bwr: grunt.file.readJSON('bower.json'),

    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        }
      },
      dist: {
        options: {
          preserveComments: false,
        },
        files: {
          'jquery.peekaboo.min.js': ['src/jquery.peekaboo.js']
        }
      },
      lib: {
        options: {
          preserveComments: 'some',
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
          src: ['src/peekaboo.css'],
          dest: '.',
          filter: 'isFile',
          flatten: true
        },
        {
          expand: true,
          src: ['src/theme/*'],
          dest: 'themes/default',
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

    autoprefixer: {
      dist: {
        options: {
          browsers: ['> 5%', 'last 2 versions', 'Explorer >= 8']
        },
        src: [
          'themes/default/style.css',
          'peekaboo.css'
        ]
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
            'themes/default/style.css',
            'peekaboo.css',
            'jquery.peekaboo.js',
            'jquery.peekaboo.min.js'
          ]
        }
      }
    },

    compress: {
      build: {
        options: {
          archive: 'peekaboo.js-v<%= bwr.version %>.zip'
        },
        files: [
          {
            src: [
              'lib/**',
              'themes/**',
              'jquery.peekaboo.js',
              'jquery.peekaboo.min.js',
              'peekaboo.css',
              'LICENSE',
              'README.md'
            ],
            dest: '.',
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['uglify', 'copy', 'autoprefixer', 'usebanner']);
  grunt.registerTask('build', ['default', 'compress']);

};
