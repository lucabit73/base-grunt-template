module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ["dist/*"],
		concat: {
		    options: {
				separator: ';',
		    },
		    dist: {
				src: ['src/js/vendor/other/*.js', 'src/js/plugin.js', 'src/js/main.js'],
				dest: 'src/js/built.js',
		    },
		},
		stripDebug: {
			dist: {
				files: {
					'src/js/built_noConsole.js': 'src/js/built.js'
				}
			}
		},
		uglify: {
			option: {
				mangle: false,
				compress: {
					drop_console: true
				}
			},
			target: {
				files: {
					'dist/js/built.min.js': ['src/js/built_noConsole.js']
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'nested'
				},
				files: {
					'src/css/main.css': 'src/css/main.scss',
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
				  'dist/css/style.min.css': ['src/css/normalize.css', 'src/css/main.css']
				}
			}
		},
		watch: {
			css: {
				files: 'src/css/*.scss',
				tasks: ['sass']
			},
			script: {
				files: ['src/js/main.js', 'src/js/plugin.js'],
				tasks: ['concat']
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, flatten: true, src: ['src/js/vendor/modernizr-2.8.3.min.js'], dest: 'dist/js/vendor/'},
				]
			}
		},
		processhtml: {
			dist: {
				files: {
					'dist/index.html': 'src/index.html'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-strip-debug');
	grunt.loadNpmTasks('grunt-processhtml');

	grunt.registerTask('default', ['clean', 'concat', 'stripDebug', 'uglify', 'sass', 'cssmin', 'processhtml', 'copy']);
};