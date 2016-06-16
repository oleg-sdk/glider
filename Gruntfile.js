// Generated on 2015-03-17 using generator-bootstrap-less 3.2.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      coffee: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee']
      },
      bake: {
        files: [ "<%= yeoman.app %>/includes/**","<%= yeoman.app %>/partials/**" ],
        tasks: "bake:build"
      },
      less: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.less'],
        tasks: ['less']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9001,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        '!<%= yeoman.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.test.options.port %>/index.html']
        }
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: '{,*/}*.coffee',
          dest: '<%= yeoman.app %>/scripts',
          ext: '.js'
        }]
      }
    },
    less: {
      dist: {
        files: {
          '<%= yeoman.app %>/styles/main.css': ['<%= yeoman.app %>/styles/main.less'],
          '<%= yeoman.app %>/styles/district.css': ['<%= yeoman.app %>/styles/district.less'],
          '<%= yeoman.app %>/styles/ourstory.css': ['<%= yeoman.app %>/styles/ourstory.less'],
          '<%= yeoman.app %>/styles/resources.css': ['<%= yeoman.app %>/styles/resources.less'],
          '<%= yeoman.app %>/styles/careers.css': ['<%= yeoman.app %>/styles/careers.less'],
          '<%= yeoman.app %>/styles/press.css': ['<%= yeoman.app %>/styles/press.less'],
          '<%= yeoman.app %>/styles/teacher.css': ['<%= yeoman.app %>/styles/teacher.less'],
          '<%= yeoman.app %>/styles/questiontour.css': ['<%= yeoman.app %>/styles/questiontour.less'],
          '<%= yeoman.app %>/styles/terms.css': ['<%= yeoman.app %>/styles/terms.less'],
          '<%= yeoman.app %>/styles/privacy.css': ['<%= yeoman.app %>/styles/privacy.less'],
          '<%= yeoman.app %>/styles/training.css': ['<%= yeoman.app %>/styles/training.less'],
          '<%= yeoman.app %>/styles/landing.css': ['<%= yeoman.app %>/styles/landing.less'],
          '<%= yeoman.app %>/styles/webinars.css': ['<%= yeoman.app %>/styles/webinars.less']
        },
        options: {
          sourceMap: true,
          sourceMapFilename: '<%= yeoman.app %>/styles/styles_sourcemap.css.map',
          sourceMapBasepath: '<%= yeoman.app %>/',
          sourceMapRootpath: '/'
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dist: {}
    },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/fonts/{,*/}*.*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/main.css': [
            '.tmp/styles/{,*/}main.css',
            '<%= yeoman.app %>/styles/{,*/}main.css'
          ],
          '<%= yeoman.dist %>/styles/district.css': [
            '.tmp/styles/{,*/}district.css',
            '<%= yeoman.app %>/styles/{,*/}district.css'
          ],
          '<%= yeoman.dist %>/styles/ourstory.css': [
            '.tmp/styles/{,*/}ourstory.css',
            '<%= yeoman.app %>/styles/{,*/}ourstory.css'
          ],
          '<%= yeoman.dist %>/styles/resources.css': [
            '.tmp/styles/{,*/}resources.css',
            '<%= yeoman.app %>/styles/{,*/}resources.css'
            ],
          '<%= yeoman.dist %>/styles/careers.css': [
            '.tmp/styles/{,*/}careers.css',
            '<%= yeoman.app %>/styles/{,*/}careers.css'
          ],
          '<%= yeoman.dist %>/styles/press.css': [
            '.tmp/styles/{,*/}press.css',
            '<%= yeoman.app %>/styles/{,*/}press.css'
          ],
          '<%= yeoman.dist %>/styles/teacher.css': [
            '.tmp/styles/{,*/}teacher.css',
            '<%= yeoman.app %>/styles/{,*/}teacher.css'
          ],
          '<%= yeoman.dist %>/styles/questiontour.css': [
            '.tmp/styles/{,*/}questiontour.css',
            '<%= yeoman.app %>/styles/{,*/}questiontour.css'
          ],
          '<%= yeoman.dist %>/styles/terms.css': [
            '.tmp/styles/{,*/}terms.css',
            '<%= yeoman.app %>/styles/{,*/}terms.css'
          ],
          '<%= yeoman.dist %>/styles/privacy.css': [
            '.tmp/styles/{,*/}privacy.css',
            '<%= yeoman.app %>/styles/{,*/}privacy.css'
          ],
          '<%= yeoman.dist %>/styles/training.css': [
            '.tmp/styles/{,*/}training.css',
            '<%= yeoman.app %>/styles/{,*/}training.css'
          ],
          '<%= yeoman.dist %>/styles/landing.css': [
            '.tmp/styles/{,*/}landing.css',
            '<%= yeoman.app %>/styles/{,*/}landing.css'
          ],
          '<%= yeoman.dist %>/styles/webinars.css': [
            '.tmp/styles/{,*/}webinars.css',
            '<%= yeoman.app %>/styles/{,*/}webinars.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            'fonts/{,*/}*.*',
            '.htaccess',
            'images/{,*/}*.{webp,gif}',
            'mail/**',
            'api/**',
            'cache/**',
            '{,*/}*.json'
          ]
        }]
      },
      server: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/font-awesome/fonts/',
          dest: '<%= yeoman.app %>/fonts/font-awesome/',
          src: ['*']
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/bootstrap/dist/fonts/',
          dest: '<%= yeoman.app %>/fonts/',
          src: ['*']
        }]
      }
    },
    concurrent: {
      dist: [
        'coffee',
        'less',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    bake: {
      build: {
          options: {

          },
          files: {
              "app/index.html": "app/partials/_home.html",
              "app/districts.html": "app/partials/_district.html",
              "app/district.html": "app/partials/_district.html",
              "app/our-story.html": "app/partials/_ourstory.html",
              "app/resources.html": "app/partials/_resources.html",
              "app/careers.html": "app/partials/_careers.html",
              "app/press.html": "app/partials/_press.html",
              "app/teachers.html": "app/partials/_teachers.html",
              "app/question-type-tour.html": "app/partials/_questiontour.html",
              "app/terms-of-service.html": "app/partials/_terms.html",
              "app/privacy-policy.html": "app/partials/_privacy.html",
              "app/teacher-training-hub.html": "app/partials/_training.html",
              "app/landing.html": "app/partials/_landing.html",
              "app/demo.html": "app/partials/_demo.html",
              "app/webinars.html": "app/partials/_webinars.html"
          }
      },
    }
  });
grunt.loadNpmTasks('grunt-postcss');

grunt.loadNpmTasks( "grunt-bake" );

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'bake:build',
      'coffee',
      'less',
      'copy:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', [
    'clean:server',
    'coffee',
    'less',
    'copy:server',
    'connect:test',
    'mocha'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'bake:build',
    'copy:server',
    'useminPrepare',
    'concurrent',
    'cssmin',
    'concat',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
