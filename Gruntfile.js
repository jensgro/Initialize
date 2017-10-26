module.exports = function(grunt) {
	// require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			html: {
				files: [{
					expand: true,
					cwd: 'site/dev',
					src: ['css/**', 'js/**', 'images/**'],
					dest: 'site/html/'
				}]
			}, // html
			styleguide: {
				files: [{
					expand: true,
					cwd: 'site/dev',
					src: ['css/**', 'js/**', 'images/**'],
					dest: 'site/styleguide/'
				}]
			},
			htmlstyleguide: {
				files: [{
					expand: true,
					cwd: 'site/styleguide',
					src: ['css/**', 'js/**', 'images/**'],
					dest: 'site/html-styleguide/'
				}]
			},
			watchme: {
				files: [{
					expand: true,
					cwd: 'site/dev',
					src: ['css/css.css'],
					dest: 'site/styleguide/'
				}]
			}
		}, //copy

		// remove all files from folder xxx
		clean: {
			html: ['site/html'],
			htmlstyleguide: ['site/html-styleguide']
		},

		sass: {
			dev: {
				options: {
					sourceMap: false,
					outputStyle: 'expanded'
				}	,
				files: [{
					expand: true,
					cwd:  'site/dev/sass',
					src:  ['*.scss'],
					dest: 'site/dev/css',
					ext:  '.css'
				}]
			},
			styleguide: {
				options: {
					sourceMap: false,
					outputStyle: 'expanded'
				},
				files: [{
					expand: true,
					cwd:  'site/styleguide/sass',
					src:  ['*.scss'],
					dest: 'site/styleguide/css',
					ext:  '.css'
				}]
			}
		}, // sass

		watch: {
			dev: {
				files: ['site/dev/sass/**/*.scss'],
				tasks: ['sass:dev', 'postcss:dev', 'copy:watchme']
			},
			styleguide: {
				files: ['site/styleguide/sass/**/*.scss'],
				tasks: ['sass:styleguide', 'postcss:styleguide']
			}
		}, // watch

		php2html: {
			dev: {
				options: {
					// Task-specific options go here.
          haltOnError: false,
					// relative links should be renamed from .php to .html
					processLinks: true,
					htmlhint: {
						'tagname-lowercase': true,
						'attr-lowercase': true,
						'attr-value-double-quotes': true,
						'doctype-first': true,
						'tag-pair': true,
						'spec-char-escape': true,
						'id-unique': true,
						'src-not-empty': true
					}, // htmlhint
					docroot: 'site/dev'
				}, // options
				files: [{
					expand: true,
					cwd: 'site/dev/',
					src: ['*.php'],
					dest: 'site/html',
					ext: '.html'
				}]
			}, // default
			styleguide: {
				options: {
					// Task-specific options go here.
          haltOnError: false,
					// relative links should be renamed from .php to .html
					processLinks: true,
					htmlhint: {
						'tagname-lowercase': true,
						'attr-lowercase': true,
						'attr-value-double-quotes': true,
						'doctype-first': true,
						'tag-pair': true,
						'spec-char-escape': true,
						'id-unique': true,
						'src-not-empty': true
					}, // htmlhint
					docroot: 'site/styleguide'
				}, // options
				files: [{
					expand: true,
					cwd: 'site/styleguide/',
					src: ['*.php'],
					dest: 'site/html-styleguide',
					ext: '.html'
				}]
			}// styleguide
		}, // php2html

		validation: {
			html: {
	     options: {
	      reset: grunt.option('reset') || false,
	      stoponerror: false
	     },
	     files: {
	      src: ['site/html/*.html']
	     }
	    },
	    inc: {
	     options: {
	      reset: grunt.option('reset') || true,
	      stoponerror: false,
	      wrapfile: 'inc-wrapper.html',
	      relaxerror: 'Saw <?. Probable cause: Attempt to use an XML processing instruction in HTML. (XML processing instructions are not supported in HTML.)'
	     },
	     files: {
	      src: ['site/dev/inc/**/*.inc']
	     }
	    }
		}, // validation

		postcss: {
      options: {
        processors: [
            require('autoprefixer')({
              browsers: ['last 2 versions', '> 1%', 'iOS >= 6', 'Android > 3', 'ie > 8', 'Firefox ESR']
            })
          ]
			},

			dev: {
        options: {
          map: {
            inline: false,
            annotation: 'site/dev/css'
          }
        },
        src:  'site/dev/css/styles.css',
				dest: 'site/dev/css/css.css'
			},
			styleguide: {
        options: {
          map: {
            inline: false,
            annotation: 'site/styleguide/css'
          }
        },
				src:  'site/styleguide/css/styleguide.css',
				dest: 'site/styleguide/css/styleguide-neu.css'
			}
		}, // postCSS

		compress: {
      html: {
        options: {
            archive: 'site/zip/html-version.zip'
        },
        files: [ {expand: true, cwd: 'site/html/', src: ['**'], dest: 'html-version'}]
      }, // html
      htmlstyleguide: {
        options: {
            archive: 'site/zip/html-styleguide.zip'
        },
        files: [ {expand: true, cwd: 'site/html-styleguide/', src: ['**'], dest: 'html-styleguide'}]
      } // htmlstyleguide
    } // compress



	}); // grunt.initConfig

	grunt.registerTask('default', ['watch:dev']);
	grunt.registerTask('sg-watch', ['watch:styleguide']);
	grunt.registerTask('html', ['clean:html', 'php2html:dev', 'copy:html', 'validation:html','compress:html']);
	grunt.registerTask('html-sg', ['clean:htmlstyleguide', 'sass:styleguide', 'php2html:styleguide','copy:htmlstyleguide', 'compress:htmlstyleguide']);
	grunt.registerTask('inc', ['validation:inc']);
};
